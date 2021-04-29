import Location0 from "assets/images/location-picture-0.png";
import Location1 from "assets/images/location-picture-1.png";
import Location2 from "assets/images/location-picture-2.png";
import Location3 from "assets/images/location-picture-3.png";
import Location4 from "assets/images/location-picture-4.png";
import Location5 from "assets/images/location-picture-5.png";
import Location6 from "assets/images/location-picture-6.png";
import Location7 from "assets/images/location-picture-7.png";

const images = {
  "location-0": Location0,
  "location-1": Location1,
  "location-2": Location2,
  "location-3": Location3,
  "location-4": Location4,
  "location-5": Location5,
  "location-6": Location6,
  "location-7": Location7,
};

const imageService = (type) => {
  if (images[type]) return images[type];
  throw new Error(`Image of type ${type} not found.`);
};

export default imageService;
