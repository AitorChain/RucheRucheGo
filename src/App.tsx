import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import SearchPage from './pages/SearchPage';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <div className="mx-2 md:mx-8">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
