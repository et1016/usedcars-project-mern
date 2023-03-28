import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchCard from "../components/search-card";
import CarsService from "../services/cars.service";

const Search = () => {
  const [searchData, setSearchData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery().get("query");

  useEffect(() => {
    CarsService.carsSearch(query)
      .then((response) => {
        setIsLoading(false);
        setSearchData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  return (
    <div className="search-background">
      {isLoading ? (
        <h1>讀取中，請稍後 ...</h1>
      ) : (
        <div className="search">
          <h2>{searchData.length} 筆搜尋結果</h2>

          <div className="search-card-container">
            {searchData &&
              searchData.map((carData) => {
                return <SearchCard carData={carData} key={carData._id} />;
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
