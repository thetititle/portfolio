import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import PageIndex from './pages/PageIndex';
import PageProducts from './pages/PageProducts';
import './styles.scss';
import PageProducts2 from './pages/PageProducts2';
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<PageIndex />} />
        <Route
          path="/products/personal"
          element={<PageProducts />}
        />
        <Route
          path="/products/company"
          element={<PageProducts2 />}
        />
      </Routes>
    </Router>
  );
}

export default App;
