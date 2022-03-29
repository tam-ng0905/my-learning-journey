import '../styles/globals.css'
import Layout from "./layout/layout";
import {AuthProvider} from "@/context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
  )
}

export default MyApp
