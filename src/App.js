import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import LogementProfile from "./pages/ApartmentProfile";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartment/:id" element={<LogementProfile />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
