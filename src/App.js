import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "./Css/global.css";
import Navbar from "./Components/NavBar";
import ThreeColumnGrid from "./Components/ThreeColumnGrid";
import TwoColumnComponent from "./Components/TwoColumnComponent";
import Footer from "./Components/Footer";
import TwoLayoutGrid from "./Components/TwoLayoutGrid";
import ColumnComponent1 from "./Components/ColumnComponent1";
import ColumnComponent2 from "./Components/ColumnComponent2";
import ColumnComponent3 from "./Components/ColumnComponent3";
import ColumnComponent4 from "./Components/ColumnComponent4";
import ColumnComponent5 from "./Components/ColumnComponent5";
import ColumnComponent6 from "./Components/ColumnComponent6";
import CategoryPage from "./Components/CategoryComponent";
import SearchPage from "./Components/SearchPage";
import CountryPage from "./Components/CountryPage";


function App() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/news`);
        setNewsData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(`Error fetching news data from backend: ${error}`);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ThreeColumnGrid >
                  <ColumnComponent1 newsData={newsData}/>
                  <ColumnComponent2 newsData={newsData}/>
                  <ColumnComponent3 newsData={newsData}/>
                </ThreeColumnGrid>
                <TwoLayoutGrid >
                  <ColumnComponent4 newsData={newsData}/>
                  <ColumnComponent5 newsData={newsData}/>
                  <ColumnComponent6 newsData={newsData}/>
                </TwoLayoutGrid>
                <TwoColumnComponent newsData={newsData} />
              </>
            }
          />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/search/:searchTerm" element={<SearchPage />} />
          <Route path="/country/:country" element={<CountryPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
