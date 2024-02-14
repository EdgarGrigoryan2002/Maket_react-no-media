import stlye from './content6.module.scss';
import kaput from '../img/kaput.png';
import txamard from '../img/txamard.png';
import txamard2 from '../img/txamard2.png';
import txamard3 from '../img/txamard3.png';
import axjik from '../img/axjik.png';
import kanach from '../img/kanachbajak.png';
import dexin from '../img/dexin.png';


const Content6 = ()=>{
    return(
       <div className="">
            <div className="container">
                    <div className={stlye.main}>
                        <div className="nkar">
                            <img src={kaput} alt="" />
                        </div>
                        <div className={stlye.text}>
                            <p>MEET OUR TEAM</p>
                            <h1>Awesome people with great</h1>
                            <h1>business skills</h1>
                        </div>
                            <div className={stlye.nkarner}>
                                <div className="">
                                    <img src={kanach} alt="" />
                                </div>
                                <div className="">
                                    <img src={txamard} alt="" />
                                </div>
                                <div className={stlye.txamard}>
                                    <img src={txamard2} alt="" />
                                </div>
                                <div className="">
                                    <img src={axjik} alt="" />
                                </div>
                                <div className={stlye.txamard}>
                                    <img src={txamard3} alt="" />
                                </div>
                                <div className={stlye.nkar}>
                                    <img src={dexin} alt="" />
                                </div>
                            </div>
                    </div>
            </div>
       </div>
    )
}

export default Content6;