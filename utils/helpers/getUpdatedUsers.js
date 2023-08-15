export const getUpdatedUsers =  (setGetUsers) =>{
        try {
                fetch('/api/users')
                .then((response) => {
                    if(response.status === 200){
                        return response.json();
                    }
                    })
                .then((data) =>{
                    setGetUsers(data)
                })
                
        } catch (error) {
                
        }
}