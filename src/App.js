import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Exchange from './Pages/Exchange';
import Countries from './Pages/Countries';
import NotFound from './Pages/NotFound';
import Main from './Pages/Layout/Main';
import Cats from './Pages/Cats';


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Main><Homepage /></Main>,
      errorElement: <Main><NotFound /></Main>
    },
    {
      path: '/exchange',
      element: <Main><Exchange /></Main>
    },
    {
      path: '/countries',
      element: <Main><Countries /></Main>
    },
    {
      path: '/cats/:id',
      element: <Main><Cats /></Main>
    },
  ]
  )

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
