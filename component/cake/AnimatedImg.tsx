import styled, { keyframes } from 'styled-components';

export const AnimatedImg = () => {
  return (
    <AnimatedImgDiv>
      <LightDecorationImg src="images/light_decoration.png" />
      <LightRadioImg src="images/light_radio.png" />
      <LightCandleImg src="images/light_candle.png" />
    </AnimatedImgDiv>
  );
};

const AnimatedImgDiv = styled.div`
  position: absolute;

  z-index: -1;
`;

const blinkingEffectRadio = () => {
  return keyframes`
    0%{
      opacity: 1;
    }
    40%{
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    60%{
      opacity: 1;
    }
    100%{
      opacity: 1;
    }
  `;
};
const blinkingEffectCandle = () => {
  return keyframes`
      0%{
        opacity: 0.7;
      }
      25%{
        opacity: 0.4;
      }
      50% {
        opacity: 0.7;
      }
      75%{
        opacity: 0.4;
      }

    `;
};

const blinkingEffectDecoration = () => {
  return keyframes`
        50%{
            opacity: 1;
        }
  
      `;
};
const LightRadioImg = styled.img`
  position: absolute;
  top: 26vh;
  right: -100vw;
  animation: ${blinkingEffectRadio} 2s linear infinite;
`;

const LightCandleImg = styled.img`
  position: absolute;
  top: 24vh;
  left: 21vw;
  opacity: 0.7;
  animation: ${blinkingEffectCandle} 0.7s linear infinite;
  mix-blend-mode: lighten;
`;

const LightDecorationImg = styled.img`
  position: absolute;
  /* border: solid red; */
  width: 99vw;
  opacity: 0.4;
  left: 1vw;
  top: -13vh;
  animation: ${blinkingEffectDecoration} 1s linear infinite;
`;
