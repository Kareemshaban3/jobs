/** @format */

import { useSearchParams } from "react-router-dom";
import useGetNationalities from "../hooks/app/useGetNationalities";
import SelectField from "../ui/Layout/form-elements/SelectField";
import useGetCountries from "../hooks/app/useGetCountries";
import { useState } from "react";

export default function SelectOptions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState(null);

  const { data: nationalities } = useGetNationalities();
  const { data: countries } = useGetCountries();

  const setParams = (value, queryParam) => {
    if (value !== "") {
      searchParams.set(queryParam, value);
      setSearchParams(searchParams);
    } else {
      searchParams.delete(queryParam);
      setSearchParams(searchParams);
    }
  };

  const filterByIndividual = () => {
    const currentType = searchParams.get("type");
    if (currentType === "individual") {
      searchParams.delete("type");
      setActiveFilter(null);
    } else {
      searchParams.set("type", "individual");
      setActiveFilter("individual");
    }
    setSearchParams(searchParams);
  };

  const filterByCompany = () => {
    const currentType = searchParams.get("type");
    if (currentType === "company") {
      searchParams.delete("type");
      setActiveFilter(null); 
    } else {
      searchParams.set("type", "company");
      setActiveFilter("company"); 
    }
    setSearchParams(searchParams);
  };

  return (
    <>
      <ul className='selects'>
        <li>
          <SelectField
            label={"Country"}
            name={"Choose"}
            options={countries?.map((opt) => ({
              id: opt?.id,
              label: opt?.name,
            }))}
            onChange={(e) => setParams(e.target.value, "country")}
          />
        </li>
        <li>
          <div className='input'>
            <label className='label' htmlFor='location'>
              Age
            </label>
            <div className='select'>
              <select className='Select-re' name='' id=''>
                <option value=''>All</option>
                <option value='19-25'>from 19 to 25</option>
                <option value='26-45'>from 26 to 45</option>
                <option value='45+'>from 45+</option>
              </select>
            </div>
          </div>
        </li>
        <li>
          <SelectField
            name={"all"}
            label='Nationality'
            options={nationalities?.map((opt) => ({
              id: opt?.id,
              label: opt?.name,
            }))}
            onChange={(e) => setParams(e.target.value, "nationality")}
          />
        </li>
        <li>
          <SelectField
            label={"Gender"}
            name={"all"}
            options={[
              { id: "male", label: "Male" },
              { id: "female", label: "Female" },
            ]}
            onChange={(e) => setParams(e.target.value, "Gender")}
          />
        </li>
        <li>
          <SelectField
            label={"Religion"}
            name={"all"}
            options={[
              { id: "muslim", label: "Muslim" },
              { id: "non-muslim", label: "non Muslim" },
            ]}
            onChange={(e) => setParams(e.target.value, "religion")}
          />
        </li>
        <li>
          <button 
            onClick={filterByIndividual} 
            className={activeFilter === "individual" ? "active" : ""}
          >
            By individual
          </button>
        </li>
        <li>
          <button 
            onClick={filterByCompany} 
            className={activeFilter === "company" ? "active" : ""}
          >
            By Company
          </button>
        </li>
      </ul>
    </>
  );
}