import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { KnowledgeBaseRequestPayload, KnowledgeBaseResponseData, KnowledgeBase } from 'types/knowledgeBase';
import { request } from 'utils/clientRequest';

interface AccessUrl {
    openApiUrl: string
    innerApiUrl: string
}
interface KnowledgeBaseStore {
    knowledgeBaseList: KnowledgeBaseResponseData[],
    open: boolean,
    chatDrawer: boolean,
    loading: boolean,
    isEdit: boolean,
    accessUrl: AccessUrl,
    currentKnowledgeBase?: KnowledgeBase | undefined,
    knowledgeBaseChatList: any[],
    setAccessUrl: (accessUrl: AccessUrl) => void;
    setChatDrawer: (chatDrawer: boolean) => void;
    setLoading: (loading: boolean) => void;
    setOpen: (open: boolean) => void;
    setEditStatus: (isEdit: boolean) => void;
    updateCurrentKnowledgeBase: (_: KnowledgeBase | undefined) => void;
    updateKnowledgeBaseList: (_: KnowledgeBaseResponseData[]) => void;
}

interface IPayload { keyword?: string, sessionId?: number, shareToken?: string }


export const useKnowledgeBaseStore = create<KnowledgeBaseStore>()(devtools((set) => ({
    knowledgeBaseList: [],
    knowledgeBaseChatList: [],
    open: false,
    chatDrawer: false,
    loading: false,
    isEdit: false,
    accessUrl: {
        openApiUrl: '',
        innerApiUrl: ''
    },
    currentKnowledgeBase: undefined,
    // 知识库列表
    updateCurrentKnowledgeBase: (currentKnowledgeBase: KnowledgeBase | undefined) => set((_state) => {
        return ({ currentKnowledgeBase })
    }),
    setChatDrawer: (chatDrawer: boolean) => set((_state) => {
        return ({ chatDrawer })
    }),
    setAccessUrl: (accessUrl: AccessUrl) => set((_state) => {
        return ({ accessUrl })
    }),
    setEditStatus: (isEdit: boolean) => set((_state) => {
        return ({ isEdit })
    }),
    setLoading: (status: boolean) => set((_state) => {
        return ({ loading: status })
    }),
    setOpen: (status: boolean) => set((_state) => {
        return ({ open: status })
    }),
    updateKnowledgeBaseList: (knowledgeBaseList: KnowledgeBaseResponseData[]) => set((_state: any) => ({ knowledgeBaseList }))
})))

export async function getKnowledgeBaseList(appId: number) {
    const state = useKnowledgeBaseStore.getState();
    const updateKnowledgeBaseList = state.updateKnowledgeBaseList;
    const res = await request(`/api/knowledgeBase/list?appId=${appId}`);
    const knowledgeBaseList = res.data;
    if (knowledgeBaseList) updateKnowledgeBaseList(knowledgeBaseList);

}

export async function getKnowledgeBase(id: any, shareToken?: string): Promise<KnowledgeBase> {

    const res = await request(`/api/knowledgeBase/get?id=${id}&shareToken=${shareToken || ''}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return res.data;

}


export async function addKnowledgeBase(payload: KnowledgeBaseRequestPayload) {
    const res = await request("/api/knowledgeBase/create", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = res.data;
    return data;

}

export async function deleteKnowledgeBase(knowledgeBaseId: any) {
    return await request(`/api/knowledgeBase/delete?agentId=${knowledgeBaseId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

}

export async function updateKnowledgeBase(id: any, payload: KnowledgeBaseRequestPayload) {
    return await request(`/api/knowledgeBase/update?id=${id}`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
        },
    });


}

export async function refreshToken(agentId: number) {
    const res = await request(`/api/knowledgeBase/token?agentId=${agentId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return res.data;
}


export async function getAccessUrl() {
    const res = await request(`/api/knowledgeBase/getAccessUrl`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",

        }
    });
    return res;
}

export async function getSessionHistory(
    agentId: number,
    payload: IPayload,
) {
    let count = 0;
    if (payload.keyword) {
        count += 1;
    }
    if (payload.sessionId) {
        count += 1;
    }
    if (count !== 1) {
        throw new Error('keyword or sessionId must be set');
    }
    let qr = `agent_id=${agentId}&page=0&limit=20`;
    if (payload.keyword) {
        qr = `${qr}&keyword=${payload.keyword}`;
    }
    if (payload.sessionId) {
        qr = `${qr}&session_id=${payload.sessionId}`;
    }
    if (payload.shareToken) {
        qr = `${qr}&shareToken=${payload.shareToken}`;
    }
    const res = await request(`/api/agentSession/history?${qr}`);
    return res;
}


export async function getSessionByKeyword(
    agentId: number,
    keyword: string,
    shareToken?: string
): Promise<any> {
    let url = `/api/agentSession/detailByKeyword?agent_id=${agentId}&keyword=${keyword}`;
    if (shareToken) {
        url += `&shareToken=${shareToken}`
    }
    return await request(url);
}


export async function removeSessionHistory(agentId: number , sessionId: number, shareToken?: string): Promise<any> {
    return await request(`/api/agentSession/remove?agent_id=${agentId}&session_id=${sessionId}&shareToken=${shareToken || ''}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
}

