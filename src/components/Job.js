/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Job = (props) => {
  //console.log("props", props);
  const [jobs, setJobs] = useState([]);

  let url = "http://localhost:3001/api/jobs";

  async function fetchData() {
    try {
      const result = await axios.get(url);
      console.log("result jobs", result);
      setJobs(result.data);
    } catch (e) {
      console.log(console.error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div name="jobs">
      <hr />

      <h1>
        <b>Join a mission that matters</b>
      </h1>

      {jobs.map((job) => {
        return (
          <ul key={job.id}>
            <li>{job.title}</li>
            <li>
              <Link to={`job/${job.id}`}>{job.url}</Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Job;
