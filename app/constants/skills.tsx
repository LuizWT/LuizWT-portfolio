import { FaPython as Python, FaGitAlt as Git, FaGithub as Github, FaWindows as Windows } from "react-icons/fa";
import { DiRuby as Ruby } from "react-icons/di";
import { SiRubyonrails as RubyOnRails, SiArchlinux as Linux, SiRubymine as Rubymine } from "react-icons/si";
import { GrMysql as SQL } from "react-icons/gr";
import { VscVscode as VsCode } from "react-icons/vsc";

export interface SkillI {
  name: string;
  icon: React.ElementType;
}

interface SkillsI {
  title: string;
  skills: SkillI[];
}

export const skills: SkillsI[] = [
  {
    title: "Programação",
    skills: [
      { name: "Python", icon: Python },
      { name: "Ruby", icon: Ruby },
      { name: "Ruby on Rails", icon: RubyOnRails },
      { name: "SQL", icon: SQL },
    ],
  },
  {
    title: "Ferramentas",
    skills: [
      { name: "VS Code", icon: VsCode },
      { name: "Rubymine", icon: Rubymine },
    ],
  },
  {
    title: "Versionamento e Controle",
    skills: [
      { name: "Git", icon: Git },
      { name: "Github", icon: Github },
    ],
  },
  {
    title: "Sistemas",
    skills: [
      { name: "Arch Linux", icon: Linux },
      { name: "Windows", icon: Windows}
    ],
  },
];
