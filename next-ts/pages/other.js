import Link from 'next/link'
import Layout from '../components/Layout'

export default () =>{
  return(
    <>
    <Layout header="Other" title="Other Page.">
      <p>This is Other page.</p>
      <hr/>
      <div>
        <Link href="/">
          <button>Back to Top</button>
        </Link>
      </div>
    </Layout>
    </>
  )
}