import styled, {css} from 'styled-components';

const CardInner = styled.div`
  height: 100%;
  position: relative;
  text-align: center;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  width: 100%;
`;

const FlipCard = styled.div`
  height: 300px;
  margin: 0.5rem;
  overflow: hidden;
  width: 200px;
  &:hover ${CardInner}{
      transform: rotateY(180deg);
  }
`;

const CardCommon = css`
  backface-visibility: hidden;
  border: 5px solid black;
  border-radius: 10%;
  height: 100%;
  overflow: hidden;
  width: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
`;

const FlipCardFront = styled.div`
  ${CardCommon};
  background-color: #bbb;
  color: black;
  position: relative; 
`;

const FlipCardBack = styled.div`
  ${CardCommon};
  background-color: black;
  color: white;
  position: absolute;
  transform: rotateY(180deg);
`;

const Photo = styled.img`
  height: 300px;
  width: 200px;
`;

const FrontText = styled.div`
  color: white;
  font-size: 20px;
  left: 16px;
  position: absolute;
  top: 8px;
`;

export default function Card(props) {
    return (
        <FlipCard>
            <CardInner>
                <FlipCardBack>
                    <h1>{props.cardData.name}</h1>
                    <p>{props.cardData.team}</p>
                    <p>Ranking #{props.cardData.ranking}</p>
                </FlipCardBack>
                <FlipCardFront>
                    <Photo src={props.cardData.imageSrc} alt="MJ"/>
                    <FrontText>{props.cardData.ranking}</FrontText>
                </FlipCardFront>
            </CardInner>
        </FlipCard>
    );
};