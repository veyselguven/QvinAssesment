/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Team = (props) => {
  const [teams, setTeams] = useState([]);

  let url = "./api/team";
  async function fetchData() {
    try {
      const result = await axios.get(url);
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
          <ul>
            <li>{team.name}</li>
            <li>{team.title}</li>
            <li>{team.picture}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Team;
