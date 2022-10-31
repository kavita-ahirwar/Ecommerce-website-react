import { GridView } from "./GridView/GridView";
import { ListView } from "./ListView";
import { useState } from "react";
// import { SideNav } from "./SideNav";
// import { Customers } from "./Customers";
// import { HeadLine } from "./HeadLine";
// import { Blogs } from "./Blogs";

export function Home(){
   
   const [isGridView,setGridView]=useState(false);
  return(<>
  {
     isGridView ? <GridView/> : <ListView/>
   
  }
  {/* <GridView/> */}
  {/* <SideNav/>
  <Customers/>
  <HeadLine/>
  <Blogs/> */}
  </>);
}