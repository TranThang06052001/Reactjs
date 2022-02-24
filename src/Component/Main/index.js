import Carousel from "../Carousel/index";
import Category from "../Category/index";
import FeatureProducts from "../FeatureProducts/index";
import News from "../News/index";
import NewsLetter from "../NewsLetter/index";

export default function Main() {
  return (
    <div class="containerMain">
      <Carousel />
      <Category />
      <FeatureProducts />
      <News />
      <NewsLetter />
    </div>
  );
}
