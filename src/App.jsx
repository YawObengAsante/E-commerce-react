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
import WhatsNew from "./pages/shop/WhatsNew";

// Error Routes
import FakestoreError from "./FakestoreError";

// Context Providers
import ShopContextProvider from "./context/ShopContext";
import CartContextProvider from "./context/CartContext";
import SidebarContextProvider from "./context/SidebarContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<RootLayout />}
        errorElement={<FakestoreError />}
      >
        <Route index element={<Shop />} errorElement={<FakestoreError />} />
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
      clientId={import.meta.env.VITE_CLIENTID}
      domain={import.meta.env.VITE_DOMAIN}
      redirectUri={import.meta.env.VITE_REDIRECTURI}
      logoutUri={import.meta.env.VITE_LOGOUTURI}
    >
      <CartContextProvider>
        <SidebarContextProvider>
          <ShopContextProvider>
            <RouterProvider router={router} />;
          </ShopContextProvider>
        </SidebarContextProvider>
      </CartContextProvider>
    </KindeProvider>
  );
}

export default App;
