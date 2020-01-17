import React from "react";

// function Greet() {
//   return <h1>Hello GaGa</h1>;
// }

const Greet = props => {
  const { name, surname } = props;
  console.log(props);
  return (
    <div>
      <h1>
        Hello {name} {surname}
      </h1>
    </div>
  );
};

export default Greet;
