import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Message from './export_learn.jsx';
import Garage from './props.jsx';
import Football from './events.jsx';
import List from './list.jsx';
import Keys from './keys.jsx';
import Favclr from './use_state.jsx';
import Count from './usestate_task.jsx';
import USEEFFECT from './use_effect.jsx';
import Usecontent from './use_context.jsx';
import Useref from './use_ref.jsx';
import Usereducer from './use_reducer.jsx';
import Usecallback from './use_callback.jsx';
import Todo from './Todo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Message />
    <Garage/>
    <Football/>
    <List/>
    <Keys/>
    <Favclr/>
    <Count/>
    <USEEFFECT/>
    <Usecontent/>
    <Useref/> 
    <Usereducer/>*/}
    <Usecallback/>
    <Todo/>
  </StrictMode>,
);
