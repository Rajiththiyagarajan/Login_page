import './App.css';

function App(props) {

    function add(){
      var x=document.getElementById('one').value;
      var y=document.getElementById('two').value;

      if(x=="rajith" && y=="123456"){
        alert("login sucess")

       }
       else{
        alert("failed")
       }
    }
    
  return (
    <div className="App">
      <form>
        <h1>Login{props.data}</h1>
        <label>Username</label>
        < input type="text" placeholder="Enter username"  id='one'/>

        <label>Password</label>
        <input type="password" placeholder="Enter password" id='two'/>

        <button onClick={()=>add()}>Submit</button>
      </form>
    </div>
  );
}

export default App;
