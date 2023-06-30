import Home from "./Components/Home";
import Menuitem from "./Components/Menuitem";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ingredients" element={<Menuitem />} />
      </Routes>
    </>
  );
}

export default App;