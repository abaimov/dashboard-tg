import {prismaClient as prisma} from "../../../../prisma/client";

import {NextResponse} from "next/server";

export async function GET() {
    const blockusers = await prisma.blocked.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
    return NextResponse.json(blockusers)
}