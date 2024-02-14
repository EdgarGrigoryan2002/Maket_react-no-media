import style from './content8.module.scss';
import phone from '../img/phone.png';
import email from '../img/email.png';
import address from '../img/address.png';
import kaputnkar from '../img/kaputnkar.png';

const Content8 = ()=>{
    return(
       <div className={style.main}>
        <div className="container">
            <div className={style.content}>
                <p>CONTACT US</p>
                <h1>Stay connected with us for</h1>
                <h1>any reason</h1>
            </div>
                <div className={style.content2}>
                    <div className={style.contenttext}>
                        <h1 style={{fontWeight: 'bold'}}>Write us a message</h1>
                                <form action="">
                                    <input type="text" className='form-control' placeholder='Your name' />
                                    <input type="emaik" className='form-control mt-3' placeholder='Your Email' />
                                    <input type="text" className='form-control  mt-3' placeholder='Subject' />
                                    <textarea className='form-control mt-3' cols="54" rows="10" placeholder='Start writing message here'></textarea>
                                    <button className={style.btn}>Get Started</button>
                                </form>
                    </div>
                    <div className={style.glxavor}>
                        <p>Lorem ipsum, dolor sit amet consectetur <br />
                            adipisicing elit,sed do eiusmod tempor inci <br />
                            didunt ut labore et dolore magna aliqua.</p>
                            <div className={style.main2}>
                                <div className="">
                                    <img src={phone} alt="" />
                                </div>
                                <div className={style.text}>
                                    <h1>Phone</h1>
                                    <p>0123-4567-8910</p>
                                </div>
                            </div>
                            <div className={style.main3}>
                                <div className="">
                                    <img src={email} alt="" />
                                </div>
                                <div className={style.text}>
                                    <h1>Email</h1>
                                    <p>hello@raindesign.com</p>
                                </div>
                            </div>
                            <div className={style.main4}>
                                <div className="">
                                    <img src={address} alt="" />
                                </div>
                                <div className={style.text}>
                                    <h1>Address</h1>
                                    <p>20,Bordeshi,Amin Bazar <br />
                                    Savar,Dhaka</p>
                                </div>
                            </div>
                    </div>
                </div>
                        <div className={style.con}>
                            <img src={kaputnkar} alt="" />
                        </div>
        </div>
       </div>
    )
}

export default Content8;