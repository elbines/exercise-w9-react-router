import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
//allerede improtert { BrowserRouter, Link, Routes }
import routes from "./routes/routes";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul className="app-ul">
            <li className="app-li">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
