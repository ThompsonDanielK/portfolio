import { Key } from "react";
import { AboutMe } from "./aboutMe";
import { Contact } from "./contact";
import { Projects } from "./projects";
import { Resume } from "./resume";

export const content = [
  <AboutMe key="about" />,
  <Projects key="projects" />,
  <Contact key="contact" />,
  <Resume key="resume" />,
];

interface ContentProps {
  activeContent: Key | null;
  showContent: boolean;
}

export const Content = ({ activeContent, showContent }: ContentProps) => {
  if (!showContent) {
    return <></>;
  }

  return (
    <div id="content">
      {content.map((item) => {
        if (item.key === activeContent) {
          return item;
        }
      })}
    </div>
  );
};
