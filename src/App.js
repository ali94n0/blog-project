import "./App.css";
import Layout from "./components/layout";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import BlogPage from "./components/blog/BlogPage";
import AuthorPage from "./components/author/AuthorPage";
import ScrollToTop from "./components/shared/ScrollToTo";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="/authors/:slug" element={<AuthorPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
