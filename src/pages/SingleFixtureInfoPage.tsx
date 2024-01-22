import React from "react";
import { useParams } from "react-router-dom";

const SingleFixtureInfoPage: React.FC = () => {
  const params = useParams();

  // TODO: use params to fetch fixture info
  console.log("params", params);

  return (
    <div>
      <h1>SingleFixtureInfoPage</h1>
    </div>
  );
};

export default SingleFixtureInfoPage;
