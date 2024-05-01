import { footerInfo } from "../constants/info";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import classes from "../style/Footer.module.scss";

const Footer = () => {
  const phoneClickHandler = () => {
    const phoneUrl = `tel:${footerInfo.phone}`;
    window.location.href = phoneUrl;
  };

  const emailClickHandler = () => {
    window.location.href = `mailto:${footerInfo.email}.com`;
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.footerItem} onClick={phoneClickHandler}>
        <div className={classes.iconContainer}>
          <LuPhone className={classes.icon} />
        </div>
        <p>{footerInfo.phone}</p>
      </div>
      <div className={classes.footerItem} onClick={emailClickHandler}>
        <div className={classes.iconContainer}>
          <MdOutlineEmail className={classes.icon} />
        </div>
        <p>{footerInfo.email}</p>
      </div>
      <div className={classes.footerItem}>
        <div className={classes.iconContainer}>
          <SlLocationPin className={classes.icon} />
        </div>
        <p>{footerInfo.location}</p>
      </div>
    </footer>
  );
};

export default Footer;
