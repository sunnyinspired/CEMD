import { UserRoles } from "@/utils/data/UserRoles"

const Form = ( {type, user, setUser, handleSubmit} ) => {
  return (
    <div className="p-5">
        <form onSubmit={handleSubmit}>
            <div className="lg:flex lg:mb-5">
                <div className="mr-4 w-full lg:w-1/2">
                    <p className="py-2 font-semibold text-sm">First Name</p>
                    <input type="text" 
                        className="border border-blue-200 rounded-md h-10 w-full px-3"
                        value={user.firstName}
                        onChange={(e) => setUser({...user, firstName: e.target.value})}
                    />
                </div>
                <div className="mr-4 w-full lg:w-1/2">
                    <p className="py-2 font-semibold text-sm">Last Name</p>
                    <input type="text" 
                        className="border border-blue-200 rounded-md h-10 w-full px-3"
                        value={user.lastName}
                        onChange={(e) => setUser({...user, lastName: e.target.value})}
                    />
                </div>
                
            </div>
            <div className="lg:flex lg:mb-5">
                <div className="mr-4 w-full lg:w-1/2">
                    <p className="py-2 font-semibold text-sm">Email</p>
                    <input type="email" 
                        className="border border-blue-200 rounded-md h-10 w-full px-3"
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                    />
                </div>
                <div className="mr-4 w-full lg:w-1/2">
                    <p className="py-2 font-semibold text-sm">Role</p>
                    <select
                        required
                        className="border border-blue-200 rounded-md h-10 w-full px-3"
                        value={user.role}
                        onChange={(e) => setUser({...user, role: e.target.value})}
                    >
                        <option></option>
                       {
                        UserRoles?.map((role) => (
                            <option key={role} value={role}>{role}</option>
                        ))
                       }
                    </select>
                </div>
                
            </div>
            <div className="lg:flex lg:mb-5">
                <div className="mr-4 w-full lg:w-1/2">
                    <p className="py-2 font-semibold text-sm">Username</p>
                    <input type="text" 
                        className="border border-blue-200 rounded-md h-10 w-full px-3"
                        value={user.username}
                        required
                        onChange={(e) => setUser({...user, username: e.target.value})}
                    />
                </div>
                <div className="mr-4 w-full lg:w-1/2">
                    <p className="py-2 font-semibold text-sm">Password</p>
                    <input type="password" 
                        className="border border-blue-200 rounded-md h-10 w-full px-3"
                        value={user.password}
                        required
                        onChange={(e) => setUser({...user, password: e.target.value})}
                    />
                </div>
                
            </div>
            <div className="lg:flex mt-8 lg:justify-center lg:mt-12">
                    <button
                        type="submit" 
                        className="w-full lg:w-1/4 rounded-md h-10 px-3 bg-red-500 
                        text-white font-semibold hover:opacity-90"
                    >
                        {type} User
                    </button>                
            </div>
        </form>
    </div>
  )
}

export default Form