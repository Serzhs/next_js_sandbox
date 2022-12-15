import axios from "axios";

export default function Characters({data}) {
    console.log('data', data)
    return (
        <h1>sdf</h1>
    )
}

export async function getStaticProps() {
    const {data} = await axios.get('http://localhost:3000/api/rickandmorty')

    return {
        props: {
            data,
        },
    };
}

