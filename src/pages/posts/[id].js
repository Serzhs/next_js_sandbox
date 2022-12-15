import Layout from '../../components/Layout/layout';
import {getAllPostIds, getPostData} from "../../lib/posts";
import Date from "../../components/Date/date";
import Head from "next/head";

export default function Post({postData}) {
    console.log(postData)

    return (
        <>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            <Date dateString={postData.date} />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
        </>
    )
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}
