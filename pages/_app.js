import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import '@styles/globals.css'
import {ThemeProvider} from "next-themes";

const Noop = ({children}) => <>{children}</>

function MyApp({ Component, pageProps }) {

    const Layout = Component.Layout ?? Noop

    return (
        <ThemeProvider enableSystem={true} attribute="class">

            <Layout>
                <ToastContainer/>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>

    )
}

export default MyApp
