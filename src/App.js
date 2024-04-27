import React,{useState, useEffect,lazy,Suspense} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import Loading from './components/Loader';
import { Analytics } from '@vercel/analytics/react'; // Import Analytics component
import './App.css';


const AppRouter = lazy(()=>import('./routes'))



function App() {

  const [isLoading, setIsLoading] = useState(true);
  
   useEffect(() => {
    // Set isLoading to false after 5 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Provider store={store}>
    <BrowserRouter>
       {/* Wrap your entire application with Analytics */}
        {/* <Suspense fallback={
        <div className='text-center mt-3'>
          <Loading/>

          </div>}>
          <AppRouter/>
        </Suspense> */}
        <Suspense fallback={<Loading />}>
        {isLoading ? <Loading /> : <AppRouter />}
      </Suspense>
      {/* <AppRouter /> */}
      <Analytics/>
    </BrowserRouter>
  </Provider>
  );
}

export default App;

// mongodb+srv://bisassanchaita1998:ktZVUBntBcs2GMbX@cluster0.1uca38g.mongodb.net/