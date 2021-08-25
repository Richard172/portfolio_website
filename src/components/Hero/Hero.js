import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Richard Jiang's Portfolio
      </SectionTitle>
      <SectionText>
        I am a third year University student who loves web dev and game dev.
      </SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/Richard172")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
