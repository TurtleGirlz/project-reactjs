import "./css/dashboard";

function dashboard() {
  return (
    <div className="dashboard">
      <div className="container-fluid">
        <div className="row justify-content-start align-items-center">
          <div className="col-md-3">
            <div>
              <img src={require("./images/smalldiamond.png")} alt="" />
            </div>

            <ul className="top-header">
              <li>
                <a href="">Redeem Card</a>
              </li>
              <li>
                <a href="">Crypto Wallet</a>
              </li>
              <li>
                <a href="">NFT Collection</a>
              </li>
              <li>
                <a href="">Swap Crypto</a>
              </li>
            </ul>
            <ul className="middle-header">
              <li>
                <a href="">Cryft Shop</a>
              </li>
              <li>
                <a href="">Cryft Zone</a>
              </li>
              <li>
                <a href="">Education</a>
              </li>
            </ul>
            <ul className="exitdash">
              <li>
                <a href="">Exit Dashboard</a>
              </li>
            </ul>
          </div>
          <div className="col-md-9">
            <div className="header">
              <h3>Gas Tank</h3>
              <div className="bg-rounded">
                <img className="vector" src="./images/Vector.png" alt="" />
                <img className="bell" src="./images/bell.png" alt="" />
              </div>
              <div className="bg-block"></div>
              <div className="name-addr">
                <h6>Brokeln Simons</h6>
              </div>
              <div className="hrz-separator"></div>
            </div>
            <div className="hrz-separator"></div>
            <div className="content">
              <div className="main-heading">
                <h1>Redeem Cryft Cards</h1>
                <div className="input-text">
                  <input type="text" placeholder="Enter Serial Number" />
                  <button type="button">Redeem</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <h1>Redeemed Cryft Cards</h1>
              <h4>No Cryft Card Redeemed</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
