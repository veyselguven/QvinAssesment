const { db } = require("./server/db");

const Team = require("./server/db/team");
const Job = require("./server/db/job");
const Application = require("./server/db/application");

const teams = [
  {
    id: 1,
    name: "Sara Naseri",
    title: "Founder & Ceo",
    picture:
      "https://careers.qvin.com/uploads/1/2/3/5/123547525/published/sara.png?1616532581",
  },
  {
    id: 2,
    name: "Søren Therkelsen",
    title: " Founder & COO",
    picture:
      "https://careers.qvin.com/uploads/1/2/3/5/123547525/published/soren.png?1616545852",
  },
  {
    id: 3,
    name: "Brian Weinberg",
    title: "VP of R&D",
    picture:
      "https://careers.qvin.com/uploads/1/2/3/5/123547525/published/christian.png?1616545865",
  },
  {
    id: 4,
    name: "Christin Vinther",
    title: "Admin",
    picture:
      "https://careers.qvin.com/uploads/1/2/3/5/123547525/published/sara.png?1616532581",
  },
  {
    id: 5,
    name: "Matt Hardy",
    title: "Kit production",
    picture:
      "https://careers.qvin.com/uploads/1/2/3/5/123547525/editor/matt.png?1616533504",
  },
  {
    id: 6,
    name: "Zufar Muhamadeev",
    title: "Backend",
    picture:
      "https://careers.qvin.com/uploads/1/2/3/5/123547525/published/zufar.png?1616545878",
  },
  {
    id: 7,
    name: "Tudor Prodan",
    title: "Backend",
    picture:
      "https://careers.qvin.com/uploads/1/2/3/5/123547525/published/tudor.png?1616545842",
  },
  {
    id: 8,
    name: "Manmeet Chadha",
    title: "Sofware Quality",
    picture:
      "https://careers.qvin.com/uploads/1/2/3/5/123547525/published/manmeet.png?1616545871",
  },
  {
    id: 9,
    name: "Mladen Savic",
    title: "App UX",
    picture:
      "https://careers.qvin.com/uploads/1/2/3/5/123547525/published/mladen.png?1616545818",
  },
  {
    id: 10,
    name: "Joshua Ehrlich",
    title: "Software Lead",
    picture:
      "https://careers.qvin.com/uploads/1/2/3/5/123547525/published/joshua.png?1634132795",
  },
  {
    id: 11,
    name: "Dan Sivilich",
    title: "Med Device, Consultant",
    picture:
      "https://careers.qvin.com/uploads/1/2/3/5/123547525/editor/dan.png?1616545890",
  },
  {
    id: 12,
    name: "Aaron Joseph",
    title: "QMS, Consultant",
    picture:
      "https://careers.qvin.com/uploads/1/2/3/5/123547525/editor/aaron.png?1616545893",
  },
  {
    id: 13,
    name: "Shahrear Bin Amin",
    title: " Software Developer in Test",
    picture:
      "https://careers.qvin.com/uploads/1/2/3/5/123547525/published/shahrear.png?1647973065 ",
  },
  {
    id: 14,
    name: "​Garrie Poon",
    title: "Phlebotomist",
    picture:
      "https://careers.qvin.com/uploads/1/2/3/5/123547525/published/garrie.png?1647996107",
  },
  {
    id: 15,
    name: "Rafael Collado",
    title: "Software Developer",
    picture:
      "https://careers.qvin.com/uploads/1/2/3/5/123547525/published/rafael.png?1648764486",
  },
];
const jobs = [
  { id: 1, title: "Sofware Developer,Menlo Park", url: "aafsgg" },
  { id: 2, title: "Science Lead, Menlo Park", url: "aafkaf" },
  { id: 3, title: "Medical Lead,Menlo Park", url: "fs" },
  { id: 4, title: "Product Lead,Menlo Park", url: "afadf" },
  { id: 5, title: "Software Developer in Test,Menlo Park", url: "safegje" },
];
const applications = [
  {
    id: 1,
    jobId: 1,
    fullName: "example",
    profile: "linked",
    email: "asdsfgh@gmail.com",
  },
];

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
      applications.map((application) => {
        return Application.create(application);
      })
    );

    db.close();
  } catch (err) {
    console.error(err);
    db.close();
  }
};

seed();
