
import { SideNav } from "./SideNav";
import { Customers } from "./Customers";
import { HeadLine } from "./HeadLine";
import { Blogs } from "./Blogs";
import { CategoryMenu } from "./CategoryMenu";


export function Home(){
  return(<>
  <CategoryMenu/>
  <SideNav/>
  <Customers/>
  <HeadLine/>
  <Blogs/>
  </>);
}