import React from 'react';

const SignInPage = () => {
  return (
    <div>
      <form>
        <input type="text" name="username" placeholder="Enter Username" />
        <br/>
        <input type="password" name="password" placeholder="Enter Password" />
        <br/>
        <input type="submit" />
      </form>
    </div>
  );
}

export default SignInPage;
