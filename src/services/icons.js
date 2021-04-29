import { ReactComponent as LogoSVG } from "assets/icons/logo.svg";
import { ReactComponent as HomeSVG } from "assets/icons/home.svg";
import { ReactComponent as WorkSVG } from "assets/icons/briefcase.svg";
import { ReactComponent as ExploreSVG } from "assets/icons/compass.svg";
import { ReactComponent as NotificationSVG } from "assets/icons/bell.svg";
import { ReactComponent as SettingSVG } from "assets/icons/gear.svg";
import { ReactComponent as LogOutSVG } from "assets/icons/log-out.svg";

import { ReactComponent as GridViewSVG } from "assets/icons/grid-view-icon.svg";
import { ReactComponent as ListViewSVG } from "assets/icons/list-view-icon.svg";

import { ReactComponent as MessageSVG } from "assets/icons/message-square.svg";
import { ReactComponent as HeartSVG } from "assets/icons/heart.svg";

import { ReactComponent as CheckmarkSVG } from "assets/icons/checkmark.svg";
import { ReactComponent as RemoveSVG } from "assets/icons/Group.svg";

import { ReactComponent as MenuSVG } from "assets/icons/menu.svg";

const icons = {
  logo: LogoSVG,
  home: HomeSVG,
  work: WorkSVG,
  explore: ExploreSVG,
  notification: NotificationSVG,
  setting: SettingSVG,
  logout: LogOutSVG,
  grid: GridViewSVG,
  list: ListViewSVG,
  message: MessageSVG,
  heart: HeartSVG,
  checkmark: CheckmarkSVG,
  remove: RemoveSVG,
  menu: MenuSVG,
};

const iconService = (type) => {
  if (icons[type]) return icons[type];
  throw new Error(`Icon of type ${type} not found.`);
};

export default iconService;
