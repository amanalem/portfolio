import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Card } from "react-bootstrap";

const AboutPage = () => {
  return (
    <div>
      <Card className="mb-3">
        <Card.Img src="" />
        <Card.Title>About Me</Card.Title>
        <Card.Text>
          I am a fullstack software developer with over 8 years of experience in
          customer service and a life-long obsession with math and music. When I
          was first introduced to coding, it felt as if I was composing with
          numbers--a combination of my two loves. I use an artist's eye for
          detail and a problem-solver's brain to come up with simple solutions
          to complex problems.
        </Card.Text>
      </Card>
    </div>
  );
};

export default AboutPage;
