import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { LocationProvider } from 'contexts';
import { Home, Compare, Gallery, Ranking, List, NotFound } from 'pages';
import { GlobalStyles, theme } from 'styles';
import Layout from 'layouts/Layout';

const App = () => {
  return (
    <LocationProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/ranking" element={<Ranking />} />
              <Route path="/list" element={<List />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </LocationProvider>
  );
};

export default App;
