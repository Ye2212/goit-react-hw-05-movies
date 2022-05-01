import { GoBackBtn, ArrowBack } from './GoBackBtn.styled';

import { useNavigate } from 'react-router-dom';
export default function GoBackButton({ location }) {
  const navigate = useNavigate();
  return (
    <GoBackBtn
      onClick={() => {
        navigate(location?.state?.from ?? '/');
      }}
    >
      <ArrowBack />
      Go Back
    </GoBackBtn>
  );
}
