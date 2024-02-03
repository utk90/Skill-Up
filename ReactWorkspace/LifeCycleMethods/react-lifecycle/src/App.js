import './App.css';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClassComponent defaultName='Lorem Ipsum' />
      </header>
    </div>
  );
}

export default App;
