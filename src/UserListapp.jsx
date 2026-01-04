import { useEffect, useState } from "react";


const UserListapp = () => {
    const [loading,setLoading] = useState(true);
    const [users,setUsers] = useState([]);
    const [error,setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if(!response.ok){
                    throw new Error("fetching datas failed");
                }
                return response.json();
            })
            .then((data) =>{
                setUsers(data);
                setLoading(false);
            })
            .catch((error) =>{
                setError(error.message);
                setLoading(false);
            });
            
    },[]);
  return (
    <>
    <div className="userlistapp">

        <h1>User List App</h1>

        {/* set error */}

        <div className="loadingError">
            {!loading && error && <p className="Error">{error}</p>}
        </div>

        {/* set loading */}

        <div className="loadingusers">
            {loading ? (<p>Loading...</p>) : (
            <ul className="Users">
                {users.map((user) =>(
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                ))}
            </ul>
        )}
        </div>
        
    </div>    
    </>
  )
}

export default UserListapp
