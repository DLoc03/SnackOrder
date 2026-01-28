"use client";
import React, { useState } from "react";
import custom from "./custom.module.css";
import clsx from "clsx";

function Card() {
  const [expand, setExpand] = useState(false);
  return (
    <div
      className={clsx("card", {
        [custom.card]: expand,
      })}
    >
      Card
    </div>
  );
}

export default Card;
