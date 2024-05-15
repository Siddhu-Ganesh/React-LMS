
import './App.css';
import Signin from './Signinpage';
import Register from './Registerpage';
import MainPage from './Mainpage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>}/>
          <Route path='/Login' element={<Register/>}/>
          <Route path='/Mainpage' element={<MainPage/>}/>

          

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
