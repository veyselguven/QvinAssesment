const { db } = require("./server/db");

const Team = require("./server/db/team");
const Job = require("./server/db/job");
const Candidate = require("./server/db/candidate");

const teams = [
  {
    id: 1,
    name: "afad",
    title: "afdsgfb",
    picture: "asdfsbdgn",
  },
];
const jobs = [{ id: 2, title: "adfdsgf", url: "afdsgbdg" }];
const candidates = [{ name: "AFDSgdf", profile: "adsfsgd", email: "asdfsgd" }];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      teams.map((team) => {
        return Team.create(team);
      })
    );
    await Promise.all(
      jobs.map((job) => {
        return Job.create(job);
      })
    );
    await Promise.all(
      candidates.map((candidate) => {
        return Candidate.create(candidate);
      })
    );

    db.close();
  } catch (err) {
    console.error(err);
    db.close();
  }
};

seed();
