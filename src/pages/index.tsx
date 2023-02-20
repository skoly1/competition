import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// import CharactersPage from "./characters";
import { Layout, Navbar } from "../components";
import ComicsPage from "./comics";
import CreatorsPage from "./creators";
import EventsPage from "./events";
import HomePage from "./home";
import SeriesPage from "./series";
import StoriesPage from "./stories";
import ErrorPage from "./error";
const CharactersPage = lazy(() => import("./characters"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "/characters", element: <CharactersPage /> },
          { path: "/comics", element: <ComicsPage /> },
          { path: "/creators", element: <CreatorsPage /> },
          { path: "/events", element: <EventsPage /> },
          { path: "/series", element: <SeriesPage /> },
          { path: "/stories", element: <StoriesPage /> },
          { path: "/characters", element: <CharactersPage /> },
        ],
      },
    ],
  },
]);

//******************************** */
// return <RouterProvider router={router} />;
// return (
//   <Routes>
//     <Route path="/" element={<HomePage />}>
//       <Route index element={<HomePage />} />
//       <Route path="characters" element={<CharactersPage />} />
//       <Route path="comics" element={<ComicsPage />} />
//       <Route path="creators" element={<CreatorsPage />} />
//       <Route path="events" element={<EventsPage />} />
//       <Route path="series" element={<SeriesPage />} />
//       <Route path="stories" element={<StoriesPage />} />
//       <Route path="*" element={<CharactersPage />} />
//     </Route>
//   </Routes>
// );
//
// };

// export default Main;
