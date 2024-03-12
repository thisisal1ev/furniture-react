import {styles} from '../style'

const Header = () => {
  return (
    <header className='py-10'>
        <div className={`${styles.container} flex items-center justify-between`}>
            <a href="index.html">
                <h1 className='font-bold text-[34px] text-darkBlue'>Furniture</h1>
            </a>
            <nav>
                <ul className='flex items-center space-x-16'>
                    <li>
                        <a className='text-333 text-sm font-semibold' href="#">Home</a>
                    </li>
                    <li>
                          <a className='text-333 text-sm font-semibold' href="#">Services</a>
                    </li>
                    <li>
                          <a className='text-333 text-sm font-semibold' href="#">Doctors</a>
                    </li>
                    <li>
                          <a className='text-333 text-sm font-semibold' href="#">Products</a>
                    </li>
                    <li>
                          <a className='text-333 text-sm font-semibold' href="#">Gallery</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header