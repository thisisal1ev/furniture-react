import { styles } from '../style'
import beautify from '../img/photo_6_2024-01-16_13-48-50.jpg'
import tumaloq from '../img/tumaloq.png'

const Beautify = () => {
  return (
    <div className='bg-[#F2F5FF]'>
      <div className={`${styles.container} flex items-center justify-between pt-16 pb-6`}>
        <div className='mr-[62px] w-[514px]'>
          <h2 className='text-3xl leading-normal font-bold mb-5'>Beautify Your Space</h2>
          <p className='text-666 text-xl leading-[39px] mb-7'>Do eiusmod tempor incididunt ut labore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

          <a className={`${styles.mainLink}`} href="#">
            Learn More
          </a>
        </div>

        <div className='relative'>
          <img src={beautify} alt="beautify" className='z-50 relative' />
          <img className='absolute -right-20 top-36 -z-[5]' src={tumaloq} alt="tumaloq" />
        </div>
      </div>
    </div>
  )
}

export default Beautify