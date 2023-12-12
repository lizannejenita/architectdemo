import { Provider } from "react-redux";
import { store } from "./redux/store";
import Dashboard from './components/Dashboard';
//import logo from './logo.svg';
import './assets/customStyle.scss';
//import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
