import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  const apiUrl = "http://localhost:3001";

  useEffect(() => {
    fetch(`${apiUrl}/toys`)
      .then((res) => res.json())
      .then((toys) => setToys(toys));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function updateState(toy) {
    setToys([...toys, toy]);
  }

  function onHandleDelete(deletedToy) {
    setToys((prevToys) => prevToys.filter((toy) => toy.id !== deletedToy));
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm updateState={updateState} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onHandleDelete={onHandleDelete} />
    </>
  );
}

export default App;
