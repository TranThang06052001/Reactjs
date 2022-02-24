import DrawerLeft from "./drawerLeft/index";
import "../../asset/CSS/Header.css";
import logo from "../../asset/img/logo.png";
import HeaderRingt from './headerRight/index'
export default function Header() {
  let arrTextMain = [
    "Computers",
    "Electronics",
    "Sport",
    "Digital downloads",
    "Lego",
    "Gift vouchers",
  ];
  let arrText = ["New products", "Blog", "Contact us"];
  return (
    <div className="bgrColor">
    <div className="grid wide">
      <div className="Header">
        <DrawerLeft arrText={arrText} arrTextMain={arrTextMain} />
        <div className="headerLogo" >
          <img src={logo} alt="logo" />
        </div>
        <HeaderRingt/>
      </div>
    </div>
    </div>
  );
}
