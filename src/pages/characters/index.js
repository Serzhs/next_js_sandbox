import axios from "axios";
import Layout from "../../components/Layout/layout";
import Image from "next/image";
import style from './character.module.scss'

export default function Characters({data}) {
    return (
        <Layout>
            <div className={style.container}>
                {data.results.map(({id, image, name}) => (
                    <div key={id}>
                        <Image
                            src={image}
                            width={300}
                            height={300}
                            alt={name}
                        />
                        <h3>{name}</h3>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const { data } = await axios.get('http://localhost:3000/api/rickandmorty')

    return {
        props: {
            data,
        },
    };
}

