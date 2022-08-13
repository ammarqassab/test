import Head from 'next/head'
import { useRouter } from 'next/router'
import { appName, appurl } from '../../Api/FetcherApi'

const CommonSEO = ({ title, description, keywords }) => {
    const router = useRouter()
    return (
        <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#39c7da" />
        <meta name="application-name" content={`${appName}`} />
        <meta name="keywords" content={`${keywords}`}></meta>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={description} />
        <meta property="og:url" content={`${appurl}${router.asPath}`} />
        <meta property="og:type" content={'tutorial'} />
        <meta property="og:site_name" content={appName} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={appName} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default CommonSEO