/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Team = (props) => {
  const [teams, setTeams] = useState([]);

  let url = "http://localhost:3001/api/team_members";
  async function fetchData() {
    try {
      const result = await axios.get(url);
      console.log("result teams", result);
      setTeams(result.data);
    } catch (e) {
      console.log(console.error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div name="team">
      <hr />
      <p>Team Members</p>

      {teams.map((team) => {
        return (
          <ul key={team.id}>
            <img src={team.picture} />
            <li>{team.name}</li>
            <li>{team.title}</li>
          </ul>
        );
      })}

      <h3>What the team says! </h3>
      <p>
        At Qvin, the overall north star guide in my daily work, is the ability
        for us to potentially save lives by empowering women with information
        about their own health and discover harmful diseases before they spread.
        <b> Christian, Admin</b>
      </p>
      <br />
      <p>
        I like working at Qvin because we have a meaningful mission, a novel
        technology, flexible work hours, and a fast development team. Our
        founders are open to ideas and want to move forward, and we're helping
        women take care of their health. <b>Zufar, Developer</b>
      </p>
    </div>
  );
};

export default Team;
