import TagListComponent from "components/TagListComponent";
import iconService from "services/icons";

const LocationCardComponent = (props) => {
  const {
    cardDetails,
    setSelectedLocation,
    removeLocation,
    selectedView,
  } = props;

  const { image, title, tags, description, isSelected } = cardDetails;

  const MessageSVG = iconService("message");
  const HeartSVG = iconService("heart");
  const CheckmarkSVG = iconService("checkmark");

  const isCardView = selectedView === "card";

  return (
    <div
      className={
        isCardView ? "location-card" : "location-card location-card-small"
      }
      onClick={() => {
        if (!isCardView) return;
        isSelected
          ? removeLocation(cardDetails)
          : setSelectedLocation(cardDetails);
      }}
    >
      <section
        className={
          isCardView
            ? "location-card-image"
            : "location-card-image location-card-image-small"
        }
      >
        <img className="location-card-image-value" src={image} alt={title} />
        {isCardView &&
          (isSelected ? (
            <CheckmarkSVG className="location-card-image-check" />
          ) : (
            <span className="location-card-image-checkbox" />
          ))}
      </section>
      {isCardView && <TagListComponent tags={tags} />}
      <h2
        className={
          isCardView
            ? "location-card-title"
            : "location-card-title location-card-title-small"
        }
      >
        {title}
      </h2>
      {isCardView && (
        <h4 className="location-card-description">{`${description}`}</h4>
      )}
      <div
        className={
          isCardView
            ? "location-card-action"
            : "location-card-action location-card-action-small"
        }
      >
        <MessageSVG className="location-card-action-icon" />
        <HeartSVG className="location-card-action-icon" />
      </div>
    </div>
  );
};

export default LocationCardComponent;
