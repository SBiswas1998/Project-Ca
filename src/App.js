import React,{lazy,Suspense} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import Loading from './components/Loader';
import { Analytics } from '@vercel/analytics/react'; // Import Analytics component
import './App.css';


const AppRouter = lazy(()=>import('./routes'))



function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
       {/* Wrap your entire application with Analytics */}
        <Suspense fallback={<div className='text-center mt-3'><Loading/></div>}>
          <AppRouter/>
        </Suspense>
      <Analytics/>
    </BrowserRouter>
  </Provider>
  );
}

export default App;

// mongodb+srv://bisassanchaita1998:ktZVUBntBcs2GMbX@cluster0.1uca38g.mongodb.net/