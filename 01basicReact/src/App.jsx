import Taqu from "./Taqu";
function App() {
  //<> </> fragments
  const userName = "Taqu is the best";
  return (
    <div>
      <h1>{userName}</h1>
      {/* //This gives evaluated exoression it does not allow statements like if and for etc */}
      <Taqu />
    </div>
  );
}

export default App;
