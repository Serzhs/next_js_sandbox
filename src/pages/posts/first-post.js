import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/Layout/layout';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            <img src="/images/profile.jpg" alt="Your Name" width={144} height={144} />
            <Image
                src="/images/profile.jpeg" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Your Name"
            />

        </Layout>
    );
}
