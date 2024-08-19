import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const users = await prisma.user.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return NextResponse.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);

        // Возвращаем ответ с ошибкой
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect(); // Закрываем соединение с базой данных
    }
}