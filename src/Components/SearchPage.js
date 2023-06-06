import React, { useEffect, useState } from "react";
import ThreeColumnGrid from "./ThreeColumnGrid";
import ColumnComponent1 from "./ColumnComponent1";
import ColumnComponent2 from "./ColumnComponent2";
import ColumnComponent3 from "./ColumnComponent3";
import { useParams } from "react-router-dom";
import axios from "axios";


const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/search`, {
          params: {
            term: searchTerm,
          },
        });
        setSearchResults(response.data);
        console.log(searchResults);
      } catch (error) {
        console.error(
          `Error fetching search results for term ${searchTerm}: ${error}`
        );
      }
    };

    fetchData();
  }, [searchTerm]);

  return (<ThreeColumnGrid >
    <ColumnComponent1 newsData={searchResults}/>
    <ColumnComponent2 newsData={searchResults}/>
    <ColumnComponent3 newsData={searchResults}/>
  </ThreeColumnGrid>);
};

export default SearchPage;
