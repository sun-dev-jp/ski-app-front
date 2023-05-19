import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { Auth0Provider } from '@auth0/auth0-react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onRedirectCallback = (appState: any) => {
    router.push(appState.returnTo ? `/redirect?page=${appState.returnTo}` : window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_DOMAIN!}
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID!}
      authorizationParams={{
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
        audience: process.env.NEXT_PUBLIC_AUDIENCE
      }}
      onRedirectCallback={onRedirectCallback}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  )
}
