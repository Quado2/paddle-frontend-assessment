


import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { lightTheme } from "./theme";
import { Layout } from "./common/layout";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={  <App />} />
           
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>);
}

export default App;
