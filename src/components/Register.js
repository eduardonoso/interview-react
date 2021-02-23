import {register} from "../utils/api";

const Register = () => {

  return <div>
    <h2>Register</h2>

    <ol style={{textAlign: 'left'}}>
      <li>
        Implement a Registration form using the imported api.js register() function
      </li>
      <li>
        Add validation with the following rules. Display each inputs error underneath the input if an error exists
        <ul>
          <li>User: must end in a .com</li>
          <li>Password: require at least 8 chars</li>
        </ul>
      </li>
    </ol>

  </div>
};

export default Register;
