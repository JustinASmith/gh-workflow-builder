import FlowView from "./components/FlowView";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div class="flex flex-row">
      <div class="flex-1">
        <Sidebar />
      </div>
      <div class="flex-2 w-full min-h-screen">
        <FlowView />
      </div>
    </div>
  );
}

export default App;
