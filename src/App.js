import FlowView from "./components/FlowView";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div class="flex flex-row">
      <Sidebar />
      {/* <div class="w-full min-h-screen"> */}
      <FlowView />
      {/* </div> */}
    </div>
  );
}

export default App;
