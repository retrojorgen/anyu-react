import { Logo } from './logo'
import { ContentRestrain } from './ContentRestrain'
import Link from 'next/link'
import sanityClient from '../sanityClient';

export const Header = async () => {
  const settings = await sanityClient.fetch(`
  *[_type == "settings"]{menu[]{title, type, page->{slug}}}[0]
  `);
  console.log(settings.menu);
    return (
        <header id="header">
            <ContentRestrain>
            <div id="header-content">
                <div id="header-logo">
                    <Link href="/" aria-label="link to homepage">
                        <Logo />
                    </Link>
                </div>

                <nav id="header-navigation">
                 <ul>
                    {settings.menu.map((item: any, key: number) => (
                      <li key={key}>
                        <Link href={"/" + item.page.slug.current}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
            </div>
            </ContentRestrain>
        </header>
    );
}