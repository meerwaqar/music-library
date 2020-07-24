import React, { useCallback, useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import "./audiolist.style.scss";
import List from "../../components/List";
import { testData } from "../../testData";
import { AudioListProps, AudioListDataType } from "./AudioList.type";

const initialData = { tracks: [] }; //TODO will get from context

const navBarData = testData.map((item) => ({
  name: item.genre,
  id: item.id,
  postFix: `(${item.tracks.length})`,
}));
const getData = (index: number) => {
  return testData.length ? testData[index] : initialData;
};
const AudioList: React.FC = (props: AudioListProps) => {
  const [data, setData] = useState<AudioListDataType>(initialData); // TODO will get from context 

  useEffect(() => {
    setData(getData(0));
  }, []);
  const onNavBarSelect = useCallback(({ index }) => {
    setData(getData(index));
  }, [setData]);
  return (
    <div className="container">
      <div className="side-menu">
        <NavBar data={navBarData} onSelectItem={onNavBarSelect}>
    
        </NavBar>
      </div>
      <main>
        <List data={data.tracks} onItemClick={({item,index}) => console.log(item)} />
      </main>
    </div>
  );
};

export default AudioList;
