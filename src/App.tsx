// import MainLayout from "./components/layout/MainLayout";
import Container from "./components/ui/Container";

function App() {
  // return <MainLayout />;
  return (
    <Container>
      <div className="h-screen w-full flex items-center justify-center">
        <button className="px-3 py-2 bg-purple-400 rounded-md">
          This is a button
        </button>
        <button className="px-3 py-2 bg-purple-400 rounded-md">
          This is a button 2
        </button>
      </div>
    </Container>
  );
}

export default App;
