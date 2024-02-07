import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import RecipeDetails from './components/RecipeDetails';

import Footer from './components/common/Footer';
import NavBar from './components/common/NavBar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import './styles/index.scss';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
