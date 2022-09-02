import { AppProps } from 'next/app'
import '../styles/app.scss'


import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {

    if (typeof document !== undefined) {
      let bootstrap = require('bootstrap/dist/js/bootstrap')

      // let toastElList = [].slice.call(document.querySelectorAll('.toast'))
      // let toastList = toastElList.map(function (toastEl) {
      //   return new bootstrap.Toast(toastEl)
      // })
      // toastList.forEach( function(element, index) {
      //   element.show()
      // })
    }
  }, []);

  return <Component {...pageProps} />
}
