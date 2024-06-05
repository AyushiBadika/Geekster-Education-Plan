/* eslint-disable react/prop-types */
import { useState } from "react";

export default function AddedPlan({ plan }) {
  const [hours, setHours] = useState(plan.hour);
  const increment = () => {
    setHours(Number(hours) + 1);
  };

  const decrement = () => {
    setHours(Number(hours) - 1);
  };
  return (
    <>
      <div className="addedPlan">
        <div className="subject">{plan.subject}</div>
        <div>
          <div className="hours">{hours} hours</div>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>
    </>
  );
}
