import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import HomePage from "./pages/HomePage/HomePage";
import EpisodePage from "./pages/EpisodePage/EpisodePage";
import CharacterPage from "./pages/CharacterPage/CharacterPage";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Container>
          <Route path="/" component={HomePage} exact />
          <Route path="/episodes/:id" component={EpisodePage} />
          <Route path="/characters/:name" component={CharacterPage} />
        </Container>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
