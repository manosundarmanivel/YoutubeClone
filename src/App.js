
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/Store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Watch from './components/Watch';
import LiveConatiner from './components/LiveConatiner';
import WatchLive from './components/WatchLive';
import Results from './components/Results';
import Shimmer from './components/Shimmer';
import SearchShimmer from './components/SearchShimmer';

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<Watch/>
      },
      {
        path:"live",
        element:<LiveConatiner/>
      },
      {
        path:"watchlive",
        element:<WatchLive/>
      },
      {
        path:"results",
        element:<Results/>
      },
      

    ]
    
  }
])

function App() {
  return (
    <div className='bg-black' > 
      <Provider store={store}>
      <Head/>
      <RouterProvider router={AppRouter} />
      </Provider>
    </div>
  );
}

export default App;
