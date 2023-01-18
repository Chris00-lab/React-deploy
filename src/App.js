
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App (){
  return (
    <div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"400px", "backgroundColor":"white", "marginTop":"15px"}} >
      <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">Welcome to </h1>
      <h6 className="card text-white bg-primary mb-3"> React App</h6>
     
      <br/>
      <h6 className="card text-dark bg-warning py-1 mb-0" >Copyright 2023, All rights reserved &copy;</h6>
    </div>
  );
}

export default App;