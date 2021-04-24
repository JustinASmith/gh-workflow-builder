import FlowView from "./components/FlowView";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <FlowView />
    </div>
  );
}

export default App;
