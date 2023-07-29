import "./App.css";
import NavBar from "./Components/NavBar";
import NewsMain from "./Components/NewsMain";
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  const [progress, setProgress] = useState(10);
  return (
    <>
      <LoadingBar
        color="#f11946"
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Router>
      <NavBar/>
        <Routes>
          <Route exact path="/"element={<NewsMain key="general" prg={setProgress} cat="general" />} />
          <Route exact path="/entertainment"element={<NewsMain key="entertainment" prg={setProgress} cat="entertainment" />} />
          <Route exact path="/health"element={<NewsMain key="health" prg={setProgress} cat="health" />} />
          <Route exact path="/science"element={<NewsMain key="science" prg={setProgress} cat="science" />} />
          <Route exact path="/sports"element={<NewsMain key="sports" prg={setProgress} cat="sports" />} />
          <Route exact path="/technology"element={<NewsMain key="technology" prg={setProgress} cat="technology" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
