import type { AppProps } from 'next/app'
import './_app.css' // Import tailwindcss

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
