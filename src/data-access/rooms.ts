import { db } from "@/db";
import { unstable_noStore } from "next/cache";

export default async function getRooms() {
    unstable_noStore();
    const rooms = await db.query.room.findMany();
    return rooms
} 