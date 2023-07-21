import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home, Compare, Gallery, Rank, NotFound } from 'pages';
import { GlobalStyles, theme } from 'styles';
import Layout from 'layouts/Layout';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/rank" element={<Rank />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
