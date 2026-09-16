import type { IconType } from "react-icons";
import { VscVscode } from "react-icons/vsc";
import {
  SiCplusplus,
  SiCss3,
  SiFlask,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiSqlite,
} from "react-icons/si";

const marks: Record<string, IconType> = {
  "C++": SiCplusplus,
  JavaScript: SiJavascript,
  Python: SiPython,
  SQL: SiSqlite,
  HTML: SiHtml5,
  CSS: SiCss3,
  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  Flask: SiFlask,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": VscVscode,
  Postman: SiPostman,
};

export function TechIcon({ name }: { name: string }) {
  const Icon = marks[name];
  return Icon ? <Icon aria-hidden="true" /> : null;
}

export function TechMark({ name }: { name: keyof typeof marks }) {
  return <span className="tech-mark"><b><TechIcon name={name} /></b><i>{name}</i></span>;
}
