import './Footer.scss'
import Socials from "@/components/Socials";

const Footer = () => {
  const menuItems = [
    {
      title: 'Home',
      mainHref: '/home',
      link: ['Categories', 'Devices', 'Pricing', 'FAQ'],
      href: ['/categories', '/devices', '/pricing', '/faq'],
    },
    {
      title: 'Movies',
      mainHref: '/movies',
      link: ['Gernes', 'Trending', 'New Release', 'Popular'],
      href: ['/gernes', '/trending', '/new-release', '/popular'],
    },
    {
      title: 'Shows',
      mainHref: '/shows',
      link: ['Gernes', 'Trending', 'New Release', 'Popular'],
      href: ['/gernes', '/trending', '/new-release', '/popular'],
    },
    {
      title: 'Support',
      mainHref: '/support',
      link: ['Contact Us'],
      href: ['/contact-us'],
    },
    {
      title: 'Subscription',
      mainHref: '/subscription',
      link: ['Plans', 'Features'],
      href: ['/plans', '/features'],
    },
    {
      title: 'Connect With Us',
      mainHref: '/connect-with-us',
      socialLinks: [
        {
          label: 'Facebook',
          iconName: 'facebook',
        },
        {
          label: 'Twitter',
          iconName: 'twitter',
        },
        {
          label: 'LinkedIn',
          iconName: 'linked-in',
        },

      ]
    },
  ]

  const extraLinks = ['Terms of Use', 'Privacy Policy', 'Cookie Policy']
  const extraHrefs = ['/terms-of-use', '/privacy-policy', '/cookie-policy']

  return <footer>
    <div className="footer__inner container">
      <nav className="footer__menu">
        {menuItems.map(({title, mainHref, link, socialLinks, href}, index,) => (
          <div className="footer__menu-column" key={index}>
            <a className="footer__menu-title h6" href={mainHref}>{title}</a>
            {link?.length > 0 && (
              <ul className="footer__menu-list">
                {link.map((item, index) => (
                  <li className="footer__menu-item" key={index}>
                    <a className="footer__menu-link" href={href?.[0]}>{item}</a>
                  </li>
                ))}
              </ul>
            )}
            {socialLinks?.length > 0 && (
              <Socials
                className="footer__soc1als"
                links={socialLinks}
              />
            )}
          </div>
        ))}
      </nav>
      <div className="footer__extra">
        <p className="footer__copyright">
          @ <time dateTime="2023">2023</time> streamvib, All Rights Reserved
        </p>
        <div className="footer__extra-links">
          {extraLinks.map((text, index) => (
            <a
              className="footer__extra-link"
              href={extraHrefs[index]}
              key={index}
            >{text}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
}

export default Footer