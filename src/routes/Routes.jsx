import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import Home from "../pages/Home";
import Product from './../pages/Product';
import PictaLife from './../pages/PictaLife';
import Team from './../pages/Team';
import Tech from './../pages/Tech';
import PartnerShips from './../components/PartnerShips';
import RejoinsNous from './../pages/RejoinsNous';
import Partnerships from './../pages/Partnerships';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },

            {
                path: '/product',
                element: <Product />
            },

            {
                path: '/pictalife',
                element: <PictaLife />
            },

            {
                path: '/team',
                element: <Team />
            },

            {
                path: '/tech',
                element: <Tech />
            },

            {
                path: '/partnerships',
                element: <Partnerships />
            },

            {
                path: '/rejoinsnous',
                element: <RejoinsNous />
            },
        ]
    }
])