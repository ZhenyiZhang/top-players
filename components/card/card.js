import styled from 'styled-components';

const CardLayer = styled.div`
  background-color: transparent;
  width: 300px;
  height: 400px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
`;

const CardInner = styled.div`
  &:hover {transform: rotateY(180deg);}
  border-radius: 5%;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d; 
`;

const FlipCard = `
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`;

const FlipCardFront = styled.div`
  ${FlipCard}
  background-color: #bbb;
  color: black;
`;

const FlipCardBack = styled.div`
  ${FlipCard}
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
`;

const Photo = styled.img`
    width: 300px;
    height: 400px;
    border-radius: 5%;
`;

export default function Card(cardData) {
    return (
        <CardLayer>
            <CardInner>
                <FlipCardBack>
                    <h1>Michael Jordan</h1>
                    <p>Chicago Bulls</p>
                    <p>6-time champs</p>
                </FlipCardBack>
                <FlipCardFront>
                    <Photo src="/images/michael-jordan.jpg" alt="MJ"/>
                </FlipCardFront>
            </CardInner>
        </CardLayer>
    );
};