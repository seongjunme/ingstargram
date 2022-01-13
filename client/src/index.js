import { render } from './router';

window.addEventListener('popstate', () => render());
render();
