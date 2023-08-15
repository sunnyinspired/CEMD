import { getUpdatedUsers } from "./getUpdatedUsers";

export function saveUser(data, setUser, setAllUsers){
    try {
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then((response) =>{
            if(response.status === 201){
                getUpdatedUsers(setAllUsers)
                alert("User Saved Successfully!");
                setUser({
                    firstName: '',
                    lastName: '',
                    email: '',
                    role: '',
                    username: '',
                    password: ''
                })
            }
            if(response.status === 409){
               return alert("Email Already Exists!");
            }

        })
    } catch (error) {
        console.log(error)
    }
}