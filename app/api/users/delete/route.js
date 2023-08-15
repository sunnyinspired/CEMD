import User from "@/models/Users";
import { dbConnect } from "@/utils/db/config";

export async function POST(req){
    await dbConnect();
    try {
        const user_id = await req.json()
        const delete_user = await User.findByIdAndDelete(user_id)
        if(delete_user){

            return new Response("User Deleted", {
                status: 200
            })
        }
        else{
            return new Response("Failed to Delete Users", {
                status: 500
            })
        }
        
    } catch (error) {
        return new Response("Failed to Delete", {
            status: 500
        })
    }
}