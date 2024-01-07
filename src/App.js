import { useState } from "react";

export default function MyApp() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton count={count} setCount={setCount} />
      <MyButton count={count} setCount={setCount} />
    </div>
  );
}

function MyButton(props) {
  function handleClick() {
    props.setCount(props.count + 1);
  }

  return <button onClick={handleClick}>Clicked {props.count} times</button>;
}
