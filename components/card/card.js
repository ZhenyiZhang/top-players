import styled from 'styled-components';

const CardLayer = styled.div`
  height: 300px;
  perspective: 1000px;
  width: 200px;
`;

const CardInner = styled.div`
  height: 100%;
  position: relative;
  text-align: center;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  width: 100%;
  &:hover {transform: rotateY(180deg);}
`;

const FlipCard = `
  border-radius: 5%;
  backface-visibility: hidden;
  height: 100%;
  position: absolute;
  width: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
`;

const FlipCardFront = styled.div`
  ${FlipCard}
  background-color: #bbb;
  color: black;
`;

const FlipCardBack = styled.div`
  ${FlipCard}
  background-color: black;
  color: white;
  transform: rotateY(180deg);
`;

const Photo = styled.img`
  border-radius: 5%;
  height: 300px;
  width: 200px;
`;

export default function Card(props) {
    return (
        <CardLayer>
            <CardInner>
                <FlipCardBack>
                    <h1>{props.cardData.name}</h1>
                    <p>{props.cardData.team}</p>
                    <p>Ranking #{props.cardData.ranking}</p>
                </FlipCardBack>
                <FlipCardFront>
                    <Photo src={props.cardData.imageSrc} alt="MJ"/>
                </FlipCardFront>
            </CardInner>
        </CardLayer>
    );
};