import Header from '../../components/header';

const Account = ({ $target, initialState }) => {
  let state = initialState;
  let header = Header({ $target });

  const setState = newState => {
    state = newState;
    render();
  };

  const render = () => {
    $target.innerHTML = `
      ${header.template()}
      <div>Account</div>
    `;

    header.setEvent();
  };

  return {
    render,
  };
};

export default Account;
