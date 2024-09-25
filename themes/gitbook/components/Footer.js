import { siteConfig } from '@/lib/config'
import SocialButton from './SocialButton'
/**
 * 站点也叫
 * @param {*} param0
 * @returns
 */
const Footer = ({ siteInfo }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='z-20 bg:white dark:bg-hexo-black-gray justify-center text-center w-full text-sm relative'>
      <hr className='pb-2' />

      <SocialButton />

      <div className='flex justify-center pt-1'>
        <div>
          <i className='mx-1 animate-pulse fas fa-heart' />{' '}
          <a
            href={siteConfig('LINK')}
            className='underline font-bold text-gray-500 dark:text-gray-300 '>
            {siteConfig('AUTHOR')}
          </a>
          .<br />
        </div>
        © {`${copyrightDate}`}
      </div>



      {siteConfig('BEI_AN') && (
        <>
          <i className='fas fa-shield-alt' />{' '}
          <a href='https://beian.miit.gov.cn/' className='mr-2'>
            {siteConfig('BEI_AN')}
          </a>
          <br />
        </>
      )}

      <span className='hidden busuanzi_container_site_pv'>
        <i className='fas fa-eye' />
        <span className='px-1 busuanzi_value_site_pv'> </span>{' '}
      </span>
      <span className='pl-2 hidden busuanzi_container_site_uv'>
        <i className='fas fa-users' />{' '}
        <span className='px-1 busuanzi_value_site_uv'> </span>{' '}
      </span>
      {/* SEO title */}
      <h1 className='pt-1 hidden'>{siteConfig('TITLE')}</h1>
    </footer>
  )
}

export default Footer
