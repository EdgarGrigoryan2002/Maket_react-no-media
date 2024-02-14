import style from './header.module.scss';
import logo from '../img/logo.png';
import icconer from '../img/iconner.png'


const Header = ()=>{
    return(

        <>
                 <div className={style.glxavor}>
            <div className="container">
             <div className={style.navmenu}>
                <div className="logo">
                    <img className={style.logo1} src={logo} alt="" />
                </div>
               <div className={style.menu}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Works</li>
                    <li>News</li>
                    <li>Contact</li>
                    <button className={style.btn}>Get A Quote</button>
                    <li><img src={icconer} alt="" /></li>
                </ul>
               </div>
            </div>

            <div className={style.text}>
                <h1 >Work Smartly <br />
                with Endless <br />
                Possibility</h1>
                <p>Pore et dolore magna aliqua.Ut enim ad <br />
                minim veniam,quis nostrud exerction</p>
            </div>
            <div className={style.btn1}>
                <button >Get Started</button>
            </div>
            </div>
           </div>
        

          
        </>
       
           
    )
}

export default Header;