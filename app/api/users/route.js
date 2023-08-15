import User from "@/models/Users";
import { dbConnect } from "@/utils/db/config";

export async function GET(req){
    await dbConnect();
    try {
        const users = await User.find({})
        return new Response(JSON.stringify(users), {
            status: 200
        })
        
    } catch (error) {
        return new Response("Failed to fetch Users", {
            status: 5000
        })
    }
}