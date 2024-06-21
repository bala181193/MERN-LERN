import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UseReducerHook from './reactHookes/useReducer';
import UseContextExample from './reactHookes/useContext/headmaster';
import UseCallbackHook from './reactHookes/useCallbackHook';
import UseCallbackMethod2 from './reactHookes/useCallback/method2/main'
import UseMemoHook from './reactHookes/useMemo';
import UseRefHook from './reactHookes/useRef/useRefHook';
import HocMethod1 from './reactHookes/Hoc/method1/main';
import HocMethod2 from './reactHookes/Hoc/method2/main';
import LifeCycle from './componentLifeCyle/lifeCycle';
import UseEffectHook from './reactHookes/useEffectHook';

//import javascript
import ArrayMethod from './javascript/array'
import CallBackHell from './javascript/callbackhell/callbackhell';
import Regex from './javascript/regex/regex';
//
import Register from './user/register';
import UserDetails from './user/userDetails'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<UseReducerHook />}></Route>
        <Route path="/context" exact element={<UseContextExample />}></Route>
        <Route path="/useMemo" exact element={<UseMemoHook />}></Route>
        <Route path="/useCallback" exact element={<UseCallbackHook />}></Route>
        <Route path="/useCallbackMethod2" exact element={<UseCallbackMethod2 />}></Route>
        <Route path="/useEffectHook" exact element={< UseEffectHook />}></Route>
        <Route path="/useRefHook" exact element={< UseRefHook />}></Route>

        <Route path="/lifeCycle" exact element={<LifeCycle />}></Route>

        <Route path="/hocMethod1" exact element={<HocMethod1 />}></Route>
        <Route path="/hocMethod2" exact element={<HocMethod2 />}></Route>

        {/* javascript methods */}
        <Route path="/arrayMethod" exact element={< ArrayMethod />}></Route>
        {/* <Route path="/callBackHell" exact element={< CallBackHell />}></Route> */}
        <Route path="/regex" exact element={< Regex />}></Route>


        {/* User  */}
        <Route path="/register" exact element={< Register />}></Route>
        <Route path="/userDetails/:userId" exact element={< UserDetails />}></Route>

      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
