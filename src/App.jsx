
import { Provider } from 'react-redux';
import './App.css'
import { store } from './stores/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Routers from './Routers';


function App() {

  let publicRouter = Routers();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {publicRouter?.map((item, index) => (
            <Route key={index} path={item.path} element={item.component} />
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App
