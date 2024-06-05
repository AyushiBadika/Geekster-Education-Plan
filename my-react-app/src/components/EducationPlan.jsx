import { useEffect, useState } from "react";
import AddedPlan from "./AddedPlan";

function EducationPlan() {
  const [plans, setPlans] = useState([]);
  const [subject, setSubject] = useState("");
  const [hour, setHour] = useState("");
  // const [jsonString, setJsonString] = useState("");

  const handleClick = () => {
    const obj = {
      subject: subject,
      hour: hour,
    };
    setPlans([...plans, obj]);
    setSubject("");
    setHour("");
  };
  useEffect(() => {
    if (plans.length > 0) localStorage.setItem("plans", JSON.stringify(plans));
  }, [plans]);

  useEffect(() => {
    const jsonObject = JSON.parse(localStorage.getItem("plans")) || [];
    setPlans([...jsonObject]);
  }, []);
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleHour = (e) => {
    setHour(e.target.value);
  };
  return (
    <>
      <h1>Geekster Education Planner</h1>
      <div className="inputFields">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          className="subject"
          onChange={handleSubject}
        />
        <input
          type="number"
          placeholder="Hour"
          className="hour"
          value={hour}
          onChange={handleHour}
        />
        <button className="add" onClick={handleClick}>
          Add
        </button>
      </div>
      {plans.map((plan, index) => {
        return <AddedPlan plan={plan} key={index} index={index} />;
      })}
    </>
  );
}

export default EducationPlan;
