import { useEffect } from "react";

export const getUsers =  (setGetUsers) =>{
    const getAll = () =>{
        fetch('/api/users')
        .then((response) => {
            if(response.status === 200){
                return response.json();
            }
            })
        .then((data) =>{
            setGetUsers(data)
        })
    }

    useEffect(() =>{
        getAll();
    },[])
}