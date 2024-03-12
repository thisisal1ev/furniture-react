import photo1 from '../img/photo_3_2024-01-16_13-48-50.jpg'
import photo2 from '../img/photo_2024-01-16_13-50-10.jpg'
import photo3 from '../img/photo_8_2024-01-16_13-48-50.jpg'
import {styles} from '../style'

const Inspiration = () => {
  return (
    <div>
      <div className={`${styles.container} py-14`}>
        <h2 className="text-333 text-[32px] font-bold text-center mb-5">Inspiration Collection</h2>
        <p className="text-666 text-center text-xl mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className='flex items-center justify-between'>
          <img className='pt-12' src={photo1} alt="photo" />
          <img src={photo2} alt="photo" />
          <img className='pt-12' src={photo3} alt="photo" />
        </div>
      </div>
    </div>
  )
}

export default Inspiration