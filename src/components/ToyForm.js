import React, { useState } from "react";

function ToyForm({ updateState }) {
  const [toy, setToy] = useState({
    name: "",
    image: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setToy({ ...toy, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/toys", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((toy) => updateState(toy));

    setToy({
      name: "",
      image: "",
    });
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3> Create a toy! </h3>
        <input
          type="text"
          name="name"
          value={toy.name}
          onChange={handleChange}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          value={toy.image}
          onChange={handleChange}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
