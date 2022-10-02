import Form from './pages/form/form.js'
import Signin from './pages/login/signup.js';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Form/>}></Route>
          <Route path="/signin" exact element={<Signin></Signin>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
