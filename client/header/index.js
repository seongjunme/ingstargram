import logoImg from '../public/instargram.png';
import searchImg from '../public/search.png';
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
        <img class="header-logo" src=${logoImg} alt="ingstargram"></img>
        <div class="searchBar">
          <div class="search-logo-wrap">
            <img class="search-logo" src=${searchImg} alt="search"></img>
            <span>검색</span>
          </div>  
          <input type="text" placeholder="검색"></input>
        </div>
        <nav>
          <ul>
            <li>home</li>
            <li>dm</li>
            <li>upload</li>
            <li>mypage</li>
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
