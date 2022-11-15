import { RouterProvider } from "react-router-dom";
import RootRoutes from "./Routes/RootRoutes";

function App() {
  return <RouterProvider router={RootRoutes} />;
}

export default App;
