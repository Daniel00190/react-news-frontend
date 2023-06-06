import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ThreeColumnGrid from "./ThreeColumnGrid";
import ColumnComponent1 from "./ColumnComponent1";
import ColumnComponent2 from "./ColumnComponent2";
import ColumnComponent3 from "./ColumnComponent3";


const CountryPage = () => {
  const { country } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}country`, {
          params: {
            country: country,
          },
        });
        setArticles(response.data);
      } catch (error) {
        console.error(`Error fetching country news for ${country}: ${error}`);
      }
    };

    fetchData();
  }, [country]);

  return (
    <ThreeColumnGrid >
    <ColumnComponent1 newsData={articles}/>
    <ColumnComponent2 newsData={articles}/>
    <ColumnComponent3 newsData={articles}/>
  </ThreeColumnGrid>
  );
};

export default CountryPage;
