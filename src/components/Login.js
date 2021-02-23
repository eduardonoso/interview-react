import { useState, useEffect, useContext } from 'react';
import {login} from "../utils/api";
import AppContext from "./AppContext";

const Login = () => {

  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const appContext = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user, password)
      .then(res => {
        console.log(res);
        appContext.setUserToken(res.token);
      })
      .catch(err => {

    });
  };

  return <div>
    <h2>Login</h2>

    <ol style={{textAlign: 'left'}}>
      <li>
        Implement a Login form using the api.js login function to retrieve a users token. (Note: Use 'sunrise' for user and password to retrieve a token)
      </li>
      <li>Store the returned token in a global context/store for use later</li>
    </ol>

    <form>
      <input type="text" name="user" onChange={(event) => setUser(event.target.value)}/>
      <br/>
      <input type="password" name="password" onChange={(event) => setPassword(event.target.value)}/>
      <br/>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>

  </div>
};

export default Login;
