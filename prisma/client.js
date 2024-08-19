import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
    return new PrismaClient();
};

const globalWithPrisma = globalThis;

export const prismaClient = globalWithPrisma.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
    globalWithPrisma.prismaGlobal = prismaClient;
}
