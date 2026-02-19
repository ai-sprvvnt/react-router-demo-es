import { Routes, Route } from 'react-router-dom'; // Nueva importación
import Dashboard from './Dashboard/Dashboard'; // Nueva importación
import Reviews from './Reviews/Reviews'; // Nueva importación
import AboutMe from './AboutMe/AboutMe'; // Nueva importación

import './App.css';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Envuelve un componente Route dentro de un componente Routes  
          y especifica la ruta y los atributos del elemento tal como se muestra. */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
