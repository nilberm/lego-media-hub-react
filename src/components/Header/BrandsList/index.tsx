import architectureImg from "../../../assets/imgs/brands/architecture.png";
import cityImg from "../../../assets/imgs/brands/city.png";
import creatorImg from "../../../assets/imgs/brands/creator.png";
import dotsImg from "../../../assets/imgs/brands/dots.png";
import duploImg from "../../../assets/imgs/brands/duplo.png";
import friendsImg from "../../../assets/imgs/brands/friends.png";
import ideasImg from "../../../assets/imgs/brands/ideas.png";
import minifiguresImg from "../../../assets/imgs/brands/minifigures.png";
import technicImg from "../../../assets/imgs/brands/technic.png";

export const BrandsList = () => (
  <ul>
    <li>
      <a href="/">
        <img src={architectureImg} alt="brand logo" />
      </a>
    </li>
    <li>
      <a href="/">
        <img src={cityImg} alt="brand logo" />
      </a>
    </li>
    <li>
      <a href="/">
        <img src={creatorImg} alt="brand logo" />
      </a>
    </li>
    <li>
      <a href="/">
        <img src={dotsImg} alt="brand logo" />
      </a>
    </li>
    <li>
      <a href="/">
        <img src={duploImg} alt="brand logo" />
      </a>
    </li>
    <li>
      <a href="/">
        <img src={friendsImg} alt="brand logo" />
      </a>
    </li>
    <li>
      <a href="/">
        <img src={ideasImg} alt="brand logo" />
      </a>
    </li>
    <li>
      <a href="/">
        <img src={minifiguresImg} alt="brand logo" />
      </a>
    </li>
    <li>
      <a href="/">
        <img src={technicImg} alt="brand logo" />
      </a>
    </li>
  </ul>
);
