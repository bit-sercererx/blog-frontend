import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../store/category/categorySlice";
import CategoryItem from "../components/CategoryItem";

const Category = () => {
  const category = useSelector((state) => state.category.category);

  const usedispatch = useDispatch();
  useEffect(() => {
    usedispatch(getCategory());
  }, []);
  return (
    <div className="flex gap-16 flex-wrap justify-center mt-10 mx-20">
      {category?.map((categorie) => (
        <CategoryItem key={categorie._id} categorie={categorie} />
      ))}
    </div>
  );
};
export default Category;
