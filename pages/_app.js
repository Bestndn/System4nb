import '../styles/globals.css'
import Footer from '../pages/system4/footer'

function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Component {...pageProps} />
      {/* <Footer /> */}
    </div>

  )
}

export default MyApp
