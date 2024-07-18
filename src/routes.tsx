// Development
import { createBrowserRouter } from 'react-router-dom'

// Pages
import { Home } from './pages/Home'

// Page routes created
export const router = createBrowserRouter([
    {
        element: <Home />,
        path: '/'
    },
]);
