import {login} from "../utils/api";

const Login = () => {

  return <div>
    <h2>Login</h2>

    <ol style={{textAlign: 'left'}}>
      <li>
        Implement a Login form using the api.js login() function to retrieve a users token. (Note: Use 'sunrise' for user and password to retrieve a token)
      </li>
      <li>Store the returned token using AppContext for use across the app</li>
      <li>Store the token in a cookie and load it on app mount</li>
    </ol>

  </div>
};

export default Login;
