import React, { useEffect } from "react";
import "./../scss/clock.scss";

export default function Clock() {
  useEffect(() => {
    set("hours", 30 * new Date().getHours());
    set("minutes", 6 * new Date().getMinutes());
    set("seconds", 10 * new Date().getSeconds());

    function set(id: any, deg: any) {
      var el: any = document.getElementById(id),
        rotation = "rotate(" + deg + "deg)";

      el.style.transform = rotation;
      el.style.webkitTransform = rotation;
    }
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <div id="clock" className="align-middle" >
        <div id="hours"></div>
        <div id="minutes"></div>
        <div id="seconds"></div>
      </div>
    </div>
  );
}
