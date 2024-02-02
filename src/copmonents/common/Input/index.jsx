export function Input({label, type, name, value, onChange}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input onChange={onChange} type={type} id={name} value={value} required/>
    </div>
  )
}