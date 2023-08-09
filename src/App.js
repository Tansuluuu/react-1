import React from "react";
import img from './components/assets/img.jpg';
import Stars from './components/customTitle';
const App =()  => {
  return (
      <section className={'cart'}>
         <div>
             <img src={img} className={'bufer'}/>
         </div>
          <div className={'info'}>
              <h3> Always in style! </h3>
              <p>The standard chunk of Lorem ipsum below for those
              interested. The standard chunk of for those interested.</p>
              <Stars/>
          </div>

      </section>
  );
};

export default App