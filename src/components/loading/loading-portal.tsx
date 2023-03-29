import { memo } from 'react';
import LoadingPortal from '@/assets/portal-rick-and-morty.gif';

const Portal = () => {
    return <img src={LoadingPortal.src} alt="loading portal" />
};

export default memo(Portal);