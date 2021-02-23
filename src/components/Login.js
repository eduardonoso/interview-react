import {login} from "../utils/api";

const Login = () => {

  return <div>
    <h2>Login</h2>

    <ol style={{textAlign: 'left'}}>
      <li>
        Implement a Login form using the imported api.js login() function to retrieve a users token.
        <ul><li>Note: Valid username and password is 'sunrise' to retrieve a token</li></ul>
      </li>
      <li>Store the returned token using the AppContext Provider for use across the app</li>
      <li>Store the token in a cookie and load it on app mount (not possible on codesandbox.io)</li>
    </ol>

  </div>
};

export default Login;
