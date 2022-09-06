import React from "react";
import CountUp from "react-countup";

interface Props {
    num:any
  }

export default function Counter(props:Props){

return(
    <>
    <h4>Title</h4>
    <h2>
    $<CountUp duration={2.75} end={props.num} />
    </h2>
    <span>silly comment</span>
    </>
)
}