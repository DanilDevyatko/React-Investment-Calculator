import { Header } from "./copmonents/common/Header/index.jsx";
import { InputPanel } from "./copmonents/features/InputPanel/index.jsx";
import { Results } from "./copmonents/features/Results/index.jsx";
import { useState } from "react";

function App() {
  const [inputValuem, setInputValue] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = inputValuem.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setInputValue(prevInputValuem => {
      return {
        ...prevInputValuem,
        [inputIdentifier]: +newValue,
      };
    })
  }

  return (
    <>
      <Header />
      <InputPanel 
        onChangeInput={handleChange}
        inputValuem={inputValuem}   
      />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero</p>}
      {inputIsValid && <Results input={inputValuem}/>}
    </>
  )
}

export default App
