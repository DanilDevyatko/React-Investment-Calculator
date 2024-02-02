import logo from "../../../assets/investment-calculator-logo.png";

export function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Investment Calculator" />
      <h1>Investment Calculator</h1>
    </header>
  )
}