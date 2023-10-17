import React, { useCallback, useEffect } from 'react';
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

  const fetchUser = useCallback(async () => {
    try {
      const token = Cookie.get('token');
      if (token) {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        const { data: user } = await axios.get(endpoints.auth.profile);
        setUser(user);
      }
    } catch (error) {
      setUser(null);
    }
  }, []);

  async function signIn(email, password) {
    try {
      const { data: { access_token } } = await axios.post(
        endpoints.auth.login,
        { email, password },
        options
      );

      if (access_token) {
        Cookie.set('token', access_token, { expires: 5 });
        await fetchUser();
      }
    } catch (e) {
      setUser(null);
    }

  }

  useEffect(() => {fetchUser()}, [fetchUser]);

  return {
    user,
    signIn
  }
}

export { useAuth };
