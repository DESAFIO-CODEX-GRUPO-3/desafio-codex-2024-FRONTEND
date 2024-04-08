import { BrowserRouter, Route, Routes  } from "react-router-dom";

import "./styles/globals.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/signin" Component={SignIn} />
        <Route path="/signup" Component={SignUp} />
        <Route path="*" Component={Home} />
      </Routes>
    </BrowserRouter>
  )
}