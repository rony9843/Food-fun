import Button from "@mui/material/Button";
import React, { useState } from "react";
import Select from "react-select";
import styled from "styled-components";
import DataCat from "./Data/Data.json";

export default function Home() {
  // for option value
  const options = [
    { value: "KFC", label: "KFC" },
    { value: "McDonald's", label: "McDonald's" },
    { value: "SubWay", label: "SubWay" },
    { value: "Starbucks", label: "Starbucks" },
    { value: "Burger King", label: "Burger King" },
    { value: "Dominos", label: "Dominos" },
    { value: "Pizza Hut", label: "Pizza Hut" },
    { value: "Herfy", label: "Herfy" },
    { value: "Al Baik", label: "Al Baik" },
    { value: "Dunkin'Donuts", label: "Dunkin'Donuts" },
  ];
  // for selected option value
  const SelectOptions = [
    {
      value: "KFC",
      options: [
        { value: "Sandwich" },
        { value: "Burger" },
        { value: "Slides and Deserts" },
      ],
    },
    {
      value: "McDonald's",
      options: [
        { value: "Happy Meals" },
        { value: "Donuts" },
        { value: "Burger" },
        { value: "Nugget" },
        { value: "Sandwich" },
        { value: "Slides and Deserts" },
      ],
    },
    {
      value: "SubWay",
      options: [
        { value: "All Sandwiches" },
        { value: "Salads" },
        { value: "Wraps" },
        { value: "Ciabatta Panini" },
        { value: "Sides, Drinks & Extras" },
      ],
    },
    {
      value: "Starbucks",
      options: [
        { value: "Hot Breakfast" },
        { value: "Bakery" },
        { value: "Lunch" },
        { value: "Oatmeal & Yogurt" },
        { value: "Snacks & Sweets" },
      ],
    },
    {
      value: "Burger King",
      options: [
        { value: "King Jr." },
        { value: "Sandwich" },
        { value: "Family Bundles" },
        { value: "Flame Grilled Burgers" },
        { value: "Chicken & More" },
        { value: "Sides" },
      ],
    },
    {
      value: "Dominos",
      options: [
        { value: "  Pick a Specialty Pizza " },
        { value: "  Chicken " },
        { value: "Sides" },
        { value: "  Desserts " },
      ],
    },
    {
      value: "Pizza Hut",
      options: [
        { value: "PIZZAS" },
        { value: "SIDES" },
        { value: "WINGS" },
        { value: "PASTAS" },
        { value: "SALADS" },
        { value: "SANDWICHES" },
        { value: "DESSERTS" },
      ],
    },
    {
      value: "Herfy",
      options: [{ value: "Combo Meals" }, { value: "Kiddie Meals" }],
    },
    {
      value: "Al Baik",
      options: [
        { value: "Chicken" },
        { value: "Seafood" },
        { value: "Desserts" },
      ],
    },
    {
      value: "Dunkin'Donuts",
      options: [
        { value: "Donuts" },
        { value: "sandwiches & more" },
        { value: "snacks & wraps" },
        { value: "bagels & muffins" },
      ],
    },
  ];

  // demo option
  const demoData = [
    "KFC",
    "McDonald's",
    "SubWay",
    "Starbucks",
    "Burger King",
    "Dominos",
    "Pizza Hut",
    "Herfy",
    "Al Baik",
    "Dunkin'Donuts",
  ];

  const [FilterSelectedOption, setFilterSelectedOption] = useState([]);

  const setSelectedOption = (props) => {
    console.log(props);

    const filterAyy = SelectOptions.filter((dt) => dt.value === props.value);

    console.log("filter ", filterAyy[0].options);
    setFilterSelectedOption(filterAyy[0].options);

    console.log("this is all : ", SelectOptions);
  };

  console.log(DataCat);

  // ^ user selected menu
  const [selectMenU, setSelectMenu] = useState("");

  return (
    <Homeback>
      <div className="container">
        <div className="row pt-5">
          <div className="col-sm-12 col-md-5 col-lg-5">
            <div>
              <div>
                <Select
                  className="selectStyle"
                  onChange={setSelectedOption}
                  options={options}
                />
              </div>
              <div className="row">
                {FilterSelectedOption.map((dt) => (
                  <div className={`col-3 p-1  `}>
                    <div
                      onClick={() => {
                        setSelectMenu(dt.value);
                        console.log(dt.value);
                      }}
                      className={`data_one mt-3 ${
                        selectMenU === dt.value && "focusOption"
                      } `}
                    >
                      <span>{dt.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 d-flex submitBtnStyleDiv">
                <Button className="submitBtnStyle" variant="contained">
                  Disable elevation
                </Button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-7 col-lg-7">
            <div className="rightDiseDiv p-2">
              <div>
                <span className="orderHeaderName">Meals</span>
              </div>
              <div className="resultBox p-4">
                <div className="row">
                  {DataCat[0].option.map((dt) => (
                    <div className="main_resultBox col-4 p-5">
                      <div>
                        <img src={dt.image} alt="fw" width={100} />
                      </div>
                      <div>
                        <span>{dt.name}</span>
                      </div>
                      <div>Price : {dt.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 d-flex submitBtnStyleDiv">
              <Button className="submitBtnStyle" variant="contained">
                Disable elevation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Homeback>
  );
}

const Homeback = styled.div`
  background-image: url("https://i.ibb.co/ZBDzmW5/Mask-Group-1.png");
  background-repeat: no-repeat, repeat;
  height: 100vh;
  background-color: #cccccc; /* Used if the image is unavailable */

  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  .css-1s2u09g-control {
    border-radius: 30px;
    border: 3px solid #491903;
    padding: 10px;
  }
  .css-1s2u09g-control:hover {
    border-radius: 30px;
    border: 3px solid #491903;
    padding: 5px;
  }

  .css-1pahdxg-control {
    border-radius: 30px;
    border: 3px solid #491903;
    padding: 5px;
  }
  .data_one {
    border-radius: 30px;
    border: 3px solid #491903;
    width: 100%;
    cursor: pointer;

    background-color: white;
    text-align: center;
    padding: 10px;
  }
  .focusOption {
    background-color: red !important;
  }
  .submitBtnStyle {
    border-radius: 30px;
    border: 3px solid #491903;
    padding: 10px;
    width: 300px;
    background-color: #fe653b;
  }
  .submitBtnStyleDiv {
    display: flex;

    justify-content: flex-end;
  }
  .submitBtnStyle:hover {
    border: 3px solid #fe653b;
    background-color: #491903;
  }
  .rightDiseDiv {
    border: 3px solid #491903;
    background-color: white;
    width: 100%;
    height: 550px;
    border-radius: 30px;
  }
  .orderHeaderName {
    font-family: cursive;
    font-size: 25px;
    /* text-decoration: underline; */
    font-weight: 600;
    text-transform: uppercase;
    color: #fe653b;
    cursor: pointer;
    display: flex;
    justify-content: center;
  }

  .resultBox {
    overflow-y: scroll;
    width: 100%;
    height: 487px;
  }
  .resultBox::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  .resultBox::-webkit-scrollbar-track {
    box-shadow: none;
    border-radius: 10px;
  }

  /* Handle */
  .resultBox::-webkit-scrollbar-thumb {
    background: #fe653b;
    border-radius: 10px;
  }

  /* Handle on hover */
  .resultBox::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
  .main_resultBox {
  }

  @media screen and (max-width: 480px) {
    .submitBtnStyleDiv {
      display: flex;
      justify-content: center;
    }
  }
`;
