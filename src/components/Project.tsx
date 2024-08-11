const Project = () => {
  return (
    <>
      <div className="rounded-xl bg-zinc-400 my-3 p-4">
        <img></img>
        <h3 className="text-xl font-worksans py-1">Chores Scheduler</h3>
        <p className="font-worksans font-light py-1">
          Designed for families, this full PERN stack app helps you schedule and
          manage household tasks. Think of it as a blend of Google Calendar's
          scheduling combined with Trello's collaborative tools.
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
            <li className="bg-stone-800 px-3 inline-flex justify-center align-middle rounded-xl text-white">
              {skill}
            </li>
          ))}
        </ul>
        <button>View in github</button>
        <button>View live app</button>
      </div>

      <div className="rounded-xl bg-zinc-400 my-3 p-4">
        <img></img>
        <h3 className="text-xl font-worksans py-1">Service Marketplace</h3>
        <p className="font-worksans font-light py-1">
          Developed a marketplace application where vendors can list their
          services, and users can book appointments. After a service is
          completed, users have the option to leave reviews and ratings.
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
            <li className="bg-stone-800 px-3 inline-flex justify-center align-middle rounded-xl text-white">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl bg-zinc-400 my-3 p-4">
        <img></img>
        <h3 className="text-xl font-worksans py-1">Flights Search Engine</h3>
        <p className="font-worksans font-light py-1">
          Created a flights search engine which allows comparison of flight
          prices from various airlines to find the most cost-efficient option
          for your trip.
        </p>
        <ul className="font-worksans py-2">
          {[
            "React",
            "TanStack Query",
            "React Router",
            "Airtable",
            "REST APIs",
          ].map((skill) => (
            <li className="bg-stone-800 px-3 inline-flex justify-center align-middle rounded-xl text-white">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl bg-zinc-400 my-3 p-4">
        <img></img>
        <h3 className="text-xl font-worksans py-1">Doodle Jump Game</h3>
        <p className="font-worksans font-ligh py-1">
          My very first coding project, a doodle jump inspired platformer game,
          with full jump control.
        </p>
        <ul className="font-worksans py-2">
          {["Vanilla JavaScript", "CSS3", "HTML5"].map((skill) => (
            <li className="bg-stone-800 px-3 inline-flex justify-center align-middle rounded-xl text-white">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Project;
