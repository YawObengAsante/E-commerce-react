import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// import authentication third party
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

// Layouts
import RootLayout from "./layouts/RootLayout";

// Routes
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import ProtectedRoute from "./pages/cart/ProtectedRoute";
import FakestoreError from "./FakestoreError";
import WhatsNew from "./pages/shop/WhatsNew";

// Context Providers
import ShopContextProvider from "./context/ShopContext";
import CartContextProvider from "./context/CartContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<RootLayout />}
        errorElement={<FakestoreError />}
      >
        <Route index element={<Shop />} />
        <Route path="whatsnew" element={<WhatsNew />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="cart" element={<Cart />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <KindeProvider
      clientId="87eb58098ab447d5b83a39b61cd94a62"
      domain="https://yawobeng.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >
      <CartContextProvider>
        <ShopContextProvider>
          <RouterProvider router={router} />;
        </ShopContextProvider>
      </CartContextProvider>
    </KindeProvider>
  );
}

export default App;
