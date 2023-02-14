import React from "react";

const List = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact, i) => (
          <li key={i}>{contact}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
