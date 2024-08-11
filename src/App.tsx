import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:px-24 px-10 lg:gap-20 gap-10">
        <Profile />
        <Projects />
      </div>
      <Footer />
    </>
  );
}

export default App;
