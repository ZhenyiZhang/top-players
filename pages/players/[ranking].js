import Card from '../../components/card/card'
import players from '../../lib/players-data/players'
import styled from 'styled-components'
import {space, layout, flexbox} from 'styled-system'

const CardWrapper = styled.div`
    ${space}
    ${layout}
    ${flexbox}
`;

export default function Player({playerData}) {
    return(
        <CardWrapper
            minHeight='100vh'
            alignItems='center'
            display='flex'
            justifyContent='center'>
            <Card cardData={playerData}/>
        </CardWrapper>
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
        //todo what is this?
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const playerData = players.find(player => {
        return player.ranking == params.ranking;
    });
    return {props : {playerData}};
}