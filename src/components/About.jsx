/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image'
import styles from '../assets/CSS/About.module.css'
import bannerImg from '../assets/images/banner-2.webp'
import sign from '../assets/images/sign.png'

function About() {
  return (
    <section className="m-t-b-50 pt-100">
      <div className={`${styles.about}  d-flex-between`}>
        <div className={styles.aboutImg}>

          <Image src={bannerImg} alt="Banner" />

        </div>

        <div className={styles.aboutContent}>
          <h2>We’r a dynamic team of creatives people innovation & Marketing Expert.</h2>

          <div className={`${styles.aboutContentHead} mt-30`}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 21.752h-.08a.751.751 0 0 1-.66-.83l2-18c.05-.41.42-.7.83-.66.41.05.71.42.66.83l-2 18c-.05.38-.37.66-.75.66ZM14 21.752h-.08a.751.751 0 0 1-.66-.83l2-18c.05-.41.41-.7.83-.66.41.05.71.42.66.83l-2 18c-.05.38-.37.66-.75.66Z"
                  fill="#00d747"
                />
                <path
                  d="M21.5 9.75h-18c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM20.5 15.75h-18c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                  fill="#00d747"
                />
              </svg>
            </div>
            <div>
              <h4>Best Digital Agency in Asia</h4>

              <p>
                We provide marketing services to startups and small businesses to looking for a
                partner of their digital media, design & dev, lead generation, and communications
                requirents. We work with you, not for you. Although we have great resources.
              </p>
            </div>
          </div>

          <div className={`${styles.sign} d-flex-between`}>
            <div>
              <Image src={sign} alt="BANNER" />
            </div>

            <div className={styles.moreBtn}>
              <p>Learn More</p>

              <a href="#" className="forIcon">
                MORE ABOUT US
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill="#FFF"
                    d="M14.43 18.82c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06L19.44 12 13.9 6.46a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l6.07 6.07c.29.29.29.77 0 1.06l-6.07 6.07c-.15.15-.34.22-.53.22z"
                  />
                  <path
                    fill="#FFF"
                    d="M20.33 12.75H3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.83c.41 0 .75.34.75.75s-.34.75-.75.75z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
