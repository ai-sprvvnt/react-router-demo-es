// PageNotFound.jsx
import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  const navigateNot = useNavigate();
  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span>404</span> - ¡Página no encontrada!
      </h3>
      <p className="not-found__text">
        ¡Uy! Aquí no hay nada... Busca en otro lado... Lo sentimos. 🥺
      </p>
      <button type="button" onClick={() => navigateNot('/')}>
        Volver al inicio
      </button>
    </div>
  );
}

export default PageNotFound;
