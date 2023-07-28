import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loader(props) {
  return (
    <div
      style={{
        marginTop: "60px",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#00acc1"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
