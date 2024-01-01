const Input = ({value, handler}) =>
    <input value={value} onChange={(event) => handler(event.target.value)} />

export default Input
