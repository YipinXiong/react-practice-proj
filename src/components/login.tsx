import React, {ChangeEvent, FormEvent, useState} from 'react';

type LoginFormEntries = 'password' | 'username' | 'orgCode';

const Login = () => {
  const [currentInputs, setInputs] = useState({orgCode: '', username: '', password: ''});
  const onSubmitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('event', currentInputs);
  };
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs(((prevState) => {
      const castedName = e.target.name as LoginFormEntries;
      const newState = {...prevState};
      newState[castedName] = e.target.value;
      return newState;
    }));
  }
  return (
      <form className="d-flex flex-column p-5" onSubmit={onSubmitLogin}>
        <div className="mb-3">
          <label htmlFor="orgCode" className="form-label">Org Code</label>
          <input onChange={onInputChange} value={currentInputs.orgCode} type="text" name="orgCode" className="form-control" id="orgCode" aria-describedby="orgCode" />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input onChange={onInputChange} value={currentInputs.username} type="text" name="username" className="form-control" id="username" aria-describedby="username" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input onChange={onInputChange} value={currentInputs.password} type="password" name="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
  );
};

export default Login;
