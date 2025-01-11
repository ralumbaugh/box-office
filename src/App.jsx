import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";
import MainLayout from "./Components/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/starred" element={<Starred />}></Route>
        </Route>
        <Route
          path="/*"
          element={<div>I don't know man, I'm scared!</div>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
