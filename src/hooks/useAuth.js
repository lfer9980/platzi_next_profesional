import React from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endpoints from '@/services/api';

function useAuth() {
  const [user, setUser] = React.useState(null);

  const options = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    }
  }

  async function signIn(email, password) {
    const { data: { access_token } } = await axios.post(
      endpoints.auth.login,
      { email, password },
      options
    );

    console.log(access_token);
  }

  return {
    user,
    signIn
  }
}

export { useAuth };