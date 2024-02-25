import NewsContainer from "./Components/NewsContainer";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <NewsContainer key="general" newsNos={4} category={"general"} />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <NewsContainer key="business" newsNos={4} category={"business"} />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <NewsContainer
                key="entertainment"
                newsNos={4}
                category={"entertainment"}
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <NewsContainer
                key="entertainment"
                newsNos={4}
                category={"health"}
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <NewsContainer key="science" newsNos={4} category={"science"} />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <NewsContainer key="sports" newsNos={4} category={"sports"} />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <NewsContainer
                key="technology"
                newsNos={4}
                category={"technology"}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
