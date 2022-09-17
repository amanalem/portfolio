import React from "react";
import styled from "styled-components";

const ImgDiv = styled.div`
  img {
    width: 80%;
    margin: 0;
  }
`;

const ResumePage = () => {
  return (
    <ImgDiv>
      <img src={require("../images/AAResume.jpg")} alt="resume" />
    </ImgDiv>
  );
};

export default ResumePage;
