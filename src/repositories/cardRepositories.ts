import { Cards } from "@prisma/client";
import { prisma } from "../config/db.js";

export type CreateCardData = Omit<Cards, "id">

export async function create(cardData: CreateCardData){
    await prisma.cards.create({
        data: cardData
    });
}

export async function getByTitle(title: string) {
    const card = prisma.cards.findFirst({
        where: {title}
    });

    return card
}

export async function get(userId: number){
    const cards = prisma.cards.findMany({
        where: {userId},
        select: {
            id: true,
            title: true
        }
    });

    return cards
}

export async function getById(id: number){
    const card = prisma.cards.findFirst({
        where: {id}
    })

    return card
}

export async function deleteById(id: number){
    await prisma.cards.delete({
        where: {id}
    })
}