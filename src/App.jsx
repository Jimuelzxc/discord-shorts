import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Content from "./components/Content"

function App() {
  return (
    <div className="App h-screen w-full flex items-center justify-center bg-dark-2">
      <Container>
        <Navbar />
        <Content />
      </Container>
    </div >
  );
}

export default App;
