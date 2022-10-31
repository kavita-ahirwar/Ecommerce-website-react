import {React} from 'react'
import './App.css';
import { Footers,HeaderFirst,HeaderSecond,HeaderThird,CategoryMenu,SideNav,Customers,HeadLine,Blogs} from './components'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {Home} from './components/Home/Home';
import {CategoryList} from './components/CategoryList'

function App() {
  return (
    <>
    <HeaderFirst />
    <HeaderSecond/>
    <HeaderThird />
    {/* <CategoryMenu />
    <SideNav/>
    <Customers/>
    <HeadLine />
    <Blogs /> */}

<Router>
                    {/* <Navigation/> */}
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        {/* <Route path='/login' element={<LoginPage />}/>
                        <Route path='/register' element={<RegisterPage />}/> */}
                    </Routes>
                </Router>
    <Footers />

    </>
  );
}

export default App;
