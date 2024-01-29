import { createBrowserRouter } from "react-router-dom";

import App from "App";
import Main from "pages/Main";
import MotionValues from "pages/MotionValues";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />
      },
      {
        path: 'motionvalues',
        element: <MotionValues />
      }
    ]
  }
]);

export default router;