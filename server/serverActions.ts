"use server"

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient ();

export async function createUser (username: string, password: string) {
    try {
        const user = await prisma.user.create ({
            data: {
                username: username,
                masterpassword: password,
                creds: {
                    
                }
            }
        });

        return user;
    } catch (e) {
        console.error (e);
    } finally {
        await prisma.$disconnect ();
    }
}