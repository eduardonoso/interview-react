import React from "react";

const Clock = () => {

  return (
    <div>
      <h2>Clock</h2>

      <ol style={{textAlign: 'left'}}>
        <li>
          The clock is broken and only shows the time the view was loaded. Fix the clock so it shows the current live time.
        </li>
      </ol>

      <h3>{new Date().toLocaleTimeString()}</h3>
    </div>
  );
};

export default Clock;
