import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage value={percentage1} setValue={setPercentage1}>
        <>How did you like the service?</>
      </SelectPercentage>
      <SelectPercentage value={percentage2} setValue={setPercentage2}>
        <>How did your friend like the service?</>
      </SelectPercentage>
      <Output bill={bill} percentage1={percentage1} percentage2={percentage2} />
      <Reset
        onReset={handleReset}
      />
    </div>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <div className="form">
      <label>How much was the bill? </label>
      <input
        type="number"
        className="inputText"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      ></input>{" "}
    </div>
  );
}

function SelectPercentage({ children, value, setValue }) {
  return (
    <div className="form">
      {children}{" "}
      <select
        className="inputText"
        value={value}
        onChange={(e) => setValue(+e.target.value)}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, percentage1, percentage2 }) {
  let tip = (percentage1 + percentage2) / 2;
  return (
    <div className="form">
      <h3>{`You pay $${+bill + tip} ($${
        bill === "" ? 0 : bill
      } + $${tip} tip)`}</h3>
    </div>
  );
}

function Reset({ setBill, setPercentage1, setPercentage2, onReset }) {
  return (
    <div>
      <button className="inputButton" onClick={() => onReset()}>
        Reset
      </button>
    </div>
  );
}
