import React from "react";

class Numbers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input placeholder="coloca aqui tu numero" type="number" />
      </form>
    );
  }
}

export default Numbers;
