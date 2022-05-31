


import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { lightTheme } from "./theme";
import { Layout } from "./common/layout";
import {ComingSoon, AboutUs, Blog} from './pages'

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Layout>
          <Routes>
           
            <Route path="/" element={  <ComingSoon />} />
            <Route path="/about-us" element={  <AboutUs />} />
            <Route path="/blog" element={  <Blog />} />
           
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>);
}

export default App;
