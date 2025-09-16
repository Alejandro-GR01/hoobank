import styles from '../style'
import {logo} from '../assets'
import {footerLinks, socialMedia} from '../constants'

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY } flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex-col w-[100%] justify-center sm:justify-start mr-0'>
          <img src={logo} alt="hoobank" className='w-[266px] h-[72px] object-contain'/>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments aeasy, reliable and secure.</p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-center sm:justify-between flex-wrap md:mt-0 mt-10 gap-4'>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title} className='flex flex-col items-center sm:items-start   sm:my-0 my-4 min-w-[150px]'>
              <h2 className='font-poppins font-medium text-[18px] leading-[27px] text-white '>{footerLink.title}</h2>
              <ul className='list-none mt-4 text-center sm:text-left '>
                {footerLink.links.map((link, index)=> (
                  <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-white opacity-60 hover:text-[#00f6ff] cursor-pointer  ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>{link.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      <div className='w-full flex  justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white '>
          2025 HooBank. All Rights Reserved. 
        </p>

        <div className='flex flex-row md:mt-0 mt-6 '>
          {socialMedia.map((social, index) => (
            <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-container cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0' }`}/>
          ))}
        </div>
      </div>
    </section>
  )


export default Footer