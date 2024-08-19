// pages/api/users.js

import {prismaClient as prisma} from "../../../../prisma/client";

import {NextResponse} from "next/server";

export async function GET() {
    const users = await prisma.user.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
    return NextResponse.json(users)
}