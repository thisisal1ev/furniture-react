import { styles } from '../style'

const Hero = () => {
  return (
    <div className='py-40 bg-hero-pattern bg-no-repeat bg-center'>
        <div className={`${styles.container} flex justify-end`}>
            <div className="p-10 bg-[#DFE9F4] rounded-[10px] w-full max-w-[643px]">
                <span className='inline-block text-base font-semibold tracking-[3px] mb-5'>New Arrival</span>
                <h2 className='text-[52px] leading-[65px] font-bold text-darkBlue mb-5'>Discover Our <br /> New Collection</h2>
                <p className='text-lg font-medium leading-10 mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <a href="#" className={`${styles.mainLink}`}>BUY Now</a>
            </div>
        </div>
    </div>
  )
}

export default Hero