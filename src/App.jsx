import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
