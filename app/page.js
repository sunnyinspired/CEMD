
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LoginForm from "./(routes)/components/LoginForm";

const Home =  async () => {
  const session = await getServerSession(authOptions);
  if(session){
    redirect('/dashboard')
  }
 
  
  return (
    <>
    <LoginForm />
    </>
  )
}

export default Home
