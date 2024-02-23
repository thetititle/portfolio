import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import PageHome from './routes/PageHome';
import PageDetail from './routes/PageDetail';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/movie/:id" element={<PageDetail />} />
      </Routes>
    </Router>
  );
}
export default App;
