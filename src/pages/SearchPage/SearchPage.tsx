import { useAppSelector } from '../../app/hooks/hooks';
import { useGetProductsQuery } from '../../services/OpenFood';

import Navbar from '../../components/Navbar/Navbar';
import ProductsList from '../../components/Products/ProductsList/ProductList';
import { LoadingSpinner } from '../../components/UI';
import { Outlet } from 'react-router-dom';

const SearchPage = () => {
  const { searchQuery } = useAppSelector((state) => state.search);
  const { data, error, isLoading } = useGetProductsQuery(searchQuery);

  return (
    <div>
      <Navbar whiteLogo
        showSearchBar />
      <main className="flexCenter my-8 pageMargins">
        {isLoading && <LoadingSpinner randomLoader />}

        {error && <h2 className="text-2xl">Il y a eu un erreur. Réesayez plus tard.</h2>}

        {data?.products?.length !== 0 && <ProductsList products={data?.products} />}

        {data?.products?.length === 0 && <h2 className="text-2xl">Aucun resultat trouvé</h2>}

        {/* ATTENTION: This will render the search/preview/:id route and, therefore, render the ProductModal component */}
        <Outlet />

      </main>
    </div>
  );
};

export default SearchPage;
