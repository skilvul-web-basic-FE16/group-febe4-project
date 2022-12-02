import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticleListPage from "./pages/ArticleListPage";
import DetailArticle from "./pages/DetailArticle";
import AboutUsPage from "./pages/AboutUsPage";
import PsikologListPage from "./pages/PsikologListPage";
import DetailPsikolog from "./pages/DetailPsikolog";
import Registrasi from "./components/Registrasi";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article" element={<ArticleListPage />} />
        <Route path="/psikolog" element={<PsikologListPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/registrasi" element={<Registrasi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detailArticle/:id" element={<DetailArticle />} />
        <Route path="/detailPsikolog/:id" element={<DetailPsikolog />} />
      </Routes>
    </div>
  );
}

export default App;
