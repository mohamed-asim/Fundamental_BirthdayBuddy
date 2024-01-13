import React from "react";
import Persons from "./Persons";

const List = ({ userData }) => {
  return (
    <section>
      {userData.map((person) => {
        return <Persons key={person.id} {...person}></Persons>;
      })}
    </section>
  );
};

export default List;
