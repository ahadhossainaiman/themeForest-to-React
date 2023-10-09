import style from "./Header.module.css";

const Header = () => {
  return (
    <>
      <nav>
        <section style={{ background: "#EEEEEE", padding: "5px 3px" }}>
          <div className={style.nav_upper}>
            <div className={style.nav_left_section}>
              <select id={style.customSelect}>
                <option value="option1">
                  <img
                    src="https://demo.smartaddons.com/templates/joomla3/sj-market/media/mod_languages/images/en.gif"
                    alt=""
                  />
                  English
                </option>
                <option value="option2">Bangla</option>
              </select>
              <select id={style.customSelect}>
                <option value="option1">
                  <img
                    src="https://demo.smartaddons.com/templates/joomla3/sj-market/media/mod_languages/images/en.gif"
                    alt=""
                  />
                  USB $
                </option>
                <option value="option2">TAKA</option>
              </select>
            </div>

            <div className={style.nav_right_section}>
              <p>CheckOut</p>
              <p>Login</p>
            </div>
          </div>
        </section>
        <section className={style.main_nav_section}>
          <div>
            <img
              src="https://demo.smartaddons.com/templates/joomla3/sj-market/templates/sj_market/images/styling/yellow/logo.png"
              alt=""
            />
          </div>
          <div className="">
            <form>
              <select name="" id={style.customCategory}>
                <option value="">All Category</option>
                <option value="">All Category</option>
                <option value="">All Category</option>
              </select>
              <input id={style.searchCategory} type="search" />
              <button type="submit" id={style.searchBtn}>
                <img
                  src="https://demo.smartaddons.com/templates/joomla3/sj-market/templates/sj_market/images/icon/icon-search.png"
                  alt=""
                />
              </button>
            </form>
          </div>
          <div className={style.nav_cart_section}>
            <div>
              <img
                src="https://demo.smartaddons.com/templates/joomla3/sj-market/templates/sj_market/images/styling/yellow/icon-minicart.png"
                alt=""
              />
            </div>
            <div className={style.nav_cart}>
              <p>YOUR CART:</p>
              <small> 0 Items Total : $0.00</small>
            </div>
          </div>
        </section>
      </nav>
    
      <div className={style.main_menu_section}>
        <div className={style.side_menu}>
          <img
            src="https://demo.smartaddons.com/templates/joomla3/sj-market/templates/sj_market/images/icon/icon-cate.png"
            alt=""
          />
          <h1>ALL CATEGORIES</h1>
          <img
            src="https://demo.smartaddons.com/templates/joomla3/sj-market/templates/sj_market/images/icon/icon-cate-down.png"
            alt=""
          />
        </div>
        <div className={style.main_menu}>
          <a href="">Home</a>
          <a href="">Explore</a>
          <a href="">Joomla</a>
          <a href="">Mega Menu</a>
          <a href="">Pages</a>
          <a href="">Shop</a>
        </div>
      </div>
      
    </>
  );
};

export default Header;
