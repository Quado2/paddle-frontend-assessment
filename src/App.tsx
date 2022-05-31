import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { lightTheme } from "./theme";
import { Layout } from "./common/layout";
import { ComingSoon, AboutUs, Blog } from "./pages";
import { ContactUs } from "./common/components/UI/contact-us";
import { AppContext } from "./context/AppContext";
import { useState } from "react";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;



function App() {

  const [showContactForm, setShowContactForm] = useState(false)

  return (
    <ThemeProvider theme={lightTheme}>
      <AppContext.Provider value={{showContactForm, setShowContactForm}}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<ComingSoon />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </Layout>
        </Router>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
