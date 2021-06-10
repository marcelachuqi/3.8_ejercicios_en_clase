import React from "react";

const numbers = [1, 4, 6, 8, 45, 89];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderNumber = this.renderNumber.bind(this);
    this.userNumber = this.userNumber.bind(this);
    this.pairNumber = this.pairNumber.bind(this);
    this.state = {
      numbers: numbers,
      userNumber: "",
      pairNumber: "",
    };
  }

  renderNumber = () => {
    return numbers
      .filter((number) => number >= this.state.userNumber)
      .map((number) => {
        return <li>{number}</li>;
      });
  };

  userNumber = (ev) => {
    this.setState({ userNumber: ev.currentTarget.value });
  };

  pairNumber = () => {
    number % 2 = 0;

    pairNumber.map((number) => {
      return <li>{number}</li>;
    });
  };

  render() {
    return (
      <>
        <ul>{this.renderNumber()}</ul>;
        <form>
          <input
            onChange={this.userNumber}
            placeholder="coloca aqui tu numero"
            type="number"
          />
          <label> Clickame y filtra los pares</label>
          <input onClick={this.pairNumber} type="checkbox" />
          <ul> {this.pairNumber()}</ul>
        </form>
      </>
    );
  }
}

export default App;
