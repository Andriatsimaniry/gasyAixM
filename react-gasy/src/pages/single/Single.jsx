import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";
// import List from "../../components/table/Table";
// import Image from "./img/niry.png";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Editer</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src= '/niry.png'
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Randriambololontsoa Andriatsimaniry</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">niryomega@free.fr</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Téléphone:</span>
                  <span className="itemValue">06.69.68.45.37</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adresse:</span>
                  <span className="itemValue">
                    2 Parc de Beauregard
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Code postale:</span>
                  <span className="itemValue">13100</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Ville:</span>
                  <span className="itemValue">Aix en Provence</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="right">
            <Chart aspect={3 / 1} title="Dépenses des utilisateurs ( 6 derniers mois)" />
          </div> */}
        </div>
        {/* <div className="bottom">
        <h1 className="title">Dernières transactions</h1>
          <List/>
        </div> */}
      </div>
    </div>
  );
};

export default Single;