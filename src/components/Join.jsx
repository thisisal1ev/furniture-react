import { styles } from '../style'

const Join = () => {
  return (
    <div className='bg-[#f2f5ff] py-14'>
      <div className={`${styles.container}`}>
        <h2 className='text-333 text-[32px] font-bold text-center mb-5'>Join Our Mailing List</h2>
        <p className="text-666 text-center text-xl mb-10">Sign up to receive inspiration, product updates, and special offers from our team.</p>

        <div className='flex items-center justify-center'>
          <form className='flex items-center justify-between w-[486px]'>
            <input type='email' placeholder='example@gmail.com' className='w-full px-10 py-5 border-2 border-gray-300' required/>
            <button className=' px-10 py-5 bg-darkBlue font-bold text-lg text-white'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Join