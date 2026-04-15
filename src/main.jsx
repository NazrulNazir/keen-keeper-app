import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home.jsx';
import Timeline from './pages/Timeline.jsx';
import Stats from './pages/Stats.jsx';
import FriendDetails from './components/FriendDetails/FriendDetails.jsx';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        loader: () => fetch('friends.json'),
        Component: Home
      },
      {
        path: `/:friendId`,
        loader: async ({ params }) => {
          const res = await fetch(`friends.json`);
          const data = await res.json();
          return data.find(friend => friend.id === Number(params.friendId))
        },
        Component: FriendDetails
      },
      {
        path: '/timeline',
        Component: Timeline
      },
      {
        path: '/stats',
        Component: Stats
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
