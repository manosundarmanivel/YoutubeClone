
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/Store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Watch from './components/Watch';

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
      }

    ]
    
  }
])

function App() {
  return (
    <div > 
      <Provider store={store}>
      <Head/>
      <RouterProvider router={AppRouter} />
      </Provider>
    </div>
  );
}

export default App;
