import { Routes, Route} from 'react-router-dom';

import Home from '../src/routes/home/home.compnonent';
import Navigation from '../src/routes/navigation/navigation.component';
import Authentication from '../src/routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';




const App = ()=> {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
