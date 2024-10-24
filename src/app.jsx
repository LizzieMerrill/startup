import React from 'react';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Advanced_Research } from './advanced_research/advanced_research';
import { Beginners_Faq } from './beginners_faq/beginners_faq';
import { Browse_Products } from './browse_products/browse_products';
import { Collection } from './collection/collection';
import { Community_Page } from './community_page/community_page';
import { Contact } from './contact/contact';
import { Create_Account } from './create_account/create_account';
import { Home_Page } from './home_page/home_page';
import { Login_Page } from './login_page/login_page';
import { Post_View } from './post_view/post_view';
import { Product_Page } from './product_page/product_page';
import { Sell } from './sell/sell';
import { Simulator } from './simulator/simulator';
import { Terms_And_Privacy } from './terms_and_privacy/terms_and_privacy';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <div></div>//sub elements in here
//   </BrowserRouter>
// );


export default function App() {
    return (
        <BrowserRouter><div>
        <header>
          <center><h1 className="logo">Aquari<sup>&copy;</sup></h1></center>
          <br/>
          <div className="header-navbar">
              <NavLink to="./home_page/home_page" className="active">Home</NavLink>
              <NavLink to="./collection/collection">My Collection</NavLink>
              <NavLink to="./beginners_faq/beginners_faq">Tutorial</NavLink>
              <NavLink to="./advanced_research/advanced_research">Research</NavLink>
              <NavLink to="./simulator/simulator">Simulator</NavLink>
              <NavLink to="./sell/sell">Sell</NavLink>
              <NavLink to="./community_page/community_page">Community</NavLink>
              <NavLink to="./post_view/post_view">Post</NavLink>
              <NavLink to="logout()">Sign Out</NavLink>
          </div>
      </header>
    
      <Routes>
          <Route path='/' element={<Login_Page />} exact />
          <Route path='/advanced_research' element={<Advanced_Research />} />
          <Route path='/beginners_faq' element={<Beginners_Faq />} />
          <Route path='/browse_products.html' element={<Browse_Products />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/community_page' element={<Community_Page />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/create_account' element={<Create_Account />} />
          <Route path='/home_page' element={<Home_Page />} />
          <Route path='/post_view' element={<Post_View />} />
          <Route path='/product_page' element={<Product_Page />} />
          <Route path='/sell' element={<Sell />} />
          <Route path='/simulator' element={<Simulator />} />
          <Route path='/terms_and_privacy' element={<Terms_And_Privacy />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    
          <footer>
          <div className="navbar">
              <NavLink to="contact">Contact Us</NavLink>
              <NavLink to="https://github.com/LizzieMerrill/startup">GitHub</NavLink>
              <NavLink to="terms_and_privacy">Terms and Conditions</NavLink>
          </div>
      </footer>
          </div></BrowserRouter>
    );
  }
  function NotFound() {
    return <main>404: Return to sender. Address unknown.</main>;
  }