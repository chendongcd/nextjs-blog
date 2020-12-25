import Head from 'next/head'
import 'antd/dist/antd.css';
import MainLayout from "../components/MainLayout";
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <MainLayout/>
    </div>
  )
}
