import {React} from 'react'
import './App.css';
import { Footers,HeaderFirst,HeaderSecond,HeaderThird,CategoryMenu,SideNav,Customers,HeadLine,Blogs} from './components'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
    <HeaderFirst />
    <HeaderSecond/>
    <HeaderThird />
    <CategoryMenu />
    <SideNav/>
    <Customers/>
    <HeadLine />
    <Blogs />
    <Footers />

    </>
  );
}

export default App;
