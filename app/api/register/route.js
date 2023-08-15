import User from "@/models/Users";
import { dbConnect } from "@/utils/db/config"
import bcrypt from 'bcryptjs'

export const POST = async(req) =>{
    const saltRound = 10;
    try {
        await dbConnect();
        
        const { firstName, lastName, email, role, username, password } = await req.json();

        const isExisiting = await User.findOne({email});

        if(isExisiting){
            return new Response(JSON.stringify("Email Already Exists"),{status: 409})
        }
        const hashedPwd = await bcrypt.hash(password, saltRound)

        const newUser = new User({
            firstName, 
            lastName, 
            email, 
            role, 
            username, 
            password:hashedPwd
        });

        await newUser.save()

       return new Response(JSON.stringify(newUser), {status: 201})

    } catch (error) {
        return new Response(JSON.stringify(error.message), {status: 500})
    }
}