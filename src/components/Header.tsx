import { Logo } from '@/components/logo'
import { ContentRestrain } from '@/components/ContentRestrain'
import Link from 'next/link'

export function Header () {
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
                        <li>
                            <Link href="/akupunktur">Akupunktur</Link>
                        </li>
                        <li>
                            <Link href="/om-anyu-klinikken">Om Anyu</Link>
                        </li>
                        <li>
                            <Link href="/online-booking">Priser</Link>
                        </li>
                    </ul>    
                </nav>
            </div>
            </ContentRestrain>
        </header>
    );
}