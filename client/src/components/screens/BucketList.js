import React from "react";
import "./BucketList.css";
import BLList from "./BucketListComponent/BLList";
import Navbar from "./Navbar";

const BucketList = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <BLList />
      </div>
    </>
  );
};

export default BucketList;
