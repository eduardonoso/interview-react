import {useState, useEffect, useContext} from 'react';
import {fetchTasks} from "../utils/api";
import AppContext from "./AppContext";

const TaskList = () => {

  const appContext = useContext(AppContext);

  const [tasks, setTasks] = useState();

  useEffect(() => {
    fetchTasks(appContext.userToken).then(res => {
      setTasks(res.tasks);
    });
  }, []);

  return <div>
    <h2>Tasks</h2>

    <ol style={{textAlign: 'left'}}>
      <li>
        Retrieve the Users tasks using the api.js fetchTasks() function which accepts the user's token as the first
        parameter.
        <ul>
          <li>If you completed storing the User token in context/state grab it from there, otherwise you may use
            userToken from token.js
          </li>
        </ul>
      </li>
      <li>List the users task titles and descriptions, sorted by priority ascending</li>
    </ol>

    {tasks && tasks.map(task => {
      return <div style={{marginBottom: 16}}>
        <div>{task.title}</div>
        <div>{task.description}</div>
        <div>{task.priority}</div>
      </div>
    })}
  </div>
};

export default TaskList;
