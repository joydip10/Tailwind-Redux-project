import './App.css';
import Body from './Components/Body/Body';
import HeaderContainer from './Container/HeaderContainer';
function App() {
  return (
    <div className='h-screen container mx-auto my-5'>
      <HeaderContainer/>
      <Body/>
    </div>
  );
}

export default App;
