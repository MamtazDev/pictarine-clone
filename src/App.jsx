import "./App.css";
import { RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { router } from './routes/Routes';
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
