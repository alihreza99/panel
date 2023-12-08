import React, { useState, useEffect } from "react";
import Feature from "../../components/feature";
import Chart from "../../components/chart";
import Spinner from "../../components/spinner";

export default function Home() {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => setSpinner(false), 250);
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
