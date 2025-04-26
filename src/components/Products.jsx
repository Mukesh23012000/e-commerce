import { useProductContext } from "../contexts/ProductContext";
import ProductCard from "./ProductCard";

const Products = () => {
  const productContext = useProductContext();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {productContext.filteredProducts?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;