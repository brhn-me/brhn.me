import logo from '../public/images/logo.svg';
import Image from 'next/image';


const Logo = () => {
  return (
    <Image className="logo" src={logo} />
  )
}

export default Logo
