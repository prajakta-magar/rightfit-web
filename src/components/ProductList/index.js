import React, { useState, useEffect } from "react";
import { fetchData } from "../../utils/api";
import Product from "../Product";
import Filter from "../Filter";
import FilterDisplay from "../FilterDisplay";
import CartSidebar from "../CartSidebar";
import Spinner from "../Spinner";
import { useCart } from "../../context/CartContext";

const ProductList = () => {
  const { state } = useCart();
  const [products, setProducts] = useState([]);
  const [colors, setColors] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [filters, setFilters] = useState({ material: "All", color: "All" });
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 6;

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const productData = await fetchData("products");
        const colorData = await fetchData("colors");
        const materialData = await fetchData("material");

        if (productData) setProducts(productData.products);
        if (colorData) setColors(colorData.colors);
        if (materialData) setMaterials(materialData.material);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const getColorName = (id) =>
    colors.find((color) => color.id === id)?.name || "-";
  const getMaterialName = (id) =>
    materials.find((material) => material.id === id)?.name || "-";

  const filteredProducts = products.filter((product) => {
    const materialName = getMaterialName(product.materialId);
    const colorName = getColorName(product.colorId);
    return (
      (filters.material === "All" || materialName === filters.material) &&
      (filters.color === "All" || colorName === filters.color)
    );
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const clearFilter = (filterKey) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: "All",
    }));
  };

  return (
    <>
      <div className="grid grid-cols-5">
        <Filter
          filters={filters}
          setFilters={setFilters}
          colors={colors}
          materials={materials}
        />
        <div className="col-span-4">
          <FilterDisplay filters={filters} clearFilter={clearFilter} />
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <Spinner />
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-10">
              {currentPageProducts.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  color={getColorName(product.colorId)}
                  material={getMaterialName(product.materialId)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 mx-1 font-semibold text-md cursor-pointer rounded-full ${
              currentPage === index + 1 ? "bg-gray-200 text-black" : ""
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {state.displayCart && (
        <CartSidebar
          getColorName={(id) => getColorName(id)}
          getMaterialName={(id) => getMaterialName(id)}
        />
      )}
    </>
  );
};

export default ProductList;
