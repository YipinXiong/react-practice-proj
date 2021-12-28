import React, {ChangeEvent, FormEvent, useState} from 'react';
import {ILoginFormData, LoginFormEntries} from '../interfaces/interfaces.index';
import {useAuth} from '../hooks/auth';

const Login = () => {
  const [currentLoginForm, setLoginFormInputs] = useState<ILoginFormData>({orgCode: '', username: '', password: ''});
  const auth = useAuth();
  const onSubmitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth?.signin(currentLoginForm);
  };
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginFormInputs(((prevState) => {
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
          <input onChange={onInputChange} value={currentLoginForm.orgCode} type="text" name="orgCode" className="form-control" id="orgCode" aria-describedby="orgCode" />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input onChange={onInputChange} value={currentLoginForm.username} type="text" name="username" className="form-control" id="username" aria-describedby="username" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input onChange={onInputChange} value={currentLoginForm.password} type="password" name="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
  );
};

export default Login;
