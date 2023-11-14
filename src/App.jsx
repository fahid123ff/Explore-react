
import './App.css'
import Counter from './counter';
import Friends from './friend';
import  Team from './Team';
import Users from './User';

function App() {
  function handleClick(){
    alert('Button Click');
  };
   const handleClick2 = () =>{
    alert('Click 2.')
   };
   const clickFour = (num) =>{
    alert(num + 5);
   };

  return (
    <>
      
      <h1>Vite + React</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me.</button>
      <button onClick={handleClick2}>Click 2.</button>
      <button onClick={() =>{alert('Third Click.')}}>Third.</button>
      {/* this is hard. */}
      <button onClick={() => clickFour(4)}>Four.</button>
    </>
  )
}

export default App
