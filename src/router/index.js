import Login from "../page/login"
import Article from "../page/article";
import { createBrowserRouter, createHashRouter } from "react-router-dom";
import LayOut from "../page/layout";
import About from "../page/about";
import Board from "../page/board";
import NotFound from "../page/NotFound"

// const router = createHashRouter([ // used when backend support is not qualified
const router = createBrowserRouter([
    {
        path: '/',
        element: <LayOut />,
        children: [
            {
                index: true, // by default display about content in outlet area when opening layout page 
                element: <About />
            },
            {
                path: '/board',
                element: <Board />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/article/:id/:name',
        element: <Article />
    },
    {
        path: 'article',
        element: <Article />
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router
