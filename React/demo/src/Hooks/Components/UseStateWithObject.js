import { useState } from "react";

const UseStateWithObject = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  console.log(name)
  return (
    <form>
      First Name:{" "}
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      Last Name:{" "}
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>First Name = {name.firstName}</h2>
      <h2>Last Name = {name.lastName}</h2>
    </form>
  );
};

export default UseStateWithObject;
