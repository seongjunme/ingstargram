import logoImg from '../public/instargram.png';
import searchImg from '../public/search.png';
import homeImg from '../public/home.png';
import dmImg from '../public/dm.png';
import plusImg from '../public/plus.png';
import userImg from '../public/user.png';
import style from './style.scss';

const Header = ({ $target, initialState }) => {
  let state = initialState;

  const setState = newState => {
    state = newState;
    render();
  };

  const render = () => {
    $target.innerHTML = `
      <header>
        <nav>
          <img class="header-logo" src=${logoImg} alt="ingstargram"></img>
          <div class="searchBar">
            <div class="search-logo-wrap">
              <img class="search-logo" src=${searchImg} alt="search"></img>
              <span>검색</span>
            </div>  
            <input type="text" placeholder="검색"></input>
          </div>
          
          <ul>
            <li><img class="logo-item" src=${homeImg} alt="home"></img></li>
            <li><img class="logo-item" src=${dmImg} alt="message"></img></li>
            <li><img class="logo-item" src=${plusImg} alt="upload"></img></li>
            <li><img class="logo-item" src=${userImg} alt="user"></img></li>
          </ul>
        </nav>
      </header>
    `;

    setEvent();
  };

  const setEvent = () => {};

  render();

  return {
    setState,
  };
};

export default Header;
