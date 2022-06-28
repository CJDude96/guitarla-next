import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout page="Index">
      <h1>
        From index
      </h1>
      <Link href="/about">About us</Link>
    </Layout>
  )
}
