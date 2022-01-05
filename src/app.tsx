import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./list";
import { DetailPage } from "./member-detail";
import { ListOfCharacters } from "./list-of-characters";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list/:page" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/listofcharacters" element={<ListOfCharacters />} />
      </Routes>
    </Router>
  );
};
