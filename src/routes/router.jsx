import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../Layout/MainLayout";
import Form from "../pages/Form";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:[
            {
                path: "", element: <App/>

            },
            {
                path: "form", element: <Form/>
            }
        ]

    }
])

export default router;