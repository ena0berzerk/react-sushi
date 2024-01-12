import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import loadable from "@loadable/component";

import { store } from "./redux/store";

import App from "./App";
import Home from "./pages/Home";

const Cart = loadable(() => import("./pages/Cart"));
const ErrorPage = loadable(() => import("./ErrorPage"));
const NotFound = loadable(() => import("./pages/NotFound"));
const FullPizza = loadable(() => import("./components/FullPizza"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <Suspense fallback={<div>Идёт загрузка...</div>}>
        <ErrorPage />
      </Suspense>
    ),
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
