import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from './components/UI';
import { Homepage, ProductPage, SearchPage } from './pages';

const ProductModal = lazy(() => import('./components/Products/ProductsList/ProductModal/ProductModal'));

const App = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<SearchPage />}>
            <Route path="/search/preview/:id" element={<ProductModal />}/>
          </Route>
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
