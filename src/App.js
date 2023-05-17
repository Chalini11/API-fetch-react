import './App.css';
import { Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import NewAbout from './components/About/NewAbout';
import Data from './components/Data/Data';
import {QueryClientProvider} from 'react-query';
import { QueryClient } from 'react-query';

function App() {
  const clientp = new QueryClient();
  return (
    <QueryClientProvider client={clientp}>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Data" element={<Data/>}></Route>
        <Route path="/NewAbout" element={<NewAbout/>}></Route>
      </Routes>
    </div>
    </QueryClientProvider>
  );
}

export default App;
