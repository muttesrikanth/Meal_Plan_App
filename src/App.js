import React, { useState, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MealData from "./components/MealData";
import Meals from "./components/Meals";

export const store = createContext();
const App = () => {
  const [inputData, setInputData] = useState("");
  const [fetchData, setFetchData] = useState(null);

  const getresponse = async () => {
    let url = `https://api.spoonacular.com/mealplanner/generate?apiKey=ddb2c2a4d5494ba0863049a3e4f98d13&timeFrame=day&targetCalories=${inputData}`;
    const response = await fetch(url, { method: "GET" });
    const result = await response.json();
    setFetchData(result);
  };
  const getclassname = () => {
    if (fetchData === null) {
      return "mb-4 inputitem input_align";
    } else {
      return "mb-4 inputitem";
    }
  };
  const getbgclass = () => {
    if (fetchData === null) {
      return "background";
    } else {
      return "background bgnext";
    }
  };

  const onclickHandeller = () => {
    if (inputData === "") {
      const error = document.querySelector(".error");
      error.textContent = "*Enter a valid number of calories in Meal";
      setTimeout(() => {
        error.textContent = "";
      }, 2000);
    } else {
      getresponse();
      setInputData("");
    }
  };

  return (
    <div>
      <store.Provider value={[fetchData]}>
        <div className={getbgclass()}>
          <div className="d-flex flex-row justify-content-center">
            <div className="d-flex flex-column justify-content-center">
              <input
                className={getclassname()}
                type="number"
                placeholder="Enter no.of calories in Meal"
                value={inputData}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onclickHandeller();
                  }
                }}
                onChange={(e) => {
                  setInputData(e.target.value);
                }}
              />
              <div className="error text-danger"></div>


              <button className="btn btn-success" onClick={onclickHandeller}>
                search
              </button>
            </div>
          </div>
        </div>
        {fetchData && <MealData fetchData={fetchData} />}
        {fetchData && <Meals />}
      </store.Provider>
    </div>
  );
};

export default App;
