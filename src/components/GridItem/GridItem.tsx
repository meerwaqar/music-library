import React from "react";
import "./gridItem.style.scss";

interface GridItemProps {
  cover: string;
  label: string;
  onClick: () => void;
  key: string;
}
const GridItem = (props: GridItemProps) => {
  const { cover = "", label = "", key, onClick } = props;
  return (
    <div className="grid-item" onClick={onClick} id={key}>
      <div className="cover">
        <img src={cover} alt={label || "img not available"} />
      </div>
      <div className="label">{label}</div>
    </div>
  );
};

export default GridItem;
