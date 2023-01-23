import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import App from './App';
import User from "./pages/user";
import Create from "./pages/user/create";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    }
    , {
        path: '/users',
        element: <User/>,
    },
    {
        path: '/users/create',
        element: <Create/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
