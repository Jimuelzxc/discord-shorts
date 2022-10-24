import Navbar from "./components/Navbar";
import Content from "./components/Content"

function App() {
  return (
    <div className="App h-screen w-full flex items-center justify-center bg-dark-2">
      <div className="container bg-white h-[96%] sm:w-[500px] flex flex-col">
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

export default App;
