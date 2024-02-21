import { useState, useEffect } from 'react';

function Hello() {
  const hiFunc = () => {
    console.log('CREATE');
    return byeFunf;
  };
  const byeFunf = () => {
    console.log('DESTROY');
  };
  useEffect(hiFunc, []);
  return <h1>HELLO</h1>;
}

function App() {
  const [show, setShow] = useState(false);
  const onClick = () => setShow((prev) => !prev);
  return (
    <div>
      {show ? <Hello /> : null}
      <button onClick={onClick}>
        {show ? 'HIDE' : 'SHOW'}
      </button>
    </div>
  );
}
export default App;
