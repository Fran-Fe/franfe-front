import { Route, Routes } from 'react-router-dom';
import { Home, Compare, Gallery, Rank } from 'pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/rank" element={<Rank />} />
    </Routes>
  );
};

export default App;
