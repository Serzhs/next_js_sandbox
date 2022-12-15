import axios from 'axios'

export default function handler(req, res) {
    axios.get('https://rickandmortyapi.com/api/character').then(({data}) => {

        res.json(data)
    })
}
