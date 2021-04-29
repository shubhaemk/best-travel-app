import { useState } from "react";

import HeaderBarComponent from "components/HeaderBarComponent";
import NavBarComponent from "components/NavBarComponent";
import HomeScreen from "screens/HomeScreen";

const MainScreen = (props) => {
  const [selectedView, setSelectedView] = useState("card");

  return (
    <div className="main-screen">
      <div className="main-screen-container">
        <section className="main-screen-navbar">
          <NavBarComponent />
        </section>
        <section className="main-screen-body">
          <section className="main-screen-body-header">
            <HeaderBarComponent
              selectedView={selectedView}
              setSelectedView={setSelectedView}
            />
          </section>
          <main className="main-screen-body-feed">
            <HomeScreen selectedView={selectedView} />
          </main>
        </section>
      </div>
    </div>
  );
};

export default MainScreen;
