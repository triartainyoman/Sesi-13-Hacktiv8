import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      Count: {count}
      <br />
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default Counter;

// export default class Counter extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       counter: 0,
//     };
//   }

//   increment = () => {
//     this.setState({
//       counter: this.state.counter + 1,
//     });
//   };

//   decrement = () => {
//     this.setState({
//       counter: this.state.counter - 1,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h3>{this.state.counter}</h3>
//         <br />
//         <button onClick={this.decrement}>-</button>
//         <button onClick={this.increment}>+</button>
//       </div>
//     );
//   }
// }
