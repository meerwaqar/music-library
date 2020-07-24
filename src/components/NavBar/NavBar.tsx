import React, { ReactNode, Children, useState, useEffect } from "react";
import "./navbar.style.scss";

interface NavBarObject {
  id: number;
  name: string;
  postFix?: string;
}
interface NavBarProps {
  showNavBar?: boolean;
  data: Array<NavBarObject>; //Q? is it possible to have any name for the type? e.g data : NavBarData that would be Array<NavBarObject>
  children?: ReactNode;
  childrenPosition?: "top" | "bottom";
  defaultSelectedIndex?: number;
  onSelectItem: ({
    data,
    index,
  }: {
    data: NavBarObject;
    index: number;
  }) => void;
}
const NavBar = (props: NavBarProps) => {
  const {
    data = [],
    showNavBar = true,
    defaultSelectedIndex = 0,
    onSelectItem,
    children,
    childrenPosition = "top",
  } = props;

  const [activeIndex,setActiveIndex] = useState<number>(defaultSelectedIndex);

  useEffect(()=>{
      console.log("nav component")
  },[])
  const navItemClickHandler = (item: NavBarObject,index:number) =>{
    setActiveIndex(index);
    onSelectItem({data:item,index});
  }
  return (
    <div className="nav-bar">
        {children && childrenPosition==="top" && <div className="children">{children}</div>}
      <ul>
        {data.map((item, index) => (
          <li className={activeIndex===index?'active':""} key={`nav-bar-item${index}`} onClick={() => navItemClickHandler(item, index)}>
            {item.name} {item.postFix && item.postFix}
          </li>
        ))}
      </ul>
      {children && childrenPosition==="bottom" && <div className="children">{children}</div>}
    </div>
  );
};

export default NavBar;
