import React from "react"
import Unordered from "./Unordered"

const data = [
  {
    name: "Development 1",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwindcss", "Java"],
    id: 0,
  },
  {
    name: "Development 2",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwindcss", "Java"],
    id: 1,
  },
  {
    name: "Development 3",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwindcss", "Java"],
    id: 2,
  },
]

function Skills() {
  return (
    <section>
      <h1>
        These are my <span>Skill </span>sets
      </h1>
      <br />
      <br />
      <div className="skills">
        {data.map((item) => (
          <Unordered name={item.name} skills={item.skills} key={item.id} />
        ))}
      </div>
    </section>
  )
}

export default Skills
