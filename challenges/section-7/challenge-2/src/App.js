import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(null);
  const [percentage2, setPercentage2] = useState(null);

  let tip = (percentage1 + percentage2) / 2;

  return (
    <div>
      <BillInput bill={bill} setBill={setBill}/>
      <SelectPercentage value={percentage1} setValue={setPercentage1}>
        <>How did you like the service?</>
      </SelectPercentage>
      <SelectPercentage value={percentage2} setValue={setPercentage2}>
        <>How did your friend like the service?</>
      </SelectPercentage>
      <DisplayText bill={bill} setBill={setBill} tip={tip}/>
      <ResetButton setBill={setBill} setPercentage1={setPercentage1} setPercentage2={setPercentage2} /> 
    </div>
  );
}

function BillInput({bill, setBill}) {
  return (
    <div className="form">
      <>
        How much was the bill?{" "}
        <input type="number" className="inputText" value={bill} onChange={(e) => setBill(+e.target.value)}></input>{" "}
      </>
    </div>
  );
}

function SelectPercentage({ children, value, setValue}) {
  return (
    <div className="form">
      {children}{" "}
      <select className="inputText" value={value === null ? 5 : value} onChange={(e) => setValue(+e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function DisplayText({bill, tip}) {
  return (
    <div className="form">
      <h3>{`You pay $${+bill + tip} ($${bill === "" ? 0 : bill} + $${tip} tip)`}</h3>
    </div>
  );
}

function ResetButton({setBill, setPercentage1, setPercentage2}) {
  function onClear() {
    setBill("")
    setPercentage1(null)
    setPercentage2(null)
  }
  return <div>
    <button className="inputButton" onClick={() => onClear()}>Reset</button>
  </div>
}

