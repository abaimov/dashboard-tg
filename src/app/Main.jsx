"use client";
import {
    DataSheetGrid,
    textColumn,
    keyColumn,
} from 'react-datasheet-grid';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import 'react-datasheet-grid/dist/style.css';
import {useState} from "react";

// Если данные передаются в правильном формате, вы можете отказаться от этого преобразования
const transformData = (data) => {
    return data.map(item => ({
        telegramId: item.telegramId,
        nickname: item.nickname,
        language: item.language,
        createdAt: new Date(item.createdAt).toLocaleString() // Преобразование даты
    }));
};

export default function Main({users}) {
    const [data, setData] = useState(users);

    const columns = [
        {...keyColumn('telegramId', textColumn), title: 'ID', readOnly: true},
        {...keyColumn('nickname', textColumn), title: 'Nickname', readOnly: true},
        {...keyColumn('language', textColumn), title: 'Location', readOnly: true},
        {...keyColumn('createdAt', textColumn), title: 'Time', readOnly: true},
    ];

    return (
        <>
            <Tabs defaultValue="account" className="w-full">
                <TabsList>
                    <TabsTrigger value="account">Users</TabsTrigger>
                    <TabsTrigger value="password">Blocked</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="w-full">
                    <DataSheetGrid
                        className="w-full rounded-md"
                        value={data ? transformData(data) : []} // Можно убрать transformData, если данные уже корректные
                        columns={columns}
                        onChange={() => {}} // Оставляем пустым, чтобы предотвратить любые изменения
                    />
                </TabsContent>
                <TabsContent value="password" className="w-full">
                    <DataSheetGrid
                        className="w-full rounded-md"
                        value={data ? transformData(data) : []}
                        columns={columns}
                        onChange={() => {}} // Оставляем пустым, чтобы предотвратить любые изменения
                    />
                </TabsContent>
            </Tabs>
        </>
    );
}
