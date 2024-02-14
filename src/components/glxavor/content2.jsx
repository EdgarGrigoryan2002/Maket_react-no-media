import style from './header.module.scss';
import icconnav from '../img/iconnav.png';
import icontetr from '../img/icontetr.png';
import iconuser from '../img/iconuser.png';

const Content2 = ()=>{
    return(
        <div className='container'>
        <div className={style.content2}>
            <div className={style.context1}>          
            <p>BUILD TRUST FIRST</p>
            <h1 style={{fontWeight: 'bold'}}>Control  your business with a </h1>
            <h1 style={{fontWeight: 'bold'}}> single tap</h1>
            </div>
            <div className={style.main}>
            <div className={style.borderner}>
                    <div className={style.main2}>
                        <img src={icconnav} alt="" />
                        <h1 style={{textAlign: 'center'}}>Complete business 
                           Control</h1>
                        <p style={{marginTop: '30px'}}>Pore et dolore magna aliqua <br />
                        Ut enim ad minim veniam, quit <br />
                        nos tus  exerci tation</p>
                    </div>
            </div>
            <div className={style.main3}>
                      <div className={style.borderner2}>
                     <div className={style.main4}>
                     <img src={icontetr} alt="" />
                        <h1>Critical analytics <br />
                           and repost </h1>
                        <p style={{marginTop: '30px'}}>Pore et dolore magna aliqua <br />
                        Ut enim ad minim veniam, quit <br />
                       nos tus  exerci tation</p>
                     </div>
                      </div>
                    </div>
                    <div className={style.main5}>
                      <div className={style.borderner4}>
                     <div className={style.main6}>
                     <img src={iconuser} alt="" />
                        <h1>User satisfaction <br />
                        guarranted</h1>
                        
                        <p style={{marginTop: '30px'}}>Pore et dolore magna aliqua <br />
                        Ut enim ad minim veniam, quit <br />
                       nos tus  exerci tation</p>
                     </div>
                      </div>
                    </div>
        </div>
        </div>
       
    </div>
    )
}
export default Content2;