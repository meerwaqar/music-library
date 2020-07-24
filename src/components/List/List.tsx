import React, { useState, useEffect, ChangeEvent } from "react";
import "./list.style.scss";
import GridItem from "../GridItem";
import { TrackType } from "../../pages/AudioList/AudioList.type";

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
    setIsGridView(listView === "grid");
  }, [data, listView]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchStr(value);
    if (value.length) {
      setListData(
        data.filter((item) => item.title.toLowerCase().indexOf(value) > 0)
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
            <span onClick={() => setIsGridView(false)}>G</span>
          ) : (
            <span onClick={() => setIsGridView(true)}>L</span>
          )}
        </span>
        <input
          placeholder="Search"
          value={searchStr}
          onChange={onSearchChange}
        />
      </div>
      <div className="main list-padding">
        {isGridView ? (
          <div className="grid">
            {listData.map((item, index) => (
              <GridItem
                cover={item.cover}
                label={item.title}
                key={`grid-item${index}`}
                onClick={() => onItemClick({ item, index })}
              />
            ))}
          </div>
        ) : (
          <div className="list"></div>
        )}
      </div>
    </div>
  );
};

export default List;
