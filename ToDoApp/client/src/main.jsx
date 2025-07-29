import { StrictMode } from 'react'; // Import StrictMode from React for identifying potential problems in an application.
                                    // It activates additional checks and warnings for its descendants.

import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'. This is the modern way to
                                                // create a root for your React application in React 18+ for client-side rendering.

import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter from 'react-router-dom'. This component
                                                    // uses the HTML5 history API (pushState, replaceState and popstate event)
                                                    // to keep your UI in sync with the URL. It's essential for
                                                    // single-page applications that need client-side routing.

import App from './App.jsx'; // Import the main App component of your React application.
                               // This is typically where your application's layout and main logic reside.

// Get the DOM element where your React application will be mounted.
// In a typical Create React App setup, 'root' is the ID of a div element in public/index.html.
createRoot(document.getElementById('root')).render(
  // The .render() method is used to render a React element into the DOM.

  // BrowserRouter is wrapped around the entire application. This provides routing capabilities
  // to all components within the <App /> component. It allows you to define different routes
  // (e.g., /home, /about, /users) and render specific components when those routes are active.
  <BrowserRouter>
    {/* StrictMode is a development-only tool. It does not render any visible UI.
        It helps detect potential issues in your application during development by
        performing extra checks and logging warnings to the console.
        For example, it warns about legacy lifecycle methods, deprecated string ref usage, etc. */}
    <StrictMode>
      {/* The main App component is rendered inside BrowserRouter and StrictMode.
          This means that all components within App.jsx will have access to React Router's
          features (like <Link>, <Route>, useNavigate, useParams, etc.) and
          will benefit from StrictMode's development-time checks. */}
      <App />
    </StrictMode>
  </BrowserRouter>
);