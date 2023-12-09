import React from "react";

class Counter extends React.Component{
  // count = 0;

  // Inc = () => {
  //   this.count += 1;
  //   console.log(this.count);
  // }

  state = {
    count: 0
  }

    Inc = () => {
    this.setState( { count : this.state.count + 1})
  }

render () {
  let Dec = () =>{
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }
  let Reset = () =>{
    this.setState( { count : this.state.count=0})
  }
  return (
    <>
    <h1>Counter App</h1>
    <h1>{this.state.count}</h1>
    <div>
      <button onClick={this.Inc}>+</button>
      <button onClick={Dec}>-</button>
      <button onClick={Reset}>Reset</button>
    </div>
    </>
  )
}


}

export default Counter