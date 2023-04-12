import Link from "next/link"

export const Header: React.FC = () => {
    return (
        <header className="navbar p-8">
            <div className="navbar-start"><Link href="/">LOGO</Link></div>
            <nav className="navbar-end">
                <ul className="inline-flex gap-4">
                    <li><Link href="/projects">Mes projets</Link></li>
                </ul>
            </nav>
        </header>
    )
}