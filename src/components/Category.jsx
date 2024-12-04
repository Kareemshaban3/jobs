/** @format */

import { useSearchParams } from "react-router-dom";
import useGetCategories from "../hooks/app/useGetCategories";
import Loading from "./Loading";

export default function Category() {
  const { data: categories, isLoading } = useGetCategories();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleAllJobsClick = () => {
    // إزالة الفلاتر وعرض كل البيانات
    setSearchParams({});
  };

  const handleCategoryClick = (categoryId) => {
    // تعيين التصنيف الجديد
    setSearchParams({ category: categoryId });
  };

  const activeCategoryId = +searchParams.get("category");

  return (
    <div className='category'>
      {isLoading && (
        <>
          <Loading />
        </>
      )}
      <div
        className={`all ${!activeCategoryId ? "active" : ""}`}
        onClick={handleAllJobsClick}
      >
        <div className='allLink'>
          <div className='content'>
            <div className='img'>
              <img src='/images/all.svg' alt='' />
            </div>
            <h6>All Jobs</h6>
          </div>
        </div>
      </div>
      {!isLoading &&
        categories?.map((category) => (
          <div
            className={
              activeCategoryId === category?.id
                ? "categoryInfo active"
                : "categoryInfo"
            }
            onClick={() => handleCategoryClick(category.id)}
            key={category.id}
          >
            <img src={category.image} alt='' />
            <p>{category.name}</p>
          </div>
        ))}
    </div>
  );
}
