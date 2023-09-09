"use server"

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

export async function UserCreate (username: string, password: string) {
    try {
        await bcrypt
            .hash (password, 10)
            .then (async (hash: string) => {
                const user = await prisma.user.create({
                    data: {
                        username: username,
                        masterpassword: hash
                    },
                    include: {
                        creds: true
                    }
                });
            })
    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}

export async function UserLogin (username: string, password: string) {
    let validity = {
        existUser: false,
        validPassword: false
    }
    try {
        const user = await prisma.user.findUnique ({
            where: {
                username: username
            }
        });

        if (user?.username == username) {
            const comparision = await new Promise((resolve, reject) => {
                bcrypt.compare(password, user.masterpassword, (err: any, result: any) => {
                  if (err) {
                    console.error(err);
                    reject(err);
                  }
                  if (result) {
                    resolve(true);
                  } else {
                    resolve(false);
                  }
                });
              });

            if (comparision) {
                validity.existUser = true;
                validity.validPassword = true;
            } else {
                validity.existUser = true;
                validity.validPassword = false;
            }
        } else {
            validity.existUser = false;
            validity.validPassword = false;
        }
    } catch (e) {
        console.error (e);
    } finally {
        await prisma.$disconnect ();
        return validity;
    }
}