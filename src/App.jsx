import './css/landingpage.css'

function App() {
  return (
    <div className="App">
      <div className="container min-vh-100">
        <div className="row min-vh-100 justify-content-center align-items-center">
          <div className="col-md-6">
            <img src={require("./images/big-diamond.png")} alt="" />
            <div>
              <h2>Cryft Cards</h2>
            </div>
            <div>
              <h3>Welcome to the Moon</h3>
            </div>
            <div>
              <button type="button">Enter Dashboard</button>
            </div>
          </div>
        </div>

        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <img src={require("./images/smalldiamond.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
