import Image from 'next/image'
import styles from '../assets/CSS/Footer.module.css'
import logo from '../assets/images/logo.png'

export default function Footer() {
  // scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  const getFooterBGImg = require('../assets/images/footer.webp')
  const footerBackgroundImg = {
    backgroundImage: `url(${JSON.stringify(getFooterBGImg.default.src)})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '85vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 15%',
  }

  return (
    <footer className={styles.footer} style={footerBackgroundImg}>
      <div className="container ">
        <div className={`${styles.footerMain} flex-wrap mt-50`}>
          <div className={styles.footerCard}>
            <Image src={logo} alt="LOGO" />

            <ul className="mt-20">
              <li>
                <b>gulluinc@gmail.com</b>
              </li>
              <li className="primaryColor">202. 277. 3894</li>
            </ul>
          </div>
          <div className={styles.footerCard}>
            <h3>Quick Links</h3>
            <ul className="mt-20">
              <li>How it Works</li>
              <li>Guarantee</li>
              <li>Security</li>
              <li>Report Bug</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className={styles.footerCard}>
            <h3>About Us</h3>
            <ul className="mt-20">
              <li>About Singleton</li>
              <li>Jobs</li>
              <li>Team</li>
              <li>Testimonials</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className={styles.footerCard}>
            <h3>Subscribe Us</h3>
            <input
              className="mt-20"
              type="text"
              placeholder="Enter your email"
            />
            <ul className={styles.footerCardIcon}>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill="#d9e3f0"
                    d="M22 16.19c0 3.64-2.17 5.81-5.81 5.81H15c-.55 0-1-.45-1-1v-5.77c0-.27.22-.5.49-.5l1.76-.03c.14-.01.26-.11.29-.25l.35-1.91a.303.303 0 00-.3-.35l-2.13.03c-.28 0-.5-.22-.51-.49l-.04-2.45c0-.16.13-.3.3-.3l2.4-.04c.17 0 .3-.13.3-.3l-.04-2.4c0-.17-.13-.3-.3-.3l-2.7.04a2.996 2.996 0 00-2.95 3.05l.05 2.75c.01.28-.21.5-.49.51l-1.2.02c-.17 0-.3.13-.3.3l.03 1.9c0 .17.13.3.3.3l1.2-.02c.28 0 .5.22.51.49l.09 5.7c.01.56-.44 1.02-1 1.02h-2.3C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81v8.38z"
                  />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill="#d9e3f0"
                    d="M21.74 11.07a.989.989 0 00-.99-.89H13.2c-.55 0-1 .45-1 1v1.71c0 .55.45 1 1 1h4.51c-.11.92-.71 2.31-2.04 3.24-.85.59-1.98 1-3.47 1-.07 0-.13 0-.2-.01-2.55-.08-4.71-1.79-5.49-4.14A6.23 6.23 0 016.18 12c0-.69.12-1.36.32-1.98.06-.18.13-.36.21-.54.92-2.07 2.93-3.53 5.29-3.6.06-.01.13-.01.2-.01 1.43 0 2.5.47 3.25.99.39.27.91.21 1.25-.12l1.39-1.36c.44-.43.4-1.16-.1-1.52C16.4 2.69 14.46 2 12.2 2c-.07 0-.13 0-.2.01a9.96 9.96 0 00-8.73 5.5C2.59 8.87 2.2 10.39 2.2 12c0 1.61.39 3.13 1.07 4.49h.01a9.956 9.956 0 008.72 5.5c.07.01.13.01.2.01 2.7 0 4.97-.89 6.62-2.42 1.89-1.75 2.98-4.31 2.98-7.36 0-.43-.02-.8-.06-1.15z"
                  />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 172 172"
                >
                  <g
                    fill="none"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <path d="M0,172v-172h172v172z" fill="none" />
                    <g fill="#d9e3f0">
                      <path d="M155.04367,28.88883c-5.84083,2.75917 -15.781,7.9335 -20.77617,8.9225c-0.1935,0.05017 -0.35117,0.11467 -0.5375,0.16483c-5.8265,-5.74767 -13.81017,-9.3095 -22.64667,-9.3095c-17.80917,0 -32.25,14.44083 -32.25,32.25c0,0.93883 -0.07883,2.666 0,3.58333c-23.06233,0 -39.904,-12.03283 -52.51017,-27.4985c-1.68417,-2.07833 -3.47583,-0.99617 -3.8485,0.48017c-0.8385,3.33967 -1.12517,8.9225 -1.12517,12.90717c0,10.0405 7.8475,19.90183 20.06667,26.015c-2.25033,0.5805 -4.73,0.99617 -7.31,0.99617c-3.03867,0 -6.536,-0.7955 -9.59617,-2.40083c-1.13233,-0.59483 -3.57617,-0.43 -2.85233,2.46533c2.9025,11.60283 16.1465,19.75133 27.97867,22.1235c-2.6875,1.58383 -8.42083,1.26133 -11.05817,1.26133c-0.97467,0 -4.3645,-0.22933 -6.5575,-0.50167c-1.9995,-0.24367 -5.074,0.27233 -2.50117,4.171c5.5255,8.3635 18.02417,13.61667 28.78133,13.81733c-9.90433,7.76867 -26.101,10.60667 -41.61683,10.60667c-3.139,-0.07167 -2.98133,3.5045 -0.4515,4.83033c11.44517,6.00567 30.19317,9.56033 43.58767,9.56033c53.24833,0 83.51317,-40.58483 83.51317,-78.8405c0,-0.61633 -0.01433,-1.90633 -0.03583,-3.2035c0,-0.129 0.03583,-0.25083 0.03583,-0.37983c0,-0.1935 -0.05733,-0.37983 -0.05733,-0.57333c-0.0215,-0.97467 -0.043,-1.88483 -0.0645,-2.35783c4.22117,-3.04583 10.6855,-8.33483 13.9535,-12.384c1.11083,-1.376 0.215,-3.04583 -1.29717,-2.52267c-3.8915,1.3545 -10.621,3.9775 -14.835,4.47917c8.43517,-5.58283 12.60617,-10.44183 16.1895,-15.83833c1.2255,-1.84183 -0.30817,-3.71233 -2.17867,-2.82367z" />
                    </g>
                  </g>
                </svg>
              </li>
            </ul>
          </div>
        </div>

        <div className={`${styles.footerEnd}  d-flex-between  pt-100`}>
          <div className="mt-5">
            <p> © 2022 Gully.ly, All rights reserved.</p>
          </div>
          <div className={`${styles.reserved} flex-wrap `}>
            <div>
              <h3>
                <span className="primaryColor">9087 </span>
                Products
              </h3>
            </div>
            <div>
              <h3>
                <span className="primaryColor">54288</span>
                {' '}
                Members
              </h3>
            </div>
            <div>
              <h3>
                <span className="primaryColor">1121 </span>
                {' '}
                Shops
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.top} onClick={() => scrollToTop()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill="#00d747"
            d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm4.06 11.79c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-3-3-3 3c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l3.53-3.53c.29-.29.77-.29 1.06 0l3.53 3.53c.29.3.29.77 0 1.06z"
          />
        </svg>
      </div>
    </footer>
  )
}
