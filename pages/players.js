import Card from '../components/card/card'
import styled from 'styled-components'
import players from '../lib/players-data/players'
import styles from "../styles/Home.module.css";

const Main = styled.div`
  padding: 5rem 0;
  justify-content: center;
  align-items: center;
`;

const PlayersLayer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 3rem;
`;

export default function Players(){
    return(
        <Main>
            <h1 className={styles.title}>My Top Five NBA Players</h1>
            <PlayersLayer>
                {players.map(player => {
                    return(<Card key={player.name} cardData={player}/>);
                })}
            </PlayersLayer>
        </Main>
    );
};