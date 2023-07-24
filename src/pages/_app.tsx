import type { AppProps } from 'next/app';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's already imported above
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
//TODO-HUS sanırım buna geçmemiz lazım ama şimdik dursun. layout.tsx dosyasına icon ekledik. small test