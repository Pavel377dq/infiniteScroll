import './App.css';
import List from './components/List/List';
import { Route,Routes, Link } from "react-router-dom";
import { PagePost } from './components/PagePost/PagePost';


function App() {

  
  return (<>
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='/:id' element={<PagePost/>}/>
      </Routes>
      </>
  );
}

export default App;
