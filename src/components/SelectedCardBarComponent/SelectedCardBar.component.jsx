import iconService from "services/icons";

const SelectedCardBarComponent = (props) => {
  const { selectedCardCount, removeLocation } = props;

  const RemoveSVG = iconService("remove");
  const HeartSVG = iconService("heart");
  const MessageSVG = iconService("message");

  return (
    <div className="selected-card-bar">
      <div className="selected-card-bar-information">
        <RemoveSVG
          className="selected-card-bar-information-icon"
          onClick={() => removeLocation()}
        />
        <span className="selected-card-bar-information-text">{`${selectedCardCount} item selected`}</span>
      </div>
      <div className="selected-card-bar-action">
        <MessageSVG className="selected-card-bar-action-icons" />
        <HeartSVG className="selected-card-bar-action-icons" />
      </div>
    </div>
  );
};

export default SelectedCardBarComponent;
