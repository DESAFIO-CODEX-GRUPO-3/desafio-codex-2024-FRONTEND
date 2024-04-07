import { BrowserRouter, Route, Routes  } from "react-router-dom";

import "./styles/globals.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={SignIn} /> 
      </Routes>
    </BrowserRouter>
  )
}