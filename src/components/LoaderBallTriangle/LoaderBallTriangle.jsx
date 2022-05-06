import { LoaderWrapper } from './LoaderBallTriangle.styled';
import { BallTriangle } from 'react-loader-spinner';
function LoaderBallTriangle() {
  return (
    <LoaderWrapper>
      <BallTriangle color="#24292f" height={100} width={100} />
    </LoaderWrapper>
  );
}
export default LoaderBallTriangle;
