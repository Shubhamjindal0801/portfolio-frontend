import React from 'react'
import './styles.css'
import Github from '../../assets/github-mark-white.png'
import Link from '../../assets/link_FILL0_wght400_GRAD0_opsz48.png'
import { Tooltip } from '@mui/material';
import homepageDarkImg from '../../assets/crypto/Homepage.png'
import homepageLightImg from '../../assets/crypto/Homepage Light.png'
import DashboardGrid from '../../assets/crypto/Dashboard Grid.png'
import DashboardList from '../../assets/crypto/Dashboard List.png'
import CoinPage from '../../assets/crypto/Coin Page.png'
import Comparepage from '../../assets/crypto/Compare page.png'
import WatchlistPage from '../../assets/crypto/Watchlist Page.png'
import footer from '../../assets/crypto/FooterF.png'
import HomepageMeShop from '../../assets/MeShop/Homepage.png'
import LoginMeShop from '../../assets/MeShop/LogInPage.png'
import SignupMeShop from '../../assets/MeShop/SignUpPage.png'
import ItemMeShop from '../../assets/MeShop/Item page.png'
import CartMeShop from '../../assets/MeShop/Cart Page.png'
import ProfileMeShop from '../../assets/MeShop/Profile Section.png'
import signupfinancily from '../../assets/Financily/SignUp Financily.png'
import logInfinancily from '../../assets/Financily/LogIn Financily.png'
import googlefinancily from '../../assets/Financily/Google Financily.png'
import tabularfinancily from '../../assets/Financily/Tabular Stats.png'
import incomefinancily from '../../assets/Financily/Income Stats.png'

function ProjectLandingPage() {


    return (
        <div className='project-page'>
            <h1 className='project-title'>Projects</h1>
            <div className='project-list'>
                <div className='project-header'>
                    <h3>1. CryptoTracker App</h3>
                    <div className='project-link'>
                        <Tooltip placement="bottom-start" title='GitHub Link'>
                            <a href='https://github.com/Shubhamjindal0801/crypto-tracker-website' target='__blank'><img src={Github} className='git-logo' /></a>
                        </Tooltip>
                        <Tooltip placement="bottom-start" title='App Link'>
                            <a href='https://crypto-tracker-website-hg9m.vercel.app/' target='__blank'>
                                <img src={Link} className='link-logo' />
                            </a>
                        </Tooltip>
                    </div>
                </div>
                <br />
                <p className='desciption'>• In the ever-evolving landscape of global finance, cryptocurrencies have become an undeniable phenomenon embraced by nations worldwide. Nevertheless, navigating the vast array of digital currencies in today's fast-paced era presents its own set of challenges. But fear not, for a compelling solution to this conundrum exists - behold the 'CryptoTracker App.' This cutting-edge and intuitive platform gracefully addresses the complexity, empowering users to explore a diverse selection of 100 different currencies with utmost ease. Seamlessly, users can delve into comprehensive comparisons and curate a personalized watchlist of their favored cryptocurrencies, staying in full control of their financial journey. With the 'CryptoTracker App' by their side, keeping abreast of the dynamic crypto market has never been more accessible and enlightening.</p><br />
                <p>• Furthermore, I have seamlessly integrated Toastify into the app, enhancing user experience with informative notifications. This addition ensures user enjoy a smoother and more engaging interaction with the application.</p><br />
                <p>• Skills Used: React, React-Router, Axios, Framer Motion, Chart JS, Local Storage and CoinGecko API</p><br /><hr />
                <h2 style={{ marginTop: '1rem', marginBottom: '1rem' }}>Features</h2>
                <div className='project-dec-with-img'>
                    <section>
                        <h3 style={{marginBottom:'0.5rem'}}>Homepage in Dark Mode</h3>
                        <Tooltip placement="top" title='Homepage in Dark Mode'><img src={homepageDarkImg} width='90%'/></Tooltip>
                    </section>
                    <section>
                        <h3 style={{marginBottom:'0.5rem'}}>Homepage in Light Mode</h3>
                        <Tooltip placement="top" title='Homepage in Light Mode'><img src={homepageLightImg} width='90%'/></Tooltip>
                    </section>
                </div>
                <div className='project-dec-with-img'>
                    <section>
                        <h3 style={{marginBottom:'0.5rem'}}>Dashboard Grid View</h3>
                        <Tooltip placement="top" title='Dashboard Grid View'><img src={DashboardGrid} width='90%'/></Tooltip>
                    </section>
                    <section>
                        <h3 style={{marginBottom:'0.5rem'}}>Dashboard List View</h3>
                        <Tooltip placement="top" title='Dashboard List View'><img src={DashboardList} width='90%'/></Tooltip>
                    </section>
                </div>
                <div className='project-dec-with-img'>
                    <section>
                        <h3 style={{marginBottom:'0.5rem'}}>Coin Page of a particular coin</h3>
                        <Tooltip placement="top" title='Coin Page'><img src={CoinPage} width='90%'/></Tooltip>
                    </section>
                    <section>
                        <h3 style={{marginBottom:'0.5rem'}}>Compare 2 different coins</h3>
                        <Tooltip placement="top" title='Comapre Page'><img src={Comparepage} width='90%'/></Tooltip>
                    </section>
                </div>
                <div className='project-dec-with-img'>
                    <section>
                        <h3 style={{marginBottom:'0.5rem'}}>Add coins to watchlist</h3>
                        <Tooltip placement="top" title='Watchlist Page'><img src={WatchlistPage} width='90%'/></Tooltip>
                    </section>
                    <section>
                        <h3 style={{marginBottom:'0.5rem'}}>Footer</h3>
                        <Tooltip placement="top" title='Footer'><img src={footer} width='90%'/></Tooltip>
                    </section>
                </div>
            </div>
            <div className='project-list'>
                <div className='project-header'>
                    <h3>2. MeShop App</h3>
                    <div className='project-link'>
                        <Tooltip placement="bottom-start" title='GitHub Link'>
                            <a href='https://github.com/Shubhamjindal0801/shopping-app' target='__blank'><img src={Github} className='git-logo' /></a>
                        </Tooltip>
                        <Tooltip placement="bottom-start" title='App Link'>
                            <a href='https://shopping-app-ten-beta.vercel.app/' target='__blank'>
                                <img src={Link} className='link-logo' />
                            </a>
                        </Tooltip>
                    </div>
                </div>
                <br />
                <p className='desciption'>• MeShop is a sophisticated webpage that offers users a seamless shopping experience, granting them access to a vast array of desirable items at the most competitive prices. The platform provides a diverse range of filters, enabling customers to customize their search based on their specific preferences and requirements. Once users have handpicked their desired items, they can effortlessly add them to their virtual cart, culminating in the placement of a successful order.</p><br />
                <p>• I utilized HTML, CSS, and JavaScript to craft the website's frontend, skillfully incorporating API integration for seamless product data retrieval. By implementing ES6 features, I ensured an efficient and optimized codebase, while adding captivating animations to elevate the overall user experience.</p><br />
                <p>• Skills Used: HTML, CSS, JavaScript, API, ES6, Animation, Local Storage</p><br /><hr />
                <h2 style={{ marginTop: '1rem', marginBottom: '1rem' }}>Features</h2>
                <div className='project-dec-with-img'>
                    <section>
                        <h3 style={{marginBottom:'0.5rem'}}>Homepage</h3>
                        <Tooltip placement="top" title='Homepage'><img src={HomepageMeShop} width='90%'/></Tooltip>
                    </section>
                    <section>
                        <h3 style={{marginBottom:'0.5rem'}}>Sign Up</h3>
                        <Tooltip placement="top" title='Sign Up'><img src={SignupMeShop} width='90%'/></Tooltip>
                    </section>
                </div>
                <div className='project-dec-with-img'>
                    <section>
                        <h3 style={{marginBottom:'0.5rem'}}>Log In</h3>
                        <Tooltip placement="top" title='Log In'><img src={LoginMeShop} width='90%'/></Tooltip>
                    </section>
                    <section>
                        <h3 style={{marginBottom:'0.5rem'}}>Item Preview Section</h3>
                        <Tooltip placement="top" title='List item'><img src={ItemMeShop} width='90%'/></Tooltip>
                    </section>
                </div>
                <div className='project-dec-with-img'>
                    <section>
                        <h3 style={{marginBottom:'0.5rem'}}>Cart Section</h3>
                        <Tooltip placement="top" title='Cart'><img src={CartMeShop} width='90%'/></Tooltip>
                    </section>
                    <section>
                        <h3 style={{marginBottom:'0.5rem'}}>Edit Your Profile</h3>
                        <Tooltip placement="top" title='Profile Page'><img src={ProfileMeShop} width='90%'/></Tooltip>
                    </section>
                </div>
            </div>
            <div className='project-list'>
                <div className='project-header'>
                    <h3>3. Financily Finance Tracker</h3>
                    <div className='project-link'>
                        <Tooltip placement="bottom-start" title='GitHub Link'>
                            <a href='https://github.com/Shubhamjindal0801/financily-project' target='__blank'><img src={Github} className='git-logo' /></a>
                        </Tooltip>
                        <Tooltip placement="bottom-start" title='App Link'>
                            <a href='https://financily-project-4qah.vercel.app/' target='__blank'>
                                <img src={Link} className='link-logo' />
                            </a>
                        </Tooltip>
                    </div>
                </div>
                <br />
                <p className='desciption'>• Financily presents itself as an exceptionally user-friendly online application designed to seamlessly manage your day-to-day expenses and income effortlessly. With its intuitive interface, this app empowers you to easily track both your earnings and expenditures while also providing you with insightful financial analyses through visually appealing charts. Now, gaining valuable insights into your financial patterns has never been more accessible and enjoyable.</p><br />
                <p>• Furthermore, I have seamlessly integrated Toastify into the app, enhancing the user experience with informative notifications. This addition ensures that users enjoy a smoother and more engaging interaction with the application.</p><br />
                <p>• Skills Used: React, React Router, Firebase, Google Authentication, Toastify</p><br /><hr />
                <h2 style={{ marginTop: '1rem', marginBottom: '1rem' }}>Features</h2>
                <div className='project-dec-with-img'>
                    <section>
                        <h3 style={{marginBottom:'0.5rem'}}>Sign Up Page</h3>
                        <Tooltip placement="top" title='Sign up'><img src={signupfinancily} width='90%'/></Tooltip>
                    </section>
                    <section>
                        <h3 style={{marginBottom:'0.5rem'}}>Log In page</h3>
                        <Tooltip placement="top" title='Log In'><img src={logInfinancily} width='90%'/></Tooltip>
                    </section>
                </div>
                <div className='project-dec-with-img'>
                    <section>
                        <h3 style={{marginBottom:'0.5rem'}}>Authentication given By Google</h3>
                        <Tooltip placement="top" title='Google Authentication'><img src={googlefinancily} width='90%'/></Tooltip>
                    </section>
                    <section>
                        <h3 style={{marginBottom:'0.5rem'}}>Finance Stats</h3>
                        <Tooltip placement="top" title='Finance'><img src={incomefinancily} width='90%'/></Tooltip>
                    </section>
                </div>
                <div className='project-dec-with-img'>
                    <section className='final-div'>
                        <h3 style={{marginBottom:'0.5rem'}}>Tabular Expression</h3>
                        <Tooltip placement="top" title='Tabular representation'><img src={tabularfinancily} width='45%'/></Tooltip>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ProjectLandingPage
