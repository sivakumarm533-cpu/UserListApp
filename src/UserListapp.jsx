import { useEffect, useState } from "react";


const UserListapp = () => {
    const [loading,setLoading] = useState(true);
    const [users,setUsers] = useState([]);
    const [error,setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if(!response){
                    throw new Error("fetching datas failed")
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
            })
            
    })
  return (
    <>
    <div>
        <h1>User List App</h1>

        {!loading && error && <p style={{color: 'red'}}>{error}</p>}

        {loading ? (<p>Loading...</p>) : (
            <ul>
                {users.map((user) =>{
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                })}
            </ul>
        )}
    </div>    
    </>
  )
}

export default UserListapp
