/* eslint-disable import/no-unresolved */
import { Autoplay } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import styles from '../assets/CSS/Testimonial.module.css'
import bannerImg from '../assets/images/banner-2.webp'
import clientProfileOne from '../assets/images/clientOne.jpg'

export default function Testimonianls() {
  return (
    <section className="m-t-b-50">
      <div className={`${styles.testimonials} d-flex-between`}>
        <div className={styles.testimonialsBanner}>
          <Image src={bannerImg} alt="Profile" />

        </div>

        <div className={styles.testimonialsContent}>
          <div className={styles.testimonialsHead}>
            <h6>TESTIMONIALS</h6>
            <h2>
              Check what’s our client
              {' '}
              <br />
              {' '}
              Say about us
            </h2>
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop
              loopFillGroupWithBlank
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 150,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <div>
                <SwiperSlide>
                  {' '}
                  <div className={`${styles.testimonialsSlider} mt-50 d-flex-between`}>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8.09 11.631H3.4c.08-4.67 1-5.44 3.87-7.14.33-.2.44-.62.24-.96a.687.687 0 0 0-.95-.24c-3.38 2-4.56 3.22-4.56 9.03v5.39c0 1.71 1.39 3.09 3.09 3.09h3c1.76 0 3.09-1.33 3.09-3.09v-3c0-1.75-1.33-3.08-3.09-3.08ZM18.909 11.631h-4.69c.08-4.67 1-5.44 3.87-7.14.33-.2.44-.62.24-.96a.698.698 0 0 0-.96-.24c-3.38 2-4.56 3.22-4.56 9.04v5.39c0 1.71 1.39 3.09 3.09 3.09h3c1.76 0 3.09-1.33 3.09-3.09v-3c.01-1.76-1.32-3.09-3.08-3.09Z"
                          fill="#00d747"
                        />
                      </svg>
                    </div>
                    <div className="testimonialsSliderContent">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas
                        doloremque, iste est maiores hic magnam dolorum fugit, vel voluptates autem.
                        Veniam sint explicabo id nihil consequuntur voluptatibus? Nemo optio quasi,
                        repudiandae magni sed,
                      </p>

                      <div className={`${styles.testimonialsSliderAuthor} d-flex-between mt-50`}>
                        <div
                          className={`${styles.testimonialsSliderAuthorProfile} d-flex-between `}
                        >
                          <div>

                            <Image src={clientProfileOne} alt="Profile" />

                          </div>
                          <div>
                            <p>
                              <b>Nazmul Hassan</b>
                            </p>
                            <p>CEO, Company</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <div>
                  <button type="button">Prv</button>
                  <button type="button">Next</button>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
