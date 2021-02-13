import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'

export default function FirstStrain() {
    return (
        <Layout>
            <Head>
                <title>First Strain</title>
            </Head>
            <h1>First Strain</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <Image
                src="/images/dr_seeds_feminized_gorilla_alien_tin.png"
                height={150}
                width={150}
                alt="Dr. Seeds"
                />

        </Layout>
    )
  }