import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/starred" element={<Starred />}></Route>
        <Route
          path="/*"
          element={<div>I don't know man, I'm scared!</div>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
