import { useAppSelector } from '../../app/hooks/hooks';
import { useGetProductsQuery } from '../../services/OpenFood';

import Navbar from '../../components/Navbar';
import ProductsList from '../../components/Products/ProductsList';
import { LoadingSpinner } from '../../components/UI';

const SearchPage = () => {
  const { searchQuery } = useAppSelector((state) => state.search);
  const { data, error, isLoading } = useGetProductsQuery(searchQuery);

  return (
    <div>
      <Navbar showSearchBar />
      <main className="flexCenter my-8 md:my-16">
        {isLoading && <LoadingSpinner randomLoader />}

        {error && <h2 className="text-2xl">Il y a eu un erreur. Réesayez plus tard.</h2>}

        {data?.products?.length !== 0 && <ProductsList products={data?.products} />}

        {data?.products?.length === 0 && <h2 className="text-2xl">Aucun resultat trouvé</h2>}
      </main>
    </div>
  );
};

export default SearchPage;
