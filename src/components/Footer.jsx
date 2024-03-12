import { styles } from '../style'
import photo1 from '../img/photo2.jpg'

const Footer = () => {
  return (
    <div className={`bg-[#03344F] py-14`}>
      <div className={`${styles.container} flex items-center justify-center`}>
        <div className='mr-5'>
          <h3 className='mb-8 text-white text-2xl font-bold'>Beauty Care</h3>

          <p className='text-white text-lg leading-8 mb-5 font-normal w-[400px]'>Do eiusmod tempor incididunt ut labore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

          <a className='text-2xl font-bold text-white' href="#">Follow Us</a>
        </div>

        <div>
          <h2 className='text-2xl font-bold text-white mb-5'>Instagram Shop</h2>

          <div className='flex items-center justify-between space-x-4'>
            <img src={photo1} alt="photo" />
            <img src={photo1} alt="photo" />
            <img src={photo1} alt="photo" />
            <img src={photo1} alt="photo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer