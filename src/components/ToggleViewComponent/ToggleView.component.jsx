import iconService from "services/icons";

const ToggleViewComponent = (props) => {
  const { selectedView, setSelectedView } = props;

  const isCardView = selectedView === "card";

  const IconCard = iconService("grid");
  const IconList = iconService("list");

  return (
    <div className="toggle">
      <span
        className={`toggle-item ${isCardView ? "toggle-item-selected" : ""}`}
        onClick={() => setSelectedView("card")}
      >
        <IconCard
          className={`toggle-item-icon ${
            isCardView ? "toggle-item-icon-selected" : ""
          }`}
        />
      </span>
      <span
        className={`toggle-item ${!isCardView ? "toggle-item-selected" : ""}`}
        onClick={() => setSelectedView("list")}
      >
        <IconList
          className={`toggle-item-icon ${
            !isCardView ? "toggle-item-icon-selected" : ""
          }`}
        />
      </span>
    </div>
  );
};

export default ToggleViewComponent;
