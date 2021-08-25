import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have been working with game development and web front end development. I
      love learning new languages and algorithms.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListTitle>Front-end</ListTitle>
        <ListParagraph>
          Experience with HTML/CSS/JavaScript and React
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListTitle>Back-end</ListTitle>
        <ListParagraph>Experience with Firebase database</ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
