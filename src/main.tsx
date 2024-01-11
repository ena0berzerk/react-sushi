import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store.ts";

import App from "./App";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ErrorPage from "./ErrorPage";
import NotFound from "./pages/NotFound";
import FullPizza from "./components/FullPizza";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/pizza/:id",
        element: <FullPizza />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
