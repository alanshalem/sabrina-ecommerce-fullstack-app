import { Home, Error, ProductPage } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from "./context";

interface AppInterface {}

// Reemplazado por react-query: axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '/';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/product/:slug',
    element: <ProductPage />
  },
  {
    path: '/Medium',
    element: <img />
  },
  {
    path: '/Hard',
    element: <img />
  }
]);

const App: React.FC<AppInterface> = () => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </HelmetProvider>
    </ThemeProvider>
  )
}

export default App