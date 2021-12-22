import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Shop from "./Shops";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://electronic-ecommerce.herokuapp.com/api/v1/product";
function App() {
  const [loading, setLoading] = useState(true);

  const [shops, setShops] = useState();

  const fetchShops = async () => {
    try {
      const response = await fetch(url);
      const shop = await response.json();
      setShops(shop);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchShops();
  }, []);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <>
      <Shop {...shops} />
    </>
  );
}

export default App;
