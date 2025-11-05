/* eslint-env node */
import { Footer as NextraFooter, Layout, Navbar } from 'nextra-theme-docs'
import './globals.css'
import { Montserrat, Nunito_Sans, Noto_Sans_SC } from 'next/font/google'
import Link from 'next/link'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import Footer from '../components/Footer'
import 'nextra-theme-docs/style.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import Image from 'next/image'
import StarryBackground from '../components/StarryBackground'
import CanonicalLink from '../components/CanonicalLink'

export const openGraphImage = 'https://webstatics.ii.inc/TLE_OGImage.png'

export const metadata = {
  metadataBase: new URL('https://www.thelasteconomy.com'),
  title: {
    default: '最后的经济',
    template: '%s - 最后的经济'
  },
  description: '智能时代的第三条路',
  applicationName: '最后的经济',
  generator: 'Next.js',
  appleWebApp: {
    title: '最后的经济'
  },
  openGraph: {
    title: '最后的经济',
    description: '智能时代的第三条路',
    url: 'https://www.thelasteconomy.com',
    siteName: '最后的经济',
    images: [openGraphImage],
    locale: 'zh_CN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '最后的经济',
    description: '智能时代的第三条路',
    images: [openGraphImage],
    site: '@EMostaque'
  }
}

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito-sans',
});

const noto_sans_sc = Noto_Sans_SC({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-sc',
  weight: ['300', '400', '500', '700', '900'],
});

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div className="flex items-center">
          <div className="ml-2">
            <b style={{ color: '#BAE9F4' }}>最后的经济</b>
          </div>
        </div>
      }
      // projectLink="https://github.com/Intelligent-Internet/Symbioism-Nextra"
    >
      <div>
        <Link href="https://ii.inc/web/registration" target="_blank" rel="noopener noreferrer" className="bg-[#BAE9F4] text-black font-bold py-2 px-5 rounded-full text-sm no-underline transition-opacity hover:opacity-80 shadow-[0_10px_30px_0_rgba(186,233,244,0.3)]">
          注册
        </Link>
      </div>
    </Navbar>
  )
    const pageMap = await getPageMap()
  return (
    <html lang="zh-CN" dir="ltr" suppressHydrationWarning>
      <Head />
      <CanonicalLink />
      <body className={`${montserrat.variable} ${nunito_sans.variable} ${noto_sans_sc.variable}`}>
        <StarryBackground starCount={200} />
        <div className="relative z-10">
          <Layout
            // banner={<Banner storageKey="Nextra 2">Nextra 2 Alpha</Banner>}
            navbar={navbar}
            editLink="在 GitHub 上编辑此页面"
            docsRepositoryBase="https://github.com/Intelligent-Internet/Symbioism-Nextra"
            sidebar={{ defaultMenuCollapseLevel: 1 }}
            pageMap={pageMap}
            nextThemes={{ forcedTheme: 'dark' }}
            darkMode={false}
          >
            <main>{children}</main>
          </Layout>
          <Footer />
        </div>
        <GoogleAnalytics gaId="G-00VHQ8C00W" />
      </body>
    </html>
  )
}
