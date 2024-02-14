import style from './content3.module.scss'
import nkar from '../img/con3img.png';


const Content3 = ()=>{
    return(
        <div className={style.glxavor}>
            <div className="container">
                <div className={style.main}>
                    <div className={style.text}>
                        <h1>Most innovative <br />
                       creative team</h1>

                        <p className={style.text2}>Pore et dolore magna aliqua .Ut enim ad <br />
                           minium veniam,quis nostrud exerction</p>

                           <p>Duis aute irure in reprehender in voluptate <br />
                              vetit esse cillium eu fugiat nulla pariatur.Excap <br />
                              teur sint occae cat cupidatat non proident,sunt in <br />
                              culpa qui officia deser unt mollit anim id est laborum.</p>

                              <button >KNOW MORE </button>
                    </div>
                    <div className={style.nkarner}>
                        <img src={nkar} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content3;