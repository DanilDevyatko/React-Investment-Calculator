import { Input } from "../../common/Input/index.jsx";

export function InputPanel({onChangeInput, inputValuem}) {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          label="Initial investment" 
          type='number' 
          name="initialInvestment"
          value={inputValuem.initialInvestment}
          onChange={(event) => onChangeInput('initialInvestment', event.target.value)}/>
        <Input 
          label="Annual Investment" 
          type='number' 
          name="annualInvestment"
          value={inputValuem.annualInvestment}
          onChange={(event) => onChangeInput('annualInvestment', event.target.value)}
          />
      </div>
      <div className="input-group">
        <Input 
          label="Expected Return" 
          type='number' 
          name="expectedReturn"
          value={inputValuem.expectedReturn}
          onChange={(event) => onChangeInput('expectedReturn', event.target.value)}
          />
        <Input 
          label="Duration" 
          type='number' 
          name="duration"
          value={inputValuem.duration}
          onChange={(event) => onChangeInput('duration', event.target.value)}
          />
      </div>
    </div>
  )
}