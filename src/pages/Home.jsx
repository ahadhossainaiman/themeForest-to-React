import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import style from "./Home.module.css";
import ProductCart from "../components/productCart/productCart";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Footer from "../components/Footer/Footer";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
  return (
    <>
    <section>
      <div className={style.hero_section}>
        <div className={style.category_side_menu}>
          <div className={style.category_side}>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/images/sj_market/1.png"
              alt=""
            />
            <p>Electronic</p>
          </div>
          <div className={style.category_side}>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/images/sj_market/9.png"
              alt=""
            />
            <p>Electronic</p>
          </div>
          <div className={style.category_side}>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/images/sj_market/9.png"
              alt=""
            />
            <p>Electronic</p>
          </div>
          <div className={style.category_side}>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/images/sj_market/9.png"
              alt=""
            />
            <p>Electronic</p>
          </div>
          <div className={style.category_side}>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/images/sj_market/8.png"
              alt=""
            />
            <p>Electronic</p>
          </div>
          <div className={style.category_side}>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/images/sj_market/8.png"
              alt=""
            />
            <p>Electronic</p>
          </div>
          <div className={style.category_side}>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/images/sj_market/8.png"
              alt=""
            />
            <p>Electronic</p>
          </div>
          <div className={style.category_side}>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/images/sj_market/8.png"
              alt=""
            />
            <p>Electronic</p>
          </div>
          <div className={style.category_side}>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/images/sj_market/8.png"
              alt=""
            />
            <p>Electronic</p>
          </div>
          <div className={style.category_side}>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/images/sj_market/8.png"
              alt=""
            />
            <p>Electronic</p>
          </div>
          <div className={style.category_side}>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/images/sj_market/8.png"
              alt=""
            />
            <p>Electronic</p>
          </div>
          <div className={style.category_side}>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/images/sj_market/8.png"
              alt=""
            />
            <p>Electronic</p>
          </div>
          <div className={style.category_side}>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/images/sj_market/8.png"
              alt=""
            />
            <p>Electronic</p>
          </div>
          <div className={style.category_side}>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/images/sj_market/8.png"
              alt=""
            />
            <p>Electronic</p>
          </div>
        </div>

        <div className={style.hero_slider}>
          <p>
            Top Search:
            acer,APPLE,black,canon,clogs,confi,kate,lor,product,Zolof The Rock
            And Roll Destroyer
          </p>
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
          >
            <div data-src="https://demo.smartaddons.com/templates/joomla3/sj-market/cache/resized/f698a9fd6ff9ec2e1883a2c6bdff91e5.png" />
            <div data-src="https://demo.smartaddons.com/templates/joomla3/sj-market/cache/resized/02805c2ac1be531a1e422368607fce75.png" />
            <div data-src="https://demo.smartaddons.com/templates/joomla3/sj-market/cache/resized/6f839f0e0237bafd7027ff778c4ec975.png" />
          </AutoplaySlider>
        </div>

        <div className={style.hero_banner_section}>
          <div className={style.hero_banner}>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/images/sj_market/banner1-1.png"
              alt=""
            />
          </div>
          <div className={style.hero_banner}>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/images/sj_market/banner1-2.png"
              alt=""
            />
          </div>
          <div className={style.hero_banner}>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/images/sj_market/banner1-2.png"
              alt=""
            />
          </div>
          <div className={style.hero_banner}>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/images/sj_market/banner1-2.png"
              alt=""
            />
          </div>
        </div>

        <div className={style.facility}>
          <div className={style.facility_option}>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/templates/sj_market/images/icon/icon-money.png"
              alt=""
            />
            <div>
              <p>90 DAYS</p>
              <p>MONEY BACK</p>
            </div>
          </div>
          <div className={style.facility_option}>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/templates/sj_market/images/icon/icon-freeship.png"
              alt=""
            />
            <div>
              <p>FREE SHIPPING</p>
              <p>ON ALL ORDERS</p>
            </div>
          </div>
          <div className={style.facility_option}>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/templates/sj_market/images/icon/icon-celander.png"
              alt=""
            />
            <div>
              <p>LOWEST PRICE</p>
              <p>GUARANTEE</p>
            </div>
          </div>
          <div className={style.facility_option}>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/templates/sj_market/images/icon/icon-umbrella.png"
              alt=""
            />
            <div>
              <p>SAFE SHOPPING</p>
              <p>GUARANTEE</p>
            </div>
          </div>
        </div>
      </div>
      <Tabs>
        <TabList>
          <div className={style.tab_item}>
            <Tab>BATH & BODY</Tab>
            <Tab>GIFT FOR MAN</Tab>
            <Tab>MEN WATCHES</Tab>
          </div>
        </TabList>
        <TabPanel>
          <div className={style.cart_section}>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={style.cart_section}>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={style.cart_section}>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </TabPanel>
      </Tabs>
      <section className={style.hero_banner}>
        <div>
          <img src="https://demo.smartaddons.com/templates/joomla3/sj-market/images/sj_market/banner2-1.png" alt="" />
        </div>
        <div>
          <img src="https://demo.smartaddons.com/templates/joomla3/sj-market/images/sj_market/banner2-2.png" alt="" /><br /><br />
          <img src="https://demo.smartaddons.com/templates/joomla3/sj-market/images/sj_market/banner2-3.png" alt="" />
        </div>
        <div>
          <img src="https://demo.smartaddons.com/templates/joomla3/sj-market/images/sj_market/banner2-4.png" alt="" />
        </div>
      </section>
    </section>
    
    <Footer/>
    </>
   
  );
};

export default Home;
