import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [loading,setLoading] =useState(true);
  const [users,setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(()=>{
    fetch("http://localhost:5000/api/employees")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data)=>{
        setUsers(data);   //storeing the value
        setLoading(false);  // stop the loading
      })
      .catch((error)=>{
        setError(error.message)
        setLoading(false);
      });
  },[]);

  return (
    <>
     <div>
       <h1>UserListApp</h1>

       {!loading && error && <p style={{ color: "red" }}>{error}</p>}
       

       {loading ? (<p>Loading..</p>) : (
        <ul>
        {users.map((user)=>(
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
       </ul>
       )}
     </div>
    </>
  )
}

export default App
