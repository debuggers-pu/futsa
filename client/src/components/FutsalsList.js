import React from "react";
import FutsalCard from "./FutsalCard";

const FutsalsList = () => {
  return (
    <div>
      <h1>I want to play futsal.</h1>
      <div>
        <FutsalCard />
        <FutsalCard />
        <FutsalCard />
        <FutsalCard />
      </div>
    </div>
  );
};

export default FutsalsList;
