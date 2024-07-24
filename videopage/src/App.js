
import { Topbar } from './Pages/home/topbar/Topbar';

import Homeb from './Pages/home/Homeb';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Foodmain from './Components/Foodmain';
import Maina from './Components/Maina';
import Mainfita from './Components/Mainfita';
import Mainherba from './Components/Mainherba';
import Homepro from './Pages/Homepro';
import ProductList from './Pages/ProductList';
import Productb from './Pages/Productb';
import Cart from './Pages/Cart';
import Productb2 from './Pages/Productb2';
import Productb3 from './Pages/Productb3';
import Productb4 from './Pages/Productb4';
import Productb5 from './Pages/Productb5';
import Productb6 from './Pages/Productb6';
import Productb7 from './Pages/Productb7';
import Productb8 from './Pages/Productb8';
import ProductList11 from './Pages/ProductList11';
import Slideproduct2 from './Pages/Slideproduct2';
import Slideproduct4 from './Pages/Slideproduct4';
import Slideproduct5 from './Pages/Slideproduct5';
import Slideproduct6 from './Pages/Slideproduct6';
import Slideproduct7 from './Pages/Slideproduct7';
import Slideproduct8 from './Pages/Slideproduct8';
import Sub from './Subscription/Sub';
import ProductList2 from './Pages/ProductList2';
import Fentylist from './Pages/Fentylist';
import Fentypro1 from './Pages/Fentypro1';
import Fentypro2 from './Pages/Fentypro2';
import Fentypro3 from './Pages/Fentypro3';
import Fentypro4 from './Pages/Fentypro4';
import Fentypro5 from './Pages/Fentypro5';
import Fentypro6 from './Pages/Fentypro6';
import Fentypro7 from './Pages/Fentypro7';
import Fentypro8 from './Pages/Fentypro8';
import Slideproducts1 from './Pages/Slideproducts1';
import Slideproducts2 from './Pages/Slideproducts2';
import Slideproducts3 from './Pages/Slideproducts3';
import Slideproducts4 from './Pages/Slideproducts4';
import ProductList3 from './Pages/ProductList3';
import ProductList4 from './Pages/ProductList4';
import Loginform from './Login/Loginform';
import Activepro5 from './Pages/Activepro5';
import Activepro6 from './Pages/Activepro6';
import Activepro7 from './Pages/Activepro7';
import Activepro8 from './Pages/Activepro8';
import ProductList5 from './Pages/ProductList5';
import Finalpro1 from './Pages/Finalpro1';
import Finalpro3 from './Pages/Finalpro3';
import Finalpro5 from './Pages/Finalpro5';
import Finalpro6 from './Pages/Finalpro6';
import Finalpro7 from './Pages/Finalpro7';
import Finalpro8 from './Pages/Finalpro8';
import Main5 from './Components/Main5';
import { Main6 } from './Components/Main6';
import Main7 from './Components/Main7';
import Main8 from './Components/Main8';
import Main9 from './Components/Main9';
import Main10 from './Components/Main10';
import Main11 from './Components/Main11';
import Main12 from './Components/Main12';



function App() {
  return (
   <BrowserRouter>
    
    <Routes>
     <Route exact path="/" element={<Homeb/>}></Route>
     <Route exact path="/Home" element={<Homeb/>}></Route>
      <Route path="/beauty" element={<Maina/>}></Route>
      <Route path="/fitness" element={<Mainfita/>}></Route>
      <Route path="/why your skin needs love" element={<Maina/>}></Route>
      <Route path="/herbs for life" element={<Mainherba/>}></Route>
      <Route path="/fitness at home" element={<Mainfita/>}></Route>
      <Route path="/food" element={<Foodmain/>}></Route>
      <Route path="/high-protein diet plan" element={<Foodmain/>}></Route>
      <Route path="/wellness" element={<Mainherba/>}></Route>
      <Route path="/dress with confidence" element={<Main5/>}></Route>
      <Route path="/what are the benefits of using flowers in your skincare" element={<Main6/>}></Route>
      <Route path="/8 reasons why you should switch to a plant based diet" element={<Main7/>}></Route>
      <Route path="/minimizing the health risks of spending too much time online" element={<Main8/>}></Route>
      <Route path="/weight loss and rubber weight plates" element={<Main9/>}></Route>
      <Route path="/2024's ultimate guide to vibrant hair" element={<Main10/>}></Route>
      <Route path="/creating the best home environment" element={<Main11/>}></Route>
      <Route path="/the secret sour" element={<Main12/>}></Route>
      <Route path="/shop" element={<Homepro/>}></Route>
      <Route path="/register" element={<Loginform/>}></Route>
            <Route path="/products/:category" element={<ProductList/>}></Route>
            <Route path="/product" element={<Productb/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/product/1" element={<Productb/>}></Route>
            <Route path="/product/2" element={<Productb2/>}></Route>
            <Route path="/product/3" element={<Productb3/>}></Route>
            <Route path="/product/4" element={<Productb4/>}></Route>
            <Route path="/product/5" element={<Productb5/>}></Route>
            <Route path="/product/6" element={<Productb6/>}></Route>
            <Route path="/product/7" element={<Productb7/>}></Route>
            <Route path="/product/8" element={<Productb8/>}></Route>
            <Route path="/slide/1" element={<ProductList11/>}></Route>
            <Route path="/slide/2" element={<ProductList2/>}></Route>
            <Route path="/slide/3" element={<ProductList3/>}></Route>
            <Route path="/slideproduct/1" element={<Productb/>}></Route>
            <Route path="/slideproduct/2" element={<Slideproduct2/>}></Route>
            <Route path="/slideproduct/3" element={<Productb3/>}></Route>
            <Route path="/slideproduct/4" element={<Slideproduct4/>}></Route>
            <Route path="/slideproduct/5" element={<Slideproduct5/>}></Route>
            <Route path="/slideproduct/6" element={<Slideproduct6/>}></Route>
            <Route path="/slideproduct/7" element={<Slideproduct7/>}></Route>
            <Route path="/slideproduct/8" element={<Slideproduct8/>}></Route>
            <Route path="/subscription" element={<Sub/>}></Route>
            <Route path="/fentyproduct/" element={<Fentylist/>}></Route>
            <Route path="/products/SKINCARE" element={<Fentylist/>}></Route>
            <Route path="/products/ACTIVEWEAR" element={<ProductList4/>}></Route>
            <Route path="/products/ESSENTIALS" element={<ProductList5/>}></Route>
            <Route path="/fentyproducts/1" element={<Fentypro1/>}></Route>
            <Route path="/fentyproducts/2" element={<Fentypro2/>}></Route>
            <Route path="/fentyproducts/3" element={<Fentypro3/>}></Route>
            <Route path="/fentyproducts/4" element={<Fentypro4/>}></Route>
            <Route path="/fentyproducts/5" element={<Fentypro5/>}></Route>
            <Route path="/fentyproducts/6" element={<Fentypro6/>}></Route>
            <Route path="/fentyproducts/7" element={<Fentypro7/>}></Route>
            <Route path="/fentyproducts/8" element={<Fentypro8/>}></Route>
            <Route path="/slideproduct2/1" element={<Slideproducts1/>}></Route>
            <Route path="/slideproduct2/2" element={<Slideproducts2/>}></Route>
            <Route path="/slideproduct2/3" element={<Slideproducts3/>}></Route>
            <Route path="/slideproduct2/4" element={<Slideproducts4/>}></Route>
            <Route path="/slideproduct2/5" element={<Productb5/>}></Route>
            <Route path="/slideproduct2/6" element={<Productb6/>}></Route>
            <Route path="/slideproduct2/7" element={<Productb7/>}></Route>
            <Route path="/slideproduct2/8" element={<Productb8/>}></Route>
            <Route path="/sliderproduct/1" element={<Slideproduct5/>}></Route>
            <Route path="/sliderproduct/2" element={<Slideproduct6/>}></Route>
            <Route path="/sliderproduct/3" element={<Slideproduct7/>}></Route>
            <Route path="/sliderproduct/4" element={<Slideproduct8/>}></Route>
            <Route path="/sliderproduct/5" element={<Fentypro5/>}></Route>
            <Route path="/sliderproduct/6" element={<Fentypro6/>}></Route>
            <Route path="/sliderproduct/7" element={<Fentypro7/>}></Route>
            <Route path="/sliderproduct/8" element={<Fentypro8/>}></Route>
            <Route path="/activewear/1" element={<Slideproducts1/>}></Route>
            <Route path="/activewear/2" element={<Slideproducts2/>}></Route>
            <Route path="/activewear/3" element={<Slideproducts3/>}></Route>
            <Route path="/activewear/4" element={<Slideproducts4/>}></Route>
            <Route path="/activewear/5" element={<Activepro5/>}></Route>
            <Route path="/activewear/6" element={<Activepro6/>}></Route>
            <Route path="/activewear/7" element={<Activepro7/>}></Route>
            <Route path="/activewear/8" element={<Activepro8/>}></Route>
            <Route path="/esse/1" element={<Finalpro1/>}></Route>
            <Route path="/esse/2" element={<Productb6/>}></Route>
            <Route path="/esse/3" element={<Finalpro3/>}></Route>
            <Route path="/esse/4" element={<Activepro6/>}></Route>
            <Route path="/esse/5" element={<Finalpro5/>}></Route>
            <Route path="/esse/6" element={<Finalpro7/>}></Route>
            <Route path="/esse/7" element={<Finalpro6/>}></Route>
            <Route path="/esse/8" element={<Finalpro8/>}></Route>
            </Routes>
            </BrowserRouter>
            
  );
}

export default App;
