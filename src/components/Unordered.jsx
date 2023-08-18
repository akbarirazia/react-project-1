import React from "react"

function Unordered(props) {
  const { name, skills } = props
  return (
    <ul>
      <h3>
        <span>{name}</span>
      </h3>

      <br />
      {skills.map((skill) => (
        <li>{skill}</li>
      ))}
    </ul>
  )
}

export default Unordered
