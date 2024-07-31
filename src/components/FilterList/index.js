const FilterList = ({ title, items, selectedItem, onSelect }) => {
  return (
    <div className="">
      <h4 className="text-md font-normal">{title}</h4>
      <ul className="mb-8">
        <li
          className={`cursor-pointer ${
            selectedItem === "All" ? "font-bold" : ""
          }`}
          onClick={() => onSelect("All")}
        >
          All
        </li>
        {items.map((item) => (
          <li
            key={item.id}
            className={`cursor-pointer ${
              selectedItem === item.name ? "font-bold" : ""
            }`}
            onClick={() => onSelect(item.name)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterList;
