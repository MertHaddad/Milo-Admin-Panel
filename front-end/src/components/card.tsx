import React, { FC } from "react";

interface Props {
  char: any;
  char2?: any;
}

const Card = (props: Props) => {
  return (
    <>
      {/* <div className="card" style={{"width: 18rem;"}}> */}
      <div className="card">
        <div className="card-body">{props.char}
        {props.char2}
        
        </div>
      </div>
    </>
  );
};

export default Card;
