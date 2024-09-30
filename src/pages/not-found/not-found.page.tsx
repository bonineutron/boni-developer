import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function NotFoundPage() {
   // configuration
   const navigate = useNavigate();

   // effects
   useEffect(() => {
      navigate('/es');
   }, []);

   return <></>;
}
