import React, { FC } from "react";

interface Props{
    char:any
}

const Card = (props:Props) => {
  return (
    <>
      {/* <div className="card" style={{"width: 18rem;"}}> */}
      <div className="card" >
        <div className="card-body">
        {props.char}
        </div>
      </div>
    </>
  );
};

export default Card;
