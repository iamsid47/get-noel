import "./App.css";
import HomePage from "./components/HomePage/Home";
import Pricing from "./components/Pricing/Pricing";
import GetStarted from "./components/GetStarted/GetStarted";
import Action from "./components/Action/Action";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/get-started" element={<GetStarted />} />
        <Route exact path="/action" element={<Action />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
