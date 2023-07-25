// import { useState, useEffect } from "react";

// const useData = (api) => {

//     const [ data, setData ] = useState();

//     useEffect(() => {
//         fetch('http://localhost:5000/' + api)
//             .then(res => res.json())
//             .then(data => setData(data))
//             .catch( error => {
//                 throw new Error("Failed to fetch products: " + error.message)
//             });
//     },[api])
//   return [data, setData]
// }

// export default useData
import { useState, useEffect } from "react";
import axios from "axios";

const useData = (api) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('http://localhost:5000/' + api)
      .then(response => setData(response.data))
      .catch(error => {
        throw new Error("Failed to fetch products: " + error.message);
      });
  }, [api]);

  return data;
}

export default useData;
