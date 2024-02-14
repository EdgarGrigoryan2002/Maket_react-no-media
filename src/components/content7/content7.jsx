import style from './content7.module.scss';
import icon from '../img/rozvikaput.png';
import gic from '../img/gic.png';
import nkarner from '../img/nkarner.png';



const Content7 = ()=>{
    return(
      <div className={style.main}>
        <div className="container">
            <div className="">
                <img src={icon} alt="" />
            </div>
            <div className={style.content}>
                <div className="">
                    <img src={gic} alt="" />
                </div>
                <div className={style.amboxj2}>
                <div className={style.text}>
                    <h4>TESTIMONAIL</h4>
                    <h1>They are awesome !</h1>
                    <p>
                        Kollit a do eiusmod tempor incididunt ut labore et do <br />
                        irure dolor in reprehenderit in voluptate velit esse <br />
                        cillum dolore eu fugiat nulla pariatur
                    </p>
                    <div className={style.glxavor}>
                        <div className={style.gcik}>
                        </div>
                       <div className={style.glxavor2}>
                            <div className={style.main2}>
                                <h4>Kabir Manjo</h4>
                            </div>
                            <div className={style.glxavor3}>
                                <p>Music Producer</p>
                            </div>
                       </div>
                    </div>
                    <div className={style.amboxj}>
                        <div className={style.erkar}></div>
                        <div className={style.klor}></div>
                        <div className={style.klor}></div>
                    </div>
                </div>
                <div className="">
                    <img src={nkarner} alt="" />
                </div>
                </div>
                
            </div>
        </div>
      </div>
    )
}

export default Content7;