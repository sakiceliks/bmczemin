import React, { useState } from 'react';
import { account,ID } from '../../lib/appwrite';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  async function login(email, password) {
    await account.createEmailSession(email, password);
    setLoggedInUser(await account.get());
  }

  const handleLogout = async () => {
    await account.deleteSession('current');
    setLoggedInUser(null);
  };

  return (
    <div>
      {loggedInUser ? (
        <>
     <div className='container w-75 d-flex justify-content-around p-2 mt-2  border border-2 rounded border-dark'>
     <p>Logged in as {loggedInUser.name}</p>
          <button type="button bg-blue" onClick={handleLogout}>
            Logout
          </button>
     </div>
        </>
      ) : (
        <>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            type="button"
            onClick={() => login(email, password)}
          >
            Login
          </button>
          <button
          type="button"
          onClick={async () => {
            await account.create(ID.unique(), email, password, name);
            login(email, password);
          }}
        >
          Register
        </button>
        </>
      )}
    </div>
  );
};

export default Login;
