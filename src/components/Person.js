import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2>{person.name + " " + person.surname + " " + person.skill}</h2>
    </div>
  );
}

export default Person;
