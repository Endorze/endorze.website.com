import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Global from "./components/Global/Global";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Global />}>
            <Route path="/" element={<div>Hej</div>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
