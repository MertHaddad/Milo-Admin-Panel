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
  const stringNum = Math.random() * 25 + 1;

  return (
    <>
      <div className="row">
        <div className="col">
          <h4 className="card-title">{props.title}</h4>
        </div>
        <div className="col text-end">
          <button
            style={{ pointerEvents: "none" }}
            className={`btn  bg-opacity-25 ${
              props.status ? "bg-success  text-success" : "bg-danger  text-danger"
            } `}
          >
            <i className={`fs-5 ${props.title==="Revenue" ? "bi bi-graph-up-arrow":props.title==="Sales" ? "bi bi-cart-plus" :"bi bi-currency-dollar" }`}></i>
          </button>
        </div>
      </div>
      <h2 className="d-inline">
        $<CountUp duration={props.duration} end={props.num} />
      </h2>
      <span
        className={`mx-3 d-inline ${
          props.status ? "text-success" : "text-danger"
        }`}
      >
        <CountUp duration={props.duration} end={stringNum} />%
        {props.status ? (
          <i className="mx-1 bi bi-arrow-up"></i>
        ) : (
          <i className="mx-1  bi bi-arrow-down"></i>
        )}
      </span>
      <span className="d-block">{props.comment}</span>
    </>
  );
}
