import Card from '../components/card/card'
import styled from 'styled-components'
import players from '../lib/players-data/players'
import styles from "../styles/Home.module.css";


const PlayersLayer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 3rem;
`;

export default function Players(){
    return(
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>My Top Five Players</h1>
                <PlayersLayer>
                    {players.map(player => {
                        return(<Card key={player.name} cardData={player}/>);
                    })}
                </PlayersLayer>
            </main>
            <footer className={styles.footer}>
            </footer>
        </div>
    );
};