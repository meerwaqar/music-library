import React, { useState, useEffect, ChangeEvent } from "react";
import "./list.style.scss";
import GridItem from "../GridItem";
import { TrackType } from "../../pages/AudioList/AudioList.type";

import { ReactComponent as GridIcon } from "../../resources/icons/gridicon.svg";
import { ReactComponent as ListIcon } from "../../resources/icons/listicon.svg";
import ListItem from "../ListItem";

interface ListProps {
  data: Array<TrackType>;
  listView?: "grid" | "list";
  onItemClick: ({ item, index }: { item: any; index: number }) => void;
}
const List = (props: ListProps) => {
  const { data = [], listView = "grid", onItemClick } = props;

  const [searchStr, setSearchStr] = useState<string>("");
  const [listData, setListData] = useState<Array<TrackType>>([]);
  const [isGridView, setIsGridView] = useState<boolean>(true);

  useEffect(() => {
    if (data.length) setListData(data);
  }, [data]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchStr(value);
    if (value.length) {
      setListData(
        data.filter((item) => item.title.toLowerCase().indexOf(value) >= 0)
      );
    } else {
      setListData(data);
    }
  };

  return (
    <div className="list-main">
      <div className="top-bar list-padding">
        <span>
          {isGridView ? (
            <GridIcon onClick={() => setIsGridView(false)} />
          ) : (
            <ListIcon onClick={() => setIsGridView(true)} />
          )}
        </span>
        <input
          placeholder="Search"
          value={searchStr}
          onChange={onSearchChange}
        />
      </div>
      <div className="main list-padding">
        <div className={isGridView ? "grid" : "list"}>
          {listData.map((item, index) =>
            isGridView ? (
              <GridItem
                cover={item.cover}
                label={item.title}
                key={`grid-item${index}`}
                onClick={() => onItemClick({ item, index })}
              />
            ) : (
              <ListItem
                label={item.title}
                album={item.album}
                key={`grid-item${index}`}
                onClick={() => onItemClick({ item, index })}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
