import FlowView from "./components/FlowView";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Sidebar />
      <header>
        <a
          className="logo"
          href="https://github.com/JustinASmith/gh-workflow-builder"
        >
          GH Workflow Builder
        </a>
      </header>
      <FlowView />
    </div>
  );
}

export default App;
