import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutIcon from "./components/AboutIcon";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <AboutIcon />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
