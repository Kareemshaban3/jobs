/** @format */

import Discover from "./components/Discover";
import Explore from "./routes/Explore";
import About from "./routes/About";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import Faqs from "./routes/Faqs";
import Privacy from "./routes/Privacy";
import Terms from "./components/Terms";
import Individual from "./routes/Individual";
import Resumes from "./routes/Resumes";
import Payment from "./routes/Payment";
import Favorites from "./routes/Favorites";
import Advertisements from "./routes/Advertisements";

export const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/discover",
    element: <Discover />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/faqs",
    element: <Faqs />,
  },
  {
    path: "/Privacy",
    element: <Privacy />,
  },
  {
    path: "terms",
    element: <Terms />,
  },
  {
    path: "individual-edit",
    element: <Individual />,
  },
  {
    path: "my-resumes",
    element: <Resumes />,
  },
  {
    path: "payment-of-release",
    element: <Payment />,
  },
  {
    path: "favorites",
    element: <Favorites />,
  },
  {
    path: "my-advertisements",
    element: <Advertisements />,
  },
];
