import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Dragana", "GaGa", "Dijana", "Uros", "GaGa"];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index}
      {name}
    </h2>
  ));
  const persons = [
    {
      id: 1,
      name: "Dragana",
      surname: "Savanovic",
      age: 26,
      skill: "React, Angular"
    },
    {
      id: 2,
      name: "Dijana",
      surname: "Kovacevic",
      age: 25,
      skill: "Design"
    },
    {
      id: 3,
      name: "Uros",
      surname: "Kovacevic",
      age: 20,
      skill: "UX design"
    }
  ];

  const personList = persons.map(person => (
    <Person key={person.id} person={person} />
  ));
  return (
    <div>
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2>
      <h2>{names[3]}</h2> */}

      {nameList}
    </div>
  );
}

export default NameList;
