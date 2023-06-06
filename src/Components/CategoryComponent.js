import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ThreeColumnGrid from "./ThreeColumnGrid";
import ColumnComponent1 from "./ColumnComponent1";
import ColumnComponent2 from "./ColumnComponent2";
import ColumnComponent3 from "./ColumnComponent3";


const CategoryPage = () => {
  const [categoryData, setCategoryData] = useState([]);
  const { categoryId } = useParams();

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}category`, {
          params: {
            category: categoryId,
          },
        });
        setCategoryData(response.data);
        console.log(categoryData)
      } catch (error) {
        console.error(`Error fetching news data for category ${categoryId}: ${error}`);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <ThreeColumnGrid >
    <ColumnComponent1 newsData={categoryData}/>
    <ColumnComponent2 newsData={categoryData}/>
    <ColumnComponent3 newsData={categoryData}/>
  </ThreeColumnGrid>);

};

export default CategoryPage;
