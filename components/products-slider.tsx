import ProductCard from "./product-card";

const ProductsSlider = () => {
  return (
    <div className="max-w-8xl w-full mx-auto mt-[135px]">
      <h2 className="h2-inter text-needus-black mb-16 text-center">
        Related Products
      </h2>
      <ProductCard />
    </div>
  );
};

export default ProductsSlider;
