import style from './content9.module.scss';
import axjik from '../img/axjik2.png';
import srtik from '../img/srtik.png';
import axjik3 from '../img/axjik3.png';
import axjik4 from '../img/axjik4.png';


const Content9 = ()=>{
    return(
            <div className={style.main}>
                    <div className="container">
                        <div className={style.glxavor}>
                           <div className={style.text}>
                                <h3>FROM OUR BLOG</h3>
                                <h1>Get lastest update</h1>
                           </div>
                        <div className={style.content}>
                                <div className={style.text2}>
                                    <h4 style={{fontWeight: "bold"}}>Go to Blog</h4>
                                </div>
                                <div className={style.gic}></div>
                            </div>
                        </div>
                        <div className={style.main2}>
                            <div className={style.content1}>
                                <div className="">
                                <p style={{color: '#FF5E85',fontWeight: 'bold', marginLeft: '30px'}}>App Development</p>
                                <h4 style={{fontWeight: 'bold', marginLeft: '30px'}}>When the musics over turn <br />
                                    off the light</h4>
                                </div>
                                <p style={{textAlign: 'center',fontWeight: 'bold',color: '#847F7F',fontSize: '20px'}}>Excep teur sint occae cat cupid <br />
                                   atat non proident,sunt in culpa <br />
                                qui officia deser unt mollit........</p>
                                <div className={style.glxavor2}>
                                    <div className="">
                                        <img src={axjik} alt="" />
                                    </div>
                                    <div style={{marginTop: '10px'}}>
                                        <img src={srtik} alt=""  /> <span>22</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.content2}>
                                <div className="">
                                <p style={{color: '#58DBB2',fontWeight: 'bold', marginLeft: '30px'}}>Design</p>
                                <h4 style={{fontWeight: 'bold', marginLeft: '30px'}}>When the musics over turn <br />
                                    off the light</h4>
                                </div>
                                <p style={{textAlign: 'center',fontWeight: 'bold',color: '#847F7F',fontSize: '20px'}}>Excep teur sint occae cat cupid <br />
                                   atat non proident,sunt in culpa <br />
                                qui officia deser unt mollit........</p>
                                <div className={style.glxavor2}>
                                    <div className="">
                                        <img src={axjik3} alt="" />
                                    </div>
                                    <div style={{marginTop: '10px'}}>
                                        <img src={srtik} alt=""  /> <span>22</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.content3}>
                                <div className="">
                                <p style={{color: '#FF9B59',fontWeight: 'bold', marginLeft: '30px'}}>Research</p>
                                <h4 style={{fontWeight: 'bold', marginLeft: '30px'}}>When the musics over turn <br />
                                    off the light</h4>
                                </div>
                                <p style={{textAlign: 'center',fontWeight: 'bold',color: '#847F7F',fontSize: '20px'}}>Excep teur sint occae cat cupid <br />
                                   atat non proident,sunt in culpa <br />
                                qui officia deser unt mollit........</p>
                                <div className={style.glxavor2}>
                                    <div className="">
                                        <img src={axjik4} alt="" />
                                    </div>
                                    <div style={{marginTop: '10px'}}>
                                        <img src={srtik} alt=""  /> <span>22</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    )
}

export default Content9;