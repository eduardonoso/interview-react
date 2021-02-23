import {login} from "../utils/api";

const Login = () => {

  return <div>
    <h2>Login</h2>

    <ol style={{textAlign: 'left'}}>
      <li>
        Implement a Login form using the imported api.js login() function to retrieve a users token.
        <ul>
          <li>Note: Valid username and password is 'sunrise' to retrieve a token</li>
        </ul>
      </li>
      <li>Store the returned token using the AppContext Provider for use across the app</li>
      <li>BONUS: Store the token in a cookie and load it on app mount
        <ul>
          <li>Note: Not possible on codesandbox.io or other online code editors</li>
        </ul>
      </li>
    </ol>

  </div>
};

export default Login;
