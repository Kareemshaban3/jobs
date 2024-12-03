/** @format */

// الشريط الاول 


import { useSearchParams } from "react-router-dom";
import useGetCategories from "../hooks/app/useGetCategories";
import Loading from "./Loading";

export default function Category() {
  const { data: categories, isLoading } = useGetCategories();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className='category'>
      {isLoading && <><Loading/></>}
      {!isLoading &&
        categories?.map((category) => (
          <div
            className={
              +searchParams.get("category") === category?.id
                ? "categoryInfo active"
                : "categoryInfo"
            }
            onClick={() => setSearchParams({ category: category.id })}
            key={category.id}
          >
            <img src={category.image} alt='' />
            <p>{category.name}</p>
          </div>
        ))}
    </div>
  );
}
