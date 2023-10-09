import React from 'react'
import "./Home.css"
import Products from './products.js';
function Home() {
  return (
    <div class="Home_container">

    <img class="Home_image" srcSet='https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_HERO_NTA_Day-1_2X_EN._CB575872412_.jpg'
       alt='loding...'  />
        



          <div class="Home_row">
          <Products/>
             <Products/>
           {/*produts */}
         {/*produts */}
          </div>

          <div class="Home_row">
          <Products/>
          <Products/>
          <Products/>

           {/*produts */}
         {/*produts */}
         {/*produts */}

          </div>

          <div class="Home_row">

          <Products/>
           {/*produts */}
         
          </div>
         









    </div>

  );
}

export default Home;