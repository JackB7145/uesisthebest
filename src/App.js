import Homepage from "./Components/homepage";
import {Routes, Route} from 'react-router-dom';
import Items from "./Components/items"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/items" element={<Items />}></Route>
      <Route></Route>
    </Routes>
  );
}

export default App;