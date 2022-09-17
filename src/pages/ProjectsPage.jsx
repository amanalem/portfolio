import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const Projects = styled.div`
  img {
    height: 50vh;
    margin-bottom: 10vh;
  }

  border: 1px solid black;
  margin: 0, 5vw, 0, 5vw;
`;

const ProjectsPage = () => {
  return (
    <Projects>
      <img src={require("../images/ABCList.png")} />
      <p>
        ABC-List is a note-taking app that allows you to structure notes into 3
        categories. A (24hrs), B (72hrs), and C (2weeks). Once an item has been
        in the C category 2 weeks, it automatically becomes a B item. 72hrs as a
        B item and it automatically becomes an A item. This is a MERN stack.
      </p>
      <a href="abc-list.co" target="_blank" alt="abc-list">
        ABC-List
      </a>{" "}
      <br /> <br />
      <hr />
      <br /> <br />
      <img src={require("../images/WWF.png")} />
      <p>
        Wordle With Friends employs all the same rules as wordle with one
        amazing twist... In my version, you can set your own words and challenge
        your friends to solve them. By using a dictionary api, I am able to make
        sure that all words are valid (no made up words!), but the words can be
        as spicy as you'd like!
      </p>
      <a href="wordlewithfriends.net" target="_blank" alt="Wordle With Friends">
        Wordle With Friends
      </a>
      <br /> <br /> <hr />
    </Projects>
  );
};

export default ProjectsPage;
