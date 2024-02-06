import './App.css';
import LifeCycleClassComponent from './components/LifeCycleClassComponent';
import { headerComponent as HeaderComponent } from './components/Foundation';
import { HookUseContext, HookUseCallback, HookUseEffect, HookUseMemo, HookUseRef, HookUseState } from './components/AllHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <LifeCycleClassComponent defaultName='Lorem Ipsum' /> */}
        {/* <HeaderComponent /> */}
        {/* <HookUseState /> */}
        {/* <HookUseEffect /> */}
        {/* <HookUseMemo /> */}
        {/* <HookUseCallback /> */}
        <HookUseRef />
        {/* <HookUseContext /> */}
      </header>
    </div>
  );
}

export default App;
