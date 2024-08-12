import React from "react";

const Project = () => {
  return (
    <>
      <div className="rounded-xl bg-black shadow-md my-4 py-4 px-6 transition ease-in-out delay-100 hover:shadow-gray-700">
        <h3 className="text-xl font-worksans py-1 text-white">
          Chores Scheduler
        </h3>
        <img src="src/assets/calendar.png" className="py-2"></img>
        <p className="font-worksans font-light py-1 text-white">
          Designed with families in mind, this full PERN stack app simplifies
          scheduling and managing household tasks. Imagine combining Google
          Calendar's scheduling power with Trello's collaborative tools.
        </p>

        <p className="font-worksans font-light py-1 text-white">
          Try out the premium features by making a test payment via Stripe.
          You'll be able to split tasks among family members with a rotation
          option and set recurring tasks on a daily or weekly basis, eliminating
          the need to create tasks from scratch each time.
        </p>

        <ul className="font-worksans py-2">
          {[
            "React",
            "TanStack Query",
            "React Router",
            "JWT",
            "PostgreSQL",
            "PG",
            "Express",
            "Node",
            "Stripe Webhook",
            "AWS EC2",
            "Bootstrap",
          ].map((skill) => (
            <li className="bg-gray-600 bg-opacity-80 px-3 inline-flex justify-center align-middle rounded-xl mr-1 text-white">
              {skill}
            </li>
          ))}
        </ul>
        <a
          className="flex items-center font-worksans font-light pt-1 text-white"
          href="https://github.com/xxiuminn/chores-scheduler"
        >
          <span className="i-hugeicons-doc-01 mr-2"></span>View Repo
        </a>
        <a
          className="flex items-center font-worksans font-light text-white"
          href="https://56c7-3-0-146-49.ngrok-free.app/login"
        >
          <span className="i-mage-external-link mr-2"></span>Explore App
        </a>
      </div>

      <div className="rounded-xl bg-black shadow-md my-4 py-4 px-6 transition ease-in-out delay-100 hover:shadow-gray-700">
        <img></img>
        <h3 className="text-xl font-worksans py-1 text-white">
          Service Marketplace
        </h3>
        <p className="font-worksans font-light py-1 text-white">
          Most marketplaces these days are all about products, but what if
          there's a service marketplace where vendors could offer home services
          and homeowners can book everything from cleaning to airconditioning
          service and plumbing - all in one place?
        </p>
        <p className="font-worksans font-light py-1 text-white">
          Plus, users can leave reviews after their service is completed,
          helping others find the best providers.
        </p>
        <ul className="font-worksans py-2">
          {[
            "React",
            "TanStack Query",
            "React Router",
            "JWT",
            "MongoDB",
            "Mongoose",
            "Express",
            "Node",
          ].map((skill) => (
            <li className="bg-gray-600 bg-opacity-80 px-3 inline-flex justify-center align-middle rounded-xl mr-1 text-white">
              {skill}
            </li>
          ))}
        </ul>
        <a
          className="flex items-center font-worksans font-light pt-1 text-white"
          href="https://github.com/Serenula/Skillful-Hands"
        >
          <span className="i-hugeicons-doc-01 mr-2"></span>View Repo
        </a>
        {/* <a className="flex items-center font-worksans font-light">
          <span className="i-mage-external-link mr-2"></span>Explore App
        </a> */}
      </div>

      <div className="rounded-xl bg-black shadow-md my-4 py-4 px-6 transition ease-in-out delay-100 hover:shadow-gray-700">
        <h3 className="text-xl font-worksans py-1 text-white">
          Flights Search Engine
        </h3>
        <img src="src/assets/flights.png" className="py-2"></img>
        <p className="font-worksans font-light py-1 text-white">
          Whipped up a flight search engine that hunts down the best prices from
          various airlines so you can save and snag the cheapest deal for your
          next trip.
        </p>
        <ul className="font-worksans py-2">
          {[
            "React",
            "TanStack Query",
            "React Router",
            "Airtable",
            "REST APIs",
          ].map((skill) => (
            <li className="bg-gray-600 bg-opacity-80 px-3 inline-flex justify-center align-middle rounded-xl mr-1 text-white">
              {skill}
            </li>
          ))}
        </ul>
        <a
          className="flex items-center font-worksans font-light pt-1 text-white"
          href="https://github.com/xxiuminn/flights-search-engine"
        >
          <span className="i-hugeicons-doc-01 mr-2"></span>View Repo
        </a>
        {/* <a className="flex items-center font-worksans font-light">
          <span className="i-mage-external-link mr-2"></span>Explore App
        </a> */}
      </div>

      <div className="rounded-xl bg-black shadow-md my-4 py-4 px-6 transition ease-in-out delay-100 hover:shadow-gray-700">
        <h3 className="text-xl font-worksans py-1 text-white">
          Doodle Jump Game
        </h3>
        <img src="src/assets/doodle-jump.png" className="py-2"></img>
        <p className="font-worksans font-light py-1 text-white">
          My very first coding project, a doodle jump inspired platformer game,
          with full jump control.
        </p>
        <p className="font-worksans font-light py-1 text-white">
          The only rule? Just don't fall off!
        </p>
        <ul className="font-worksans py-2">
          {["Vanilla JavaScript", "CSS3", "HTML5"].map((skill) => (
            <li className="bg-gray-600 bg-opacity-80 px-3 inline-flex justify-center align-middle rounded-xl mr-1 text-white">
              {skill}
            </li>
          ))}
        </ul>
        <a
          className="flex items-center font-worksans font-light pt-1 text-white"
          href="https://github.com/xxiuminn/doodle-jump-game"
        >
          <span className="i-hugeicons-doc-01 mr-2"></span>View Repo
        </a>
        <a
          className="flex items-center font-worksans font-light text-white"
          href="https://xxiuminn.github.io/doodle-jump-game/"
        >
          <span className="i-mage-external-link mr-2"></span>Explore App
        </a>
      </div>
    </>
  );
};

export default Project;
