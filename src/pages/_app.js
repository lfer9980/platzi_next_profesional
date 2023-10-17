import '@/styles/tailwind.css';
import MainLayout from '@/layouts/MainLayout';
import { useContext } from 'react';
import { useAuth } from 'hooks/useAuth';
import { AuthContext } from 'hooks/useContext';

function MyApp({
  Component,
  pageProps,
}) {

  const auth = useContext(useAuth);

  return (
    <AuthContext.Provider value={auth}>
      <MainLayout>
        <Component
          {...pageProps}
        />
      </MainLayout>
    </AuthContext.Provider>
  );
}

export default MyApp;
