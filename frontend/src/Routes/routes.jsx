import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../layouts/Mainlayouts";

const Routes = createBrowserRouter([{
    path: "/",
    element:<Mainlayouts></Mainlayouts>
}])

export default Routes;