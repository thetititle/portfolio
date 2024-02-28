import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import PageIndex from './pages/PageIndex';
import './styles.scss';
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<PageIndex />} />
      </Routes>
    </Router>
  );
}

export default App;
