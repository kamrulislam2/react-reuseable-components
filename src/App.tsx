// import MainLayout from "./components/layout/MainLayout";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

function App() {
  // return <MainLayout />;
  return (
    <Container>
      <div className="h-screen w-full flex items-center justify-center">
        {/* <h1>This is a h1 tag</h1>
        <h2>This is a h1 tag</h2>
        <h3>This is a h1 tag</h3>
        <button className="btn btn-primary">This is a button</button>
        <button className="btn btn-danger">This is a button 2</button> */}

        <Button outline={true} />
      </div>
    </Container>
  );
}

export default App;
