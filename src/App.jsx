import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import PageNotFound from "@/pages/PageNotFound";
import ErrorFallback from "./ui/ErrorFallback";
import { SidebarProvider } from "@/contexts/SidebarContext";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Order from "./pages/Order";
import OrderDetail from "./pages/OrderDetail";
import Product from "./pages/Product";
import User from "./pages/User";
import ProductCategory from "./pages/ProductCategory";
import ProductDetail from "./pages/ProductDetail";
import CreateProduct from "./pages/CreateProduct";
import UserDetail from "./pages/UserDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorFallback />}>
      <Route path="/login" element={<Login />} />
      <Route element={<AppLayout />} ErrorBoundary={ErrorFallback}>
        <Route path="/app/order" element={<Order />} />
        <Route path="/app/order/:orderId" element={<OrderDetail />} />
        <Route path="/app/product" element={<Product />} />
        <Route path="/app/product/create" element={<CreateProduct />} />
        <Route path="/app/product/:productId" element={<ProductDetail />} />
        <Route path="/app/productcategory" element={<ProductCategory />} />
        <Route path="/app/user" element={<User />} />
        <Route path="/app/user/:userId" element={<UserDetail />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>,
  ),
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <SidebarProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
        <Toaster
          position="top-right"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            className: "max-w-lg py-4 px-6 bg-white text-slate-700 text-base",
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
          }}
        />
      </QueryClientProvider>
    </SidebarProvider>
  );
}

export default App;
