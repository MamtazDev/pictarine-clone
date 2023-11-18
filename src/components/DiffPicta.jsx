import React from "react";

export default function DiffPicta({ title, sentence }) {
  return (
    <div>
      <h2 className="title-block-2">{title}</h2>
      <p>{sentence}</p>
    </div>
  );
}
