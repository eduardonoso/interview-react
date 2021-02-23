import { useState, useEffect } from 'react';
import {register} from "../utils/api";

const Register = () => {

  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(user, password).then(res => console.log(res));
  };

  return <div>
    <h2>Register</h2>

    <ol style={{textAlign: 'left'}}>
      <li>
        Implement a Registration form using the api.js register function
      </li>
      <li>
        Add validation with the following rules. Display each inputs error underneath the input if an error exists
        <ul>
          <li>User: must end in a .com</li>
          <li>Password: require at least 8 chars</li>
        </ul>
      </li>
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

export default Register;
