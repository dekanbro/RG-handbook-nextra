import 'nextra-theme-docs/style.css';
import '../styles.css';

export const dynamic = 'force-static';
export const revalidate = false;

import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';

import brandTheme, { logo } from '../theme.config';

const navbar = (
  <Navbar
    logo={logo}
    projectLink="https://github.com/raid-guild/handbook"
    chatLink="https://discord.gg/rejAwfnJKk"
  />
);

const footer = <Footer>{brandTheme.footerText}</Footer>;

export const metadata = {
  title: 'RaidGuild Handbook',
  description: 'Your guide to raiding with the RaidGuild.'
};

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap();

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <meta name="theme-color" content="#bd482d" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body>
        <Layout
          banner={
            <Banner storageKey="rg-handbook-banner">
              Need help or updates? Join{' '}
              <a href="https://discord.gg/rejAwfnJKk" target="_blank" rel="noreferrer">
                the RaidGuild Discord
              </a>
              .
            </Banner>
          }
          navbar={navbar}
          footer={footer}
          pageMap={pageMap}
          docsRepositoryBase={brandTheme.docsRepositoryBase}
          feedback={{ content: null }}
          sidebar={{ toggleButton: true, defaultMenuCollapseLevel: 6, defaultOpen: true, autoCollapse: false }}
          toc={{ float: true }}
          darkMode
          nextThemes={{ attribute: 'class', defaultTheme: 'system', storageKey: 'rg-theme' }}
          themeSwitch={{ dark: 'Dark', light: 'Light', system: 'System' }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
