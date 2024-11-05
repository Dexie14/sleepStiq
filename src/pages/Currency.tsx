import axios from "axios";
import { useEffect, useState } from "react";

const Currency = () => {
  const [dataFetched, setDataFetched] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        " https://api.exchangerate-api.com/v4/latest/USD"
      );
      console.log(response?.data, "response data");
      setDataFetched(response?.data?.rates);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(dataFetched, "dataFetched");

  const [inputvalue, setInputValues] = useState<string>(""); 
  const [selectedCurrency, setSelectedCurrency] = useState<any>(""); 

console.log(inputvalue, "inputvalue")
console.log(selectedCurrency, "selectedCurrency")
console.log(dataFetched[selectedCurrency], "dataFetched[selectedCurrency]")

const currencyAmount = inputvalue * dataFetched[selectedCurrency]

console.log(currencyAmount, "currencyAmount")



  return (
    <div className="w-[85%] mx-auto my-4">
      <h3>Currency</h3>
      <input type="number" onChange={(e) => setInputValues(e.target.value)}  className="border border-green"/>
      <select onChange={(e) => setSelectedCurrency(e.target.value)}>
        {Object.keys(dataFetched)?.map((item: any) => {
          return <option value={item}>{item}</option>;
        })}
      </select>

      <h3>Amount: {currencyAmount}</h3>
    </div>
  );
};

export default Currency;
