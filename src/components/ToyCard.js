import React from "react";

function ToyCard({ toyName, toyImage, toyLikes, toyId, onHandleDelete }) {
  function handleDelete() {
    fetch(`http://localhost:3001/toys/${toyId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => onHandleDelete(toyId));
  }
  return (
    <div className="card">
      <h2>{toyName}</h2>
      <img src={toyImage} alt={toyName} className="toy-avatar" />
      <p>{toyLikes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
