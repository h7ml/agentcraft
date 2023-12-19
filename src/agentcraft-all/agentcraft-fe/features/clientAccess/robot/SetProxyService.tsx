import React, { useEffect, forwardRef } from "react";
import { Box, Textarea, Title, Select, Group, Avatar, Text, Paper } from '@mantine/core';
import { getApplications, useAppStore, ApplicationResponseData } from 'store/application';
import { useClientAccessStore } from "store/clientAccess";
import { getKnowledgeBaseList, useKnowledgeBaseStore } from 'store/knowledgeBase';
import { KnowledgeBaseResponseData, Dataset } from 'types/knowledgeBase';
import { ROBOT_TYPES } from 'constants/client-access';


interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
    image: string;
    label: string;
    description: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
    ({ image, label, description, ...others }: ItemProps, ref) => (
        <div ref={ref} {...others}>
            <Group noWrap>
                <Avatar src={image} />
                <div>
                    <Text size="sm">{label}</Text>
                    <Text size="xs" opacity={0.65}>
                        {description}
                    </Text>
                </div>
            </Group>
        </div>
    )
);


export default function SetProxyService({ form }: any) {
    const originalAppList: ApplicationResponseData[] = useAppStore().appList;
    const originalKnowledgeBaseList: KnowledgeBaseResponseData[] = useKnowledgeBaseStore().knowledgeBaseList;
    const getApp = async () => {
        await getApplications();
    }
    const getKonwledgeBase = async (appId: any) => {
        try {
            await getKnowledgeBaseList(appId);
        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        getApp();
    }, []);
    const transformedAppList = originalAppList.map((item: ApplicationResponseData) => {
        return {
            label: item.name,
            value: item.id,
        }
    });
    const transformedKnowledgeBaseList = originalKnowledgeBaseList.map((item: KnowledgeBaseResponseData) => {
        return {
            label: item.name,
            value: item.id,
        }
    });

    return (
        <>
            <Paper shadow="xs" p="xl">
                <Title order={5}>配置机器人代理服务</Title>
                <Box mx="auto">
                    <Select
                        withAsterisk
                        data={ROBOT_TYPES}
                        itemComponent={SelectItem}
                        description="选择您要接入的机器人类型"
                        label="选择机器人类型"
                        filter={(value, item: any) =>
                            item.label.toLowerCase().includes(value.toLowerCase().trim()) ||
                            item.description.toLowerCase().includes(value.toLowerCase().trim())
                        }
                        placeholder=""
                        {...form.getInputProps('chatBotType')}
                    />

                    <Select
                        withAsterisk
                        data={transformedAppList}
                        description="选择要交付的应用"
                        label="应用"
                        placeholder=""
                        {...form.getInputProps('appId')}
                        onChange={(value: any) => {
                            form.setFieldValue('appId', value);
                            getKonwledgeBase(value);
                        }}
                    />
                    <Select
                        withAsterisk
                        data={transformedKnowledgeBaseList}
                        description="选择要交付的知识库智能体"
                        label="选择知识库智能体"
                        placeholder=""
                        {...form.getInputProps('agentId')}
                    />
                    <Textarea label="机器人代理服务描述" description="" placeholder=""  {...form.getInputProps('description')} />
                </Box>
            </Paper>
            
        </>
    );
}