import ToggleViewComponent from "components/ToggleViewComponent/";

import iconService from "services/icons";

const HEADER_TITLE = "Discover great place to visit";

const HeaderBarComponent = (props) => {
  const { selectedView, setSelectedView } = props;

  const LogoSVG = iconService("logo");
  const MenuSVG = iconService("menu");

  return (
    <header className="header">
      <section className="header-action">
        <LogoSVG className="header-action-logo" />
        <MenuSVG className="header-action-button" />
      </section>
      <h1 className="header-title">{HEADER_TITLE}</h1>
      <section className="header-toggle">
        <ToggleViewComponent
          selectedView={selectedView}
          setSelectedView={setSelectedView}
        />
      </section>
    </header>
  );
};

export default HeaderBarComponent;
