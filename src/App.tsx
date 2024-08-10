import Profile from "./components/Profile";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <Profile />
      <Projects />
    </div>
  );
}

export default App;
