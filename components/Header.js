import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
        <div className="container">
            <div>
                <Link href="/">
                    <Image width={400} height={100} src="/img/logo.svg" alt="logo" />
                </Link>
            </div>

            <nav>
                <Link href="/">Index</Link>
                <Link href="/about">About us</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/store">Store</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header