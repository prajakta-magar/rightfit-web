import FilterList from "../FilterList";

const Filter = ({ filters, setFilters, colors, materials }) => {
  return (
    <div className="">
      <h3 className="text-md font-bold mb-5">Filter</h3>
      <FilterList
        title="Materials"
        items={materials}
        selectedItem={filters.material}
        onSelect={(material) => setFilters({ ...filters, material })}
      />
      <FilterList
        title="Color"
        items={colors}
        selectedItem={filters.color}
        onSelect={(color) => setFilters({ ...filters, color })}
      />
    </div>
  );
};

export default Filter;
