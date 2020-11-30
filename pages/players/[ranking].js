import Card from '../../components/card/card'
import players from '../../lib/players-data/players'

export default function Player({playerData}) {
    return(
        <Card cardData={playerData}/>
    );
}

export async function getStaticPaths() {
    const arr = Array.from({length: players.length},
        (_, i) => (i + 1).toString());
    const paths = arr.map(path => {
        return {params: {
            ranking: path
        }}
    });
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const playerData = players.find(player => {
        return player.ranking == params.ranking;
    });
    return {props : {playerData}};
}