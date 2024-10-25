import { useLocation, useParams } from "react-router-dom";
import { data } from "./Home";
import React, { useEffect, useState } from "react";

const Detail = () => {
  const params = useParams();
  const { id } = params;
  const [getData, setGetData] = useState(null);

  const location = useLocation();

  console.log(location, "locationInfo");

  useEffect(() => {
    if (id) {
      setGetData(data.find((dt) => dt.id == id));
    }
  }, [id]);

  console.log(id, "paramsString"); //! id ==>  Console 3 paramsString  params ==> Console {id: "3"} "paramsString"
  console.log(getData, "getDataString");

  return (
    <div>
      <div> {getData?.name} </div>
      <div> {getData?.description} </div>
    </div>
  );
};

export default Detail;
