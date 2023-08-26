"""Chat Router"""
from typing import Any
from fastapi import APIRouter, Request, Depends, HTTPException
from sse_starlette.sse import EventSourceResponse
from app.auth.schema import AgentJWTData, JWTData
from app.chat import service
from app.chat.schema import ChatRequest, UpdateChatRequest, ChatCompletionResponse
from app.common.schema import DictListResponse
from app.auth.security import validate_token, validate_agent_token
router = APIRouter()


@router.get("/list/{agent_id}", response_model=DictListResponse)
async def list_chat(agent_id: int, page: int, limit: int, token: JWTData = Depends(validate_token)):
    """获取回答历史"""
    data, total = service.list_chats(agent_id, token.user_id, page, limit)
    return {
        "code": 200,
        "msg": "success",
        "data": data,
        "total": total,
    }


@router.post("/completions")
async def chat(req: ChatRequest, request: Request, token: AgentJWTData = Depends(validate_agent_token)):
    """
    Chat Function, validates agent token.
    If you are using swagger, you need to explicitly change to the agent token
    """
    if req.messages[-1].role != "user":
        raise HTTPException(status_code=400, detail="The last message must be from the user.")
    if req.stream:
        return EventSourceResponse(
            service.chat_stream(
                req.messages[-1].content, request.client.host, token.agent_id),
            media_type="text/event-stream")
    else:
        resp: dict[str, Any] = service.chat(
            req.messages[-1].content, request.client.host, token.agent_id)
        return ChatCompletionResponse(**resp)


@router.put("/{uid}")
async def update_chat(uid: str, req: UpdateChatRequest, request: Request, token: AgentJWTData = Depends(validate_agent_token)):
    """更新问答历史记录 """
    update_args = {
        "ip_addr": request.client.host,
        "type": req.chat_type
    }
    service.update_chat(uid=uid, agent_id=token.agent_id, **update_args)
    return {
        "code": 200,
        "msg": "success",
    }
