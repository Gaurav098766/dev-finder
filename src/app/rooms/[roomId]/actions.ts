'use server'
import { getSession } from "@/lib/auth"
import {StreamChat} from "stream-chat"

export async function generateTokenAction(){
    const session = await getSession();

    if(!session){
        throw new Error("No session Found")
    }
    const api_key = 'dw4d6pp2pn25' || process.env.STREAM_API_KEY;
    const api_secret = 'gq2nbhkzmajvfhp5f9uwv2r7m39np2vfdg3adccw5kc8bumcvz7p72bzk2nuvfts' || process.env.STREAM_API_SECRET;
    const serverClient = StreamChat.getInstance( api_key, api_secret);
    const token = serverClient.createToken(session?.user.id);
    return token;
}