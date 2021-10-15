import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppContext from './utils/AppContext';

ReactDOM.render(
  <AppContext >
    <App />
  </AppContext>,
  document.getElementById('root')
);