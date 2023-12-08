import React, { useState, useEffect } from "react";
import Feature from "../../components/Feature";
import Chart from "../../components/Chart";
import Spinner from "../../components/spinner";

export default function Home() {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => setSpinner(false), 300);
  }, []);
  return (
    <>
      {spinner && <Spinner />}
      <div className="dashboard">
        {!spinner && <Feature />}
        {!spinner && <Chart />}
      </div>
    </>
  );
}
