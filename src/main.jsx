import ReactDOM from "react-dom/client";
// routing behavior
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//styling
import "bootstrap/dist/css/bootstrap.min.css";
// Importing pages
import App from "./App.jsx";
import AboutPage from "./pages/aboutPage.jsx";
import ProjectPage from "./pages/projectPage.jsx";
import ContactPage from "./pages/contactPage.jsx";
import ResumePage from "./pages/resumePage.jsx";
import ErrorPage from "./pages/errorPage";

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: "projects",
        element: <ProjectPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "resume",
        element: <ResumePage />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

