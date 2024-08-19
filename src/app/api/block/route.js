import prisma from "../../../../prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const blockusers = await prisma.blocked.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return NextResponse.json(blockusers);
    } catch (error) {
        console.error('Error fetching blocked users:', error);

        // Возвращаем ответ с ошибкой
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect(); // Закрываем соединение с базой данных
    }
}