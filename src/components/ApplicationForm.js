/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
//import { Link } from "react-scroll/modules";

const ApplicationForm = (props) => {
  let { id } = useParams();

  const [formContent, setFormContent] = useState({
    fullName: "",
    email: "",
    profile: "",
  });

  // useEffect(() => {
  //   console.log("props", props);
  // }, []);
  const _handleOnChange = (event) => {
    let id = event.target.id;
    let value = event.target.value;
    setFormContent((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  };
  const _handleSubmit = async () => {
    try {
      if (formContent.fullName.length < 2) {
        alert("Invalid name");
        return false;
      }

      if (!formContent.email.includes("@")) {
        alert("Invalid email");
        return false;
      }

      if (!formContent.profile.includes("http")) {
        alert("Invalid profile url");
        return false;
      }

      formContent["jobId"] = id; // comes from useParams

      let registerResult = await axios.post(
        "http://localhost:3001/api/applications",
        formContent
      );

      console.log(registerResult);

      if ("message" in registerResult && registerResult["message"]) {
        alert("Error: " + registerResult["message"]);
        return false;
      }

      if (
        !("data" in registerResult) ||
        !registerResult["data"] ||
        !("id" in registerResult["data"])
      ) {
        alert("Error on application");
        return false;
      }

      setFormContent((prevState) => {
        return {
          ...prevState,
          fullName: "",
          profile: "",
          email: "",
        };
      });
      alert("Registered successfully");
    } catch (e) {
      let message = "response" in e ? e.response?.data?.message : e.message;
      alert("Error: " + message);
    }
  };

  return (
    <div name="applications">
      <h1>
        <b>Qvin Jobs</b>
      </h1>
      <br />
      Qvin is becoming a global leader in Women's Health. Our health technology
      platform helps women manage their health better, through a non-invasive
      blood collection device named the “Q-Pad”. You can read more about us on
      our careers page and on{" "}
      <a href="https://qvin.com/en/" target="_blank">
        Qvin.com.
      </a>
      Qvin is seeking an experienced web developer for our high-growth company
      in the Women's Health space. As an early engineer at our company, you will
      have the ability to make a significant impact and grow across a wide range
      of opportunities. About Qvin: Over 70% of the decisions our doctors make
      are influenced by blood test results. However, the blood our bodies
      naturally deliver every month has never been explored as a testing source.
      Qvin is the first healthcare service to use period blood as a non-invasive
      blood test, giving women an easy, insightful way to monitor existing
      health issues, proactively screen for others, and go into doctor visits
      more informed and confident of their own health. We’ve built a significant
      infrastructure for medical device manufacturing and a clinical laboratory.
      We’re powering everything by software, keeping track of everything from
      raw materials and customer orders, to sample logistics and lab results. We
      have platforms across internal systems such as consumer-facing apps on
      Android and iOS, as well as a number of web dashboards. The Role: We are
      looking for a Software Engineer who can help us build out our web and
      e-commerce offering as we prepare to go to market. You will join our small
      but growing team and collaborate with the current developers to build a
      world-class website. You will work closely with other departments and
      learn about healthcare, at-home-testing, medical devices and laboratory
      medicine. You will participate in design discussions and be responsible
      for evaluating solutions and providing feedback to other engineers.
      <form>
        <input
          type={"text"}
          name={"fullName"}
          id={"fullName"}
          value={formContent.fullName}
          onChange={_handleOnChange}
          placeholder={"Full Name"}
        />
        <br />
        <br />
        <input
          type={"text"}
          id={"email"}
          value={formContent.email}
          onChange={_handleOnChange}
          placeholder={"Email"}
        />
        <br />
        <br />
        <input
          type={"text"}
          id={"profile"}
          value={formContent.profile}
          onChange={_handleOnChange}
          placeholder={"Linkedin Profile"}
        />
        <br />
        <br />
        <input type={"button"} value={"Submit"} onClick={_handleSubmit} />
      </form>
    </div>
  );
};

export default ApplicationForm;
