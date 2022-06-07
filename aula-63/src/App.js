import './App.css';
import UseStateClass from './componets/UseStateClass';
import UseStateFunction from './componets/UseStateFunction';
import UseEffectClass from './componets/UseEffectClass';
import UseEffectFunction from './componets/UseEffectFunction';
import UseContextFunction  from './componets/UseContextFunction';
import UseRefFunction from './componets/UseRefFunction';
function App() {
  return (
    <div className="App">
      <UseStateClass/>
      <UseStateFunction/>
      <UseEffectClass/>
      <UseEffectFunction/>
      <UseContextFunction/>
      <UseRefFunction/>
    
    </div>
  );
}

export default App;
