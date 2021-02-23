import {useState} from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  return (
    <div>
      <h2>Clock</h2>

      <ol style={{textAlign: 'left'}}>
        <li>
          The clock is broken and only shows the time the view was loaded. Update the clock so it shows the current live time
        </li>
      </ol>

      <h3>{date}</h3>
    </div>
  );
};

export default Clock;
