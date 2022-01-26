import React from "react";


const ErrorPage = (props) => {
  //console.log("data: ", props.data.errorPage);
  const styleImgCont = {
    height: "100vh",
    margin: 0,
    position: "relative",
  };
  const styleImg = {
    color: '#fff',
    textAlign: 'center',
    position: 'absolute',
    left: '50%',
    top: '50%',
    webkitTransform: 'translateX(-50%) translateY(-50%)',
    transform: 'translateX(-50%) translateY(-50%)',
  }
  
  return (
    <div style={styleImgCont}>
      <div style={styleImg}>
        <img
          width="400em"
          height="300em"
          alt="car-accident-with-tree"
          src="./images/car_accident.jpg"
        />
        <p>An accident has occured</p>
      </div>
    </div>
  );
};

export default ErrorPage;
