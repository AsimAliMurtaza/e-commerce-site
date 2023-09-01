import { Routes, Route} from 'react-router-dom';

import Home from '../src/routes/home/home.compnonent';
import Navigation from '../src/routes/navigation/navigation.component';
import Authentication from '../src/routes/authentication/authentication.component';

const Shop = ()=>{
  return(
    <div>
      <h1>I am shop</h1>
    </div>
  );
}


const App = ()=> {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
