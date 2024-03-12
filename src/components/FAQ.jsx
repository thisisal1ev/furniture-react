import { faqs } from '../data'
import { styles } from '../style'

const FAQ = () => {
  return (
    <div className='bg-[#F2F5FF] py-10'>
        <div className={`${styles.container} grid grid-cols-3 gap-7`}>
            {
                faqs.map((faq)=>{
                    return(
                        <div className='flex items-start'>
                            <img className='mr-3' src={faq.img} alt={faq.title} />
                            <div>
                                <h3>{faq.title}</h3>
                                <p>{faq.text}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default FAQ