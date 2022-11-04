import { ListView } from "./ListView/ListView";
import { useState } from "react";
import { SideBar } from "./SideBar";
import { FruitNav } from "./FruitNav";
import { GridView } from "./GridView/GridView";

export function Inventory(){
   
   const [isGridView,setGridView]=useState(false);
 
    function updateGridViewState(state){
     setGridView(state);
    }

  return(<>

  <FruitNav active={isGridView} changeView={updateGridViewState}/>
  <SideBar />
  {
     isGridView ? <GridView/> : <ListView/>

  }
  
  </>);
}