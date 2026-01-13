import "./App.css";
import { useState } from "react";
import Search from "./component/Search.jsx";
import List from "./component/List.jsx";
import { useEffect } from "react";
function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  //states
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchUsersData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAllUsers(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // API call
  useEffect(() => {
    fetchUsersData(API_URL);
  }, []);

  const hanlerSearchQuery = (e) => {
    const query = (e?.target?.value || "").trim().toLowerCase();
    if (!query) {
      setUsers(allUsers);
      return;
    }
    // search by name, email, or phone
    let userQuery = allUsers.filter(
      (user) =>
        user?.name?.toLowerCase().includes(query) ||
        user?.email?.toLowerCase().includes(query) ||
        user?.phone?.toLowerCase().includes(query)
    );

    if (userQuery.length === 0) {
      setUsers([]);
    } else {
      setUsers(userQuery);
    }
  };

  // console.log("users",users);
  // console.log("all user",users);

  return (
    <div style={{display:"flex", justifyContent:"center",flexDirection:"column",gap:"10px"}}>
      <Search onSearch={hanlerSearchQuery} />
      <List users={users} />
    </div>
  );
}

export default App;
