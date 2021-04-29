import iconService from "services/icons";
import imageService from "./images";

export const NAV_LINK = [
  {
    id: 1,
    name: "home",
    link: "/",
    icon: iconService("home"),
  },
  {
    id: 2,
    name: "work",
    link: "/work",
    icon: iconService("work"),
  },
  {
    id: 3,
    name: "explore",
    link: "/explore",
    icon: iconService("explore"),
  },
  {
    id: 4,
    name: "notification",
    link: "/notification",
    icon: iconService("notification"),
  },
  {
    id: 5,
    name: "setting",
    link: "/setting",
    icon: iconService("setting"),
  },
];

export const CARD_LIST = [
  {
    id: 1,
    title: "khartoum",
    image: imageService("location-1"),
    tags: ["pune", "moscow"],
    description: "Aenean lacinia bibendum nulla sed consectetur.",
  },
  {
    id: 2,
    title: "santa clara",
    image: imageService("location-0"),
    tags: ["new york", "moscow"],
    description:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
  },
  {
    id: 3,
    title: "bengaluru",
    image: imageService("location-6"),
    tags: ["pune", "new york"],
    description:
      "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
  },
  {
    id: 4,
    title: "portland",
    image: imageService("location-2"),
    tags: ["london", "moscow"],
    description:
      "Tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
  },
  {
    id: 5,
    title: "fairbanks",
    image: imageService("location-3"),
    tags: ["pune", "bengaluru"],
    description: "Pellentesque ornare sem lacinia quam venenatis vestibulum.",
  },
  {
    id: 6,
    title: "sofia",
    image: imageService("location-4"),
    tags: ["pune", "delhi"],
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.",
  },
  {
    id: 7,
    title: "belfast",
    image: imageService("location-7"),
    tags: ["pune", "mumbai"],
    description:
      "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
  },
  {
    id: 8,
    title: "pune",
    image: imageService("location-5"),
    tags: ["pune", "new york"],
    description: "Pellentesque ornare sem lacinia quam venenatis vestibulum.",
  },
  {
    id: 9,
    title: "new york",
    image: imageService("location-0"),
    tags: ["wales", "bengaluru"],
    description:
      "Tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
  },
  {
    id: 10,
    title: "london",
    image: imageService("location-6"),
    tags: ["pune", "wales"],
    description: "Aenean lacinia bibendum nulla sed consectetur.",
  },
  {
    id: 11,
    title: "moscow",
    image: imageService("location-2"),
    tags: ["santa clara", "bengaluru"],
    description:
      "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
  },
  {
    id: 12,
    title: "sydney",
    image: imageService("location-3"),
    tags: ["singapore", "bengaluru"],
    description:
      "Tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
  },
];
