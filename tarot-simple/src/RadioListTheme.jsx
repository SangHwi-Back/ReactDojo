export default function RadioListTheme({ arr, setter }) {
  return (
    <div>
      {arr.map((item, index) => (
        <div key={index}>
          <input
            type="radio"
            id={item.value}
            name={item.name}
            value={item.value}
            onChange={(e) => setter(e.target.value)}
          />
          <label htmlFor={item.labelStr} class="pl-2">{item.labelStr}</label>
        </div>
      ))}
    </div>
  );
}