import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import CharactersPage from "./characters";
import ComicsPage from "./comics";
import CreatorsPage from "./creators";
import EventsPage from "./events";
import HomePage from "./home";
import SeriesPage from "./series";
import StoriesPage from "./stories";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<HomePage />} />
        <Route path="characters" element={<CharactersPage />} />
        <Route path="comics" element={<ComicsPage />} />
        <Route path="creators" element={<CreatorsPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="series" element={<SeriesPage />} />
        <Route path="stories" element={<StoriesPage />} />
        <Route path="*" element={<CharactersPage />} />
      </Route>
    </Routes>
  );
};

export default Main;
