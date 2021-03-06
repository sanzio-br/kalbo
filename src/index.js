import React , {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// all custom css 
import './css/featured.css'
import './css/home.css'
import './css/main.css'
import './css/style.css'
import './css/contacts.css'
import './css/about.css'
import './css/bookings.css'
import './css/navbar.css'
import './css/blogs.css'
import './css/cards.css'
import './css/form.css'
import './css/foot.css'
import './css/books.css'
import './css/package.css'
import './css/gallery.css'
import './css/loader.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    <Provider store={store}>
    <App />
    </Provider>
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
