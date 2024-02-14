import style from './content5.module.scss';
import karmirnkar from '../img/karmir.png';
import kaktus from '../img/kaktusnkar.png';
import rozvi from '../img/rozvi.png';
import orange from '../img/orange.png';
import heraxos from '../img/heraxos.png';
import kanach from '../img/kanach.png';


const Content5 = ()=>{
    return(
        <div className={style.main}>
             <div className="container-fluid">
                    <img src={karmirnkar} alt="" />
                </div>
            <div className="container">
                <div className={style.text}>
                    <p>OUR PROJECT</p>
                    <h1>Check the real innovation  of</h1>
                    <h1>problem solving</h1>
                </div>
                <div className={style.glxavor}>
                    <div className="">
                            <img src={kaktus} alt="" />
                    </div>
                    <div className={style.content}>
                        <p className={style.texter}>Development</p>

                        <h3>Jodi kokhone vul hoye jay <br />
                            tumi oporadh nio na </h3>

                        <p className={style.ajtext}>Excepteur sint occae cat cupidatat non proident,sunt in culpa <br />
                        qui officia deser unt mollirt a do eiusmod tempor incididunt ut <br />
                        labore et dolore magna aliqua   </p>

                        <button >
                            View Project 
                        </button>
                    </div>
                </div>
                <div className={style.rozvinkar}>
                    <img src={rozvi} alt="" />
                </div>
                <div className={style.content2}>
                    <div className="">
                    <p className={style.texter2}>Research & Analytics</p>

                         <h3>Ei biristi veja rate tuminei bole <br />
                             somoy amar katena</h3>

                         <p className={style.ajtext}>Excepteur sint occae cat cupidatat non proident,sunt in culpa <br />
                         qui officia deser unt mollirt a do eiusmod tempor incididunt ut <br />
                         labore et dolore magna aliqua   </p>

                              <button >
                              View Project 
                             </button>
                    </div>
                    <div className="">
                        <img style={{width: "400px"}} src={orange} alt="" />
                    </div>
                </div>
                <div className={style.content3}>
                  <div className="">
                        <img style={{width: "400px"}} src={heraxos} alt="" />
                    </div>

                    <div className="">
                    <p className={style.texter3}>UI/UX Engineering</p>

                         <h3>Ami jare chaire se thake mori <br />
                             ontore</h3>

                         <p className={style.ajtext}>Excepteur sint occae cat cupidatat non proident,sunt in culpa <br />
                         qui officia deser unt mollirt a do eiusmod tempor incididunt ut <br />
                         labore et dolore magna aliqua   </p>

                              <button >
                              View Project 
                             </button>
                    </div>
                </div>
                <div className={style.main2}>
                    <img src={kanach} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Content5;