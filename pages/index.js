import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import axios from 'axios'

export default function Home({ data }) {
  console.log(data);
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />

        <h3>Todos</h3>
        {
          data?.map(todo => <div key={todo.id}>
            <h4><a href={`/todo/${todo.id}`}> {todo.title}</a></h4>
            <p>{todo.body}</p>
          </div>)
        }

      </main>

      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const data = await axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => res.data);
  return {
    props: { data }
  }

}
