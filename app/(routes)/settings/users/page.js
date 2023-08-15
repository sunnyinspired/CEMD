'use client'

import { useState } from "react"
import Form from "../../components/Form"
import Modal from "../../components/Modal"
import { saveUser } from "@/utils/helpers/saveUser"
import { getUsers } from "@/utils/helpers/getUsers"
import { DeleteUser } from "@/utils/helpers/deleteUser"

const Users = () => {
    const[openModal, setOpenModal] = useState(false)
    const [allUsers, setAllUsers] = useState([])
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        username: '',
        password: ''
    })

    const deleteUser = (e) =>{
        if(confirm("Do You Want to Delete this User?")){
            const user_id = e.target.value;
            DeleteUser(user_id, setAllUsers);
            return true;
        }
        else{
            return false
        }
        
    }

    const addUser = async (e) =>{
        e.preventDefault();
        saveUser(user, setUser, setAllUsers);
        
    }

    getUsers(setAllUsers);
  return (
    <section className='flex justify-center'>
        <div className='lg:w-3/4 my-12 h-auto bg-white p-5  shadow-md overflow-hidden'>
            <div className='w-full flex justify-end border-b border-red-500 pb-3'>
                <button
                    onClick={() => setOpenModal(prev => !prev)}
                    type='button'
                    className='bg-red-500 p-2 lg:p-4 rounded-lg text-white text-sm font-semibold shadow-sm'
                >
                    Create User <i className='fa-solid fa-user-plus'></i>
                </button>
            </div>
            <Modal 
                title="Add New User"
                openModal={openModal}
                setOpenModal={setOpenModal}
            >
                <Form 
                    type="Create"
                    user={user} 
                    setUser={setUser}
                    handleSubmit={addUser}
                />
            </Modal>
            <div className="mt-5 flex justify-center">
                <table className="border-collapse w-full">
                    <caption className="my-4 font-bold text-red-500">EXISTING USERS</caption>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        allUsers.map((user, index) =>(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td className="">
                                    <i className="fa-solid fa-pen-to-square text-blue-600 cursor-pointer" 
                                        title="Edit" onClick={() =>{}}></i>
                                    <button className="fa-solid fa-trash text-red-500 float-right cursor-pointer"
                                        title={"Delete User"} value={user._id} onClick={deleteUser}></button>
                                </td>
                            </tr>
                        ))
                       }
                    </tbody>
                </table>
            </div>
            
        </div>
    </section>
  )
}

export default Users