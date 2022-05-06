import { Main } from './MainContent.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import LoaderBallTriangle from 'components/LoaderBallTriangle/LoaderBallTriangle';
export default function MainContent() {
  return (
    <Main>
      <Suspense fallback={<LoaderBallTriangle />}>
        <Outlet />
      </Suspense>
    </Main>
  );
}
