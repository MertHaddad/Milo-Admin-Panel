import React from "react";
import CountUp from "react-countup";

interface Props {
  num: any;
  duration: any;
  title: any;
  comment: any;
  status: Boolean;
}

export default function Counter(props: Props) {
  const stringNum = (Math.random()*25 +1)
  
  
  return (
    <>
      <h4>{props.title}</h4>
      <h2 className="d-inline">
        $<CountUp duration={props.duration} end={props.num} />
      </h2>
      <span className={`mx-3 d-inline ${props.status ? "text-success" : "text-danger" }`}>
        <CountUp duration={props.duration} end={stringNum} />% 
        {props.status ? <i className="mx-1 bi bi-arrow-up"></i>
        : <i className="mx-1  bi bi-arrow-down"></i>}

      </span>
      <span className="d-block">{props.comment}</span>
    </>
  );
}
