import "./App.scss";
import { useEffect, useState } from "react";
import Table from "./components/Table/Table";
import Input from "./components/Input/Input";
import debounce from "lodash/debounce";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // State for filtered data
  const [searchValue, setSearchValue] = useState("");

  let API =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

  let fetchData = async (API) => {
    let response = await fetch(API);
    let jsonData = await response.json();
    return jsonData;
  };

  useEffect(() => {
    fetchData(API)
      .then((results) => {
        setData(results);
        setFilteredData(results); // Initialize filteredData with the entire dataset
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [API]);

  let handleInputChange = debounce((value) => {
    const lowercasedValue = value.toLowerCase().trim();

    setSearchValue(lowercasedValue);
    const filteredResults = data.filter(
      (item) =>
        item.name.toLowerCase().includes(lowercasedValue) ||
        item.email.toLowerCase().includes(lowercasedValue) ||
        item.role.toLowerCase().includes(lowercasedValue)
    );
    setFilteredData(filteredResults);
  }, 300);

  return (
    <div className="wrapper">
      <Input onChange={(event) => handleInputChange(event.target.value)} />
      <Table tableData={filteredData} />
    </div>
  );
}

export default App;
