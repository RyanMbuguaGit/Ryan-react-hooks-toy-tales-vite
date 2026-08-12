import React from "react";

function ToyCard({ toy, onUpdateToy }) {
  const { id, name, image, likes } = toy;

  function handleLikeClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: likes + 1 }),
    })
      .then((response) => response.json())
      .then((updatedToy) => onUpdateToy(updatedToy));
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like {"<3"}
      </button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;