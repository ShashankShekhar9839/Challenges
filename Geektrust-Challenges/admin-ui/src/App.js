import "./App.module.scss";
import { useEffect, useState } from "react";
import Table from "./components/Table/Table";

function App() {
  const [data, setData] = useState([]);
  let API =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

  let fetchData = async (API) => {
    let response = await fetch(API);
    let jsonData = await response.json();
    return jsonData; // Make sure to return the data
  };

  useEffect(() => {
    fetchData(API)
      .then((results) => {
        setData(results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [API]);

  return (<div>
         <Table 
         tableData = {data}
         />  
  </div>);
}

export default App;
