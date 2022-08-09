/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import styles from '../assets/CSS/Header.module.css';

export default function LandingPage({ bannerImg }) {
    return (
        //  main-header

        <div className={styles.banner}>
            <div className={`${styles.bannerContent} pt-50`}>
                <p>We'r Awesome</p>

                <ul>
                    <li className="border-btm-lg active">Digital Agency</li>
                    <li className="border-btm-lg ">That Help You To</li>
                    <li className="border-btm-lg ">Go Ahead</li>
                </ul>

                <button type="button" className="btn-lg mt-50">
                    Explore Now
                </button>
            </div>
            <div >
               
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
}
