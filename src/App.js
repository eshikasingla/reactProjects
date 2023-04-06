import './App.css';
import Header from './component/Header';
import { Tasks } from './component/Tasks';
function App() {
 return (
 <div className='container'>
 <Header title={'Komal'} />
 <Tasks />
 </div>
 );
}
export default App;
