import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home';
import Careers from './Component/Careers/Careers';
import Blog from './Component/Blog/Blog';
import Covid from './Component/Covid/Covid';
function App() {
    let Routes =createBrowserRouter([
      {path:"",element:<Layout />, children:[
        {index:true,element:<Home/>},
        {path:"home",element:<Home/>},
        {path:"careers",element:<Careers/>},
        {path:"blog",element:<Blog/>},
        {path:"covid",element:<Covid/>},
      ]},
    ])

  return <>
  <RouterProvider router={Routes}/>
  
  </>
   
  ;
}

export default App;
