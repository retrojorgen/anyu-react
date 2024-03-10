import { Logo } from './logo';
import { ContentRestrain } from './ContentRestrain';
import Link from 'next/link';
import sanityClient from '../sanityClient';

export const Header = async () => {
  const settings = await sanityClient.fetch(`
  *[_type == "settings"]{menu[]{title, type, page->{slug}, underpages[]{title, page->{slug}}}}[0]
  `);
  console.log(settings.menu[1]);
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
                <li
                  key={key}
                  className={`menu-item ${item.underpages && item.underpages.length > 0 ? 'has-sub-menu' : ''}`}
                >
                  <Link href={'/' + item.page.slug.current}>
                    {item.title}
                  </Link>
                  {item.underpages && item.underpages.length > 0 && (
                    <ul className="sub-menu">
                      {item.underpages.map(
                        (underpage: any, key: number) => (
                          <li key={key} className="sub-menu-item">
                            <Link
                              href={'/' + underpage.page.slug.current}
                            >
                              {underpage.title}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </ContentRestrain>
    </header>
  );
};
