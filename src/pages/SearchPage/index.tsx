import { useAppSelector } from '../../app/hooks/hooks';
import Navbar from '../../components/Navbar';
import ProductsList from '../../components/Products/ProductsList';
import { LoadingSpinner } from '../../components/UI';
import { useGetProductsQuery } from '../../services/OpenFood';

const SearchPage = () => {
  const { searchQuery } = useAppSelector(state => state.search);
  const { data, error, isLoading } = useGetProductsQuery(searchQuery);

  return (
    <>
      <Navbar 
        showSearchBar
      />
      <main className='flexCenter my-8 md:my-16'>
        {!isLoading && !error && data?.products.length !== 0 && <ProductsList products={data?.products}/>}
        {isLoading && <LoadingSpinner />}
        {error && <h2 className='text-2xl'>Il y a eu un erreur. Réesayez plus tard.</h2>}
        {!isLoading && !error && data?.products.length === 0 && <h2 className='text-2xl'>Aucun resultat trouvé</h2>}
      </main>
    </>
  );
};

export default SearchPage;