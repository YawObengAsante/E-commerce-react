import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout";

// Routes
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import FakestoreError from "./FakestoreError";

// Context Providers
import ShopContextProvider from "./context/ShopContext";
import CartContextProvider from "./context/CartContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Shop />} errorElement={<FakestoreError />} />
      </Route>
      <Route path="cart" element={<Cart />} />
    </>
  )
);

function App() {
  return (
    <CartContextProvider>
      <ShopContextProvider>
        <RouterProvider router={router} />;
      </ShopContextProvider>
    </CartContextProvider>
  );
}

export default App;
