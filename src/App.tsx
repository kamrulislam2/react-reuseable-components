import { useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const handleModalClose = () => {
    setModal((prev) => !prev);
  };
  return (
    <Container>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-96 border border-red-500 p-10">
          <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
          <Modal isOpen={modal} onClose={handleModalClose}>
            <h1>This is a Modal</h1>
          </Modal>
        </div>
      </div>
    </Container>
  );
}

export default App;
