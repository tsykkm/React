import Link from 'next/link'
import Layout from '../components/Layout'

export default () =>{
  return(
    <Layout header="Next" title="Top Page.">
      <h1>Next.jssss</h1>
      <hr/>
      <Link href="./other">
        <button>Go to other</button>
      </Link>
    </Layout>
  )
}