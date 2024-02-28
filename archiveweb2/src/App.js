import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import PageIndex from './pages/PageIndex';
import PageProducts from './pages/PageProducts';
import './styles.scss';
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<PageIndex />} />
        <Route
          path="/products"
          element={<PageProducts />}
        />
      </Routes>
    </Router>
  );
}

export default App;
