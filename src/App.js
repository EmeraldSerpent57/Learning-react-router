import { Route } from 'react-router-dom';

import Welcome from './components/Welcome';
import Products from './components/Products';

function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;



/* This app should be able to:
* handle different paths for the page
* load different paths on that page 
//our-domain.com/welcome => loads Welcome component
//our-domain.com/products => loads Product compoent
*handle these paths after the domain to then load 
different components on to the screen

*/