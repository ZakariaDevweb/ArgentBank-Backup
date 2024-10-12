import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Connexion from './Pages/Connexion/Connexion';
import Profile from './Pages/Profil/Profil';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './Pages/HomePage/HomePage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Connexion />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  )}

export default App;