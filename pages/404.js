import Link from 'next/link';
import {useEffect} from 'react'
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
      setTimeout(() => {
          // router.go(-1)
          router.push('/');
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Ooops Not found</h1>
      <Link href='/'>
        <a>Go back to Homepage</a>
      </Link>
    </div>
  );
};

export default NotFound;
