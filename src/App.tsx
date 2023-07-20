import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { Home, Compare, Gallery, Rank } from 'pages';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rank" element={<Rank />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
