import React from 'react';
import StateHookDemo from './components/StateHookDemo';
import EffectHookDemo from './components/EffectHookDemo';
import ContextHookDemo from './components/ContextHookDemo';
import ReducerHookDemo from './components/ReducerHookDemo';
import RefHookDemo from './components/RefHookDemo';
import CallbackHookDemo from './components/CallbackHookDemo';

function App() {
  return (
    <div>
      <StateHookDemo />
      <EffectHookDemo />
      <ContextHookDemo />
      <ReducerHookDemo />
      <RefHookDemo />
      <CallbackHookDemo />
    </div>
  );
}

export default App;
