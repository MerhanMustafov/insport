import React from "react";
import styled from "styled-components";
import { useAppSelector } from "@/global/redux/reduxHooks";

const StyledSingleFixture = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  height: 70vh;
  border: 1px solid black;
  z-index: 100;
`;

const SingleFixtureModal: React.FC = () => {
  const { fixtureId } = useAppSelector((state) => state.trackCurrentData.singleFixture);

  const onModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Modal clicked: ID: ", fixtureId);
  };

  return (
    <StyledSingleFixture onClick={(e) => onModalClick(e)}>
      <h1>SingleFixtureModal</h1>
    </StyledSingleFixture>
  );
};

export default SingleFixtureModal;
