import React from "react";
import "./listItem.style.scss";

interface ListItemProps {
  album: string;
  label: string;
  onClick: () => void;
  key: string;
}
const ListItem = (props: ListItemProps) => {
  const { label, album, onClick, key } = props;
  return (
    <div className="list-item">
      <span className="label">{label}</span>
      <span className="album">({album})</span>
    </div>
  );
};

export default ListItem;
