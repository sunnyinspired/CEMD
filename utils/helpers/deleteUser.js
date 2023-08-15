import { getUpdatedUsers } from "./getUpdatedUsers";

export function DeleteUser(user_id, setAllUsers){
    try {
        fetch('/api/users/delete', {
            method: 'POST',
            body: JSON.stringify(user_id)
        })
        .then((response) =>{
            if(response.status === 200){
                getUpdatedUsers(setAllUsers)
                alert("User Deleted Successfully!");

            }

        })
    } catch (error) {
        console.log(error)
    }
}