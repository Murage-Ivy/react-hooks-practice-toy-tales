import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onHandleDelete }) {
  const toysList = toys.map((toy) => (
    <ToyCard
      key={toy.id}
      toyName={toy.name}
      toyImage={toy.image}
      toyLikes={toy.likes}
      toyId={toy.id}
      onHandleDelete={onHandleDelete}
    />
  ));
  return <div id="toy-collection"> {toysList} </div>;
}

export default ToyContainer;
