import './App.css';
import LifeCycleClassComponent from './components/LifeCycleClassComponent';
import { headerComponent as HeaderComponent } from './components/Foundation';
import { HookUseContext, HookUseCallback, HookUseEffect, HookUseMemo, HookUseRef, HookUseState, HookUseReducer, HookUseImperativeHandle, useFetchAPI } from './components/AllHooks';
import HookUseLayoutEffect from './components/AllHooks/HookUseLayoutEffect';
import UsersList from './components/HOC/UsersList';
import TodosList from './components/HOC/TodosList';
import Start from './components/LazyLoading/Start';
import Page from './components/Modal/Page';
import CountryList from './components/IntersectionObserver/CountryList';
import WindowResizer from './components/AllHooks/WindowResizer';
import CounterRender from './components/AllHooks/useCounter';

function App() {
  // const { data, error, loading } = useFetchAPI("https://jsonplaceholder.typicode.com/users");

  // console.log('JSON data', data);

  // if (error) return <p>Error!</p>
  // if (loading) return <p>Loading...</p>

  return (
    <div className="App">
      <header className="App-header">
        {/* <LifeCycleClassComponent defaultName='Lorem Ipsum' /> */}
        {/* <HeaderComponent /> */}
        {/* <HookUseState /> */}
        {/* <HookUseEffect /> */}
        {/* <HookUseMemo /> */}
        {/* <HookUseCallback /> */}
        {/* <HookUseRef /> */}
        {/* <HookUseContext /> */}
        {/* <HookUseReducer /> */}
        {/* <HookUseLayoutEffect /> */}
        {/* <HookUseImperativeHandle /> */}
        {/* <UsersList />
        <TodosList /> */}
        {/* <WindowResizer /> */}
        {/* <Start /> */}
        {/* </header> */}
        {/* {FOR MODAL} */}
        {/* <Page /> */}
        {/* <CountryList /> */}
        <CounterRender />
      </header >
    </div>
  );
}

export default App;
