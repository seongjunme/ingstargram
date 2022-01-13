import Header from '../../components/header';

const Home = ({ $target, initialState }) => {
  let state = initialState;
  let header = Header({ $target });

  const setState = newState => {
    state = newState;
    render();
  };

  const render = () => {
    $target.innerHTML = `
      ${header.template()}
      <div>Home</div>
    `;

    header.setEvent();
  };

  return {
    render,
  };
};

export default Home;
