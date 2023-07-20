import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home, Compare, Gallery, Rank } from 'pages';
import { GlobalStyles, theme } from 'styles';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
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
