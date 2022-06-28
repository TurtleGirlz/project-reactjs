import "./css/swap.css";

function swap() {
  return (
    <div className="swap">
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
                <img
                  className="vector"
                  src={require("./images/Vector.png")}
                  alt=""
                />
                <img
                  className="bell"
                  src={require("./images/bell.png")}
                  alt=""
                />
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
                <h1>Swap my Crypto</h1>
                <h6>Coming Soon</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
