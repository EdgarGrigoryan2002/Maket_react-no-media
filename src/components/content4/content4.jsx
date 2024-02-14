import style from './content.module.scss';
import nkar from '../img/shopicon.png';
import icon from '../img/icon.png';
import slaq from '../img/slaq.png';
import headphones from '../img/headphones.png';
import cartshop from '../img/shopping-cart.png';
import location from '../img/location.png';
import videocamera from '../img/video-camera.png';
import upload from '../img/upload.png';
import verjiicon from '../img/verjiicon.png';


const Content4 = ()=>{
    return(
        <div className={style.content}>
            <div className="container">
                    <div className={style.main}>
                        <div className="nkar">
                            <img src={nkar} alt="" />
                        </div>
                        <div className={style.text}>
                            <h4 style={{color: "#CD4EDB", textAlign: "end"}}>WHAT WE DO</h4>
                            <h1 >Service to solve all kinds of </h1>
                            <h1>business problem</h1>
                        </div>
                    </div>
                    <div className={style.allmain}>
                        <div className="">
                           <div className={style.main2}>
                           <div className={style.con1}>
                                <div className={style.conmain}>
                                <img src={icon} alt="" />
                                <h2>Bussiness Autimation</h2>
                                <p>Pore et dolore magna alique.Ut <br />
                                   errim ad minim veniam,quis nos</p>
                                   <p style={{textAlign: 'center',marginTop: '-15px'}}>trud exerci tation</p>
                                   <img src={slaq} alt="" />
                                </div>
                            </div>
                           <div className={style.con2}>
                           <div className={style.conmain2}>
                                <img src={headphones} alt="" />
                                <h2>Realtime Support </h2>
                                <p>Pore et dolore magna alique.Ut <br />
                                   errim ad minim veniam,quis nos</p>
                                   <p style={{textAlign: 'center',marginTop: '-15px'}}>trud exerci tation</p>
                                   <img src={slaq} alt="" />
                                </div>
                           </div>
                           </div>
                        </div>
                        <div className="">
                        <div className={style.main4}>
                           <div className={style.con4}>
                                <div className={style.conmain4}>
                                <img src={cartshop} alt="" />
                                <h2>Ecommerce Support</h2>
                                <p>Pore et dolore magna alique.Ut <br />
                                   errim ad minim veniam,quis nos</p>
                                   <p style={{textAlign: 'center',marginTop: '-15px'}}>trud exerci tation</p>
                                   <img src={slaq} alt="" />
                                </div>
                            </div>
                           <div className={style.con5}>
                           <div className={style.conmain5}>
                                <img src={location} alt="" />
                                <h2>Location Marking </h2>
                                <p>Pore et dolore magna alique.Ut <br />
                                   errim ad minim veniam,quis nos</p>
                                   <p style={{textAlign: 'center',marginTop: '-15px'}}>trud exerci tation</p>
                                   <img src={slaq} alt="" />
                                </div>
                           </div>
                           </div>
                        </div>
                        <div className="">
                        <div className={style.main6}>
                           <div className={style.con6}>
                                <div className={style.conmain6}>
                                <img src={videocamera} alt="" />
                                <h2>Ecommerce Support</h2>
                                <p>Pore et dolore magna alique.Ut <br />
                                   errim ad minim veniam,quis nos</p>
                                   <p style={{textAlign: 'center',marginTop: '-15px'}}>trud exerci tation</p>
                                   <img src={slaq} alt="" />
                                </div>
                            </div>
                           <div className={style.con7}>
                           <div className={style.conmain7}>
                                <img src={upload} alt="" />
                                <h2>Location Marking </h2>
                                <p>Pore et dolore magna alique.Ut <br />
                                   errim ad minim veniam,quis nos</p>
                                   <p style={{textAlign: 'center',marginTop: '-15px'}}>trud exerci tation</p>
                                   <img src={slaq} alt="" />
                                </div>
                           </div>
                           </div>
                        </div>
                    </div>
                    <div className={style.nkar}>  
                            <img src={verjiicon} alt="" />
                           
                        </div>
            </div>
        </div>
    )
}

export default Content4;