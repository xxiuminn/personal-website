const Profile = () => {
  return (
    <div id="about" className="lg:sticky lg:top-0 lg:h-screen pt-10">
      <img
      // className="w-[20vw] h-[25vh] object-cover object-bottom rounded-lg"
      // src="/src/assets/profile-img.jpg"
      ></img>
      <h1 className="text-5xl font-normal">I'm Xiu Min.</h1>
      <h2 className="text-2xl font-light py-4">
        Full Stack Software Engineer, based in Singapore.
      </h2>
      <p className="font-worksans font-light pb-4">
        Got fed up with just talking about tech and decided to make it. Jumped
        into a software engineering bootcamp, and here I am turning ideas into
        reality, one line of code at a time.
      </p>
      <a
        className="i-uil-linkedin text-3xl mr-3"
        href="https://www.linkedin.com/in/howxiumin/"
      ></a>
      <a
        className="i-mdi-github text-3xl"
        href="https://github.com/xxiuminn"
      ></a>

      <h2 className="text-2xl font-light py-4">About me.</h2>
      <p className="font-worksans font-light pb-4">
        <ul className="list-disc list-inside">
          <li>
            Started out as a performance marketer, where I spent my days
            obsessing over every detail of the digital ads I crafted and their
            ROIs. So when I'm building an app, you can bet I'm laser focused on
            nailing that customer experience.
          </li>
          <li>
            Oh, and did I mention I built a profitable e-Commerce business and
            hit six figures by 26? But, like all great stories, my interest
            fizzled out (business mistake #1 - but that's a tale for another
            time). Thankfully, my retired parents are now running the show while
            I've moved on to my next adventure.
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Profile;
