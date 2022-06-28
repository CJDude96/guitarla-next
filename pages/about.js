import Link from 'next/link'
import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout page="About">
      <h1>From About us</h1>
      <Link href="/">Go back to main</Link>
    </Layout>
  )
}

export default About