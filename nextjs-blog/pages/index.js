import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm {props.name}. I'm a software developer.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>


    </Layout>
  )
}

export async function getStaticProps() {
  const githubResponse = await fetch('https://api.github.com/users/wanderson1873')
    .then(res => res.json())
  return {
    props: {
      avatar_url: githubResponse.avatar_url,
      name: githubResponse.name
    }
  }
}