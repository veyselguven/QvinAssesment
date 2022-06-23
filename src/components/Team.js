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
      console.log("result", result);
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
    </div>
  );
};

export default Team;
