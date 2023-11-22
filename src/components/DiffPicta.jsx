import React from "react";

export default function DiffPicta({ title, sentence }) {
  return (
    <div className="mb-4">
      <h2 className="title-block-3">{title}</h2>
      <p className="fs_14">{sentence}</p>
    </div>
  );
}
