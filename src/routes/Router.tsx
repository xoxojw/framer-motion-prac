import { createBrowserRouter } from "react-router-dom";

import App from "App";
import Main from "pages/Main";
import MotionValues from "pages/MotionValues";
import AnimatePresencePracPage from "pages/AnimatePresence";

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
      },
      {
        path: 'animatepresence',
        element: <AnimatePresencePracPage />
      },
    ]
  }
]);

export default router;