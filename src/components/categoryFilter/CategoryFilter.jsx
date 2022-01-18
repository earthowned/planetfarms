import useGetFetchData from "../../utils/useGetFetchData";
import { CATEGORY } from "../../utils/urlConstants";
import Filter from "../filter/Filter";

const CategoryFilter = ({
  selectedCategory,
  setSelectedCategory,
  classname,
}) => {
  const { data: categoryData } = useGetFetchData("CATEGORIES_FILTER", CATEGORY);

  return (
    <Filter
      isCategory
      category={categoryData?.results}
      className={`categoryFilter ${classname}`}
      setSelectedCategory={setSelectedCategory}
      selectedCategory={selectedCategory}
    />
  );
};

export default CategoryFilter;
