/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function AddedPlan({ plan, index }) {
  const [hours, setHours] = useState(plan.hour);

  function localStorageUpdate() {
    const obj = JSON.parse(localStorage.getItem("plans"));
    obj[index].hour = hours;
    localStorage.setItem("plans", JSON.stringify(obj));
  }
  const increment = () => {
    setHours(Number(hours) + 1);
  };

  const decrement = () => {
    setHours(Number(hours) - 1);
  };
  localStorageUpdate();

  useEffect(() => {}, [hours]);
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
