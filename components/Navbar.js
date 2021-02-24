import Link from 'next/link';
import Image from 'next/Image'
const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image src='/logo.png' width={180} height={80}/>
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>

      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/ninjas'>
        <a>Ninja List</a>
      </Link>
    </nav>
  );
};

export default Navbar;
