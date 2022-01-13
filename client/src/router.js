import Home from './pages/home';
import Message from './pages/message';
import Account from './pages/account';

const routes = {
  '/': Home,
  '/message': Message,
  '/account': Account,
  404: Home,
};

const match = () => routes[location.pathname] || routes[404];

const routeTo = path => {
  history.pushState(null, null, path);
  render();
};

const render = (component = match()) => {
  const $App = document.querySelector('#App');
  component({ $target: $App }).render();
};

export { render, routeTo };
