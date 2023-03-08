import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import "./background.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    const response = await axios.get('https://reqres.in/api/users?page=1');
    setUsers(response.data.data);
    setLoading(false);
  }

  return (
    <div className="App">
      <nav>
        <span>LGM VIP WEB DEV</span>
        <button onClick={getUsers}>Get Users</button>
      </nav>
      <div className="user-grid">
        {loading ? <div className="loader"></div> :
          users.map(user => (
            <div key={user.id} className="user-card">
              <img src={user.avatar} alt={user.first_name} />
              <h2>{user.first_name} {user.last_name}</h2>
              <p>{user.email}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
