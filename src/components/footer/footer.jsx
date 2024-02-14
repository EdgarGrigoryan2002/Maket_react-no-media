import style from './footer.module.scss';
import logo from '../img/logo.png';
import namak from '../img/namak.png';
import marshurt from '../img/marshurt.png';
import namak2 from '../img/namak2.png';
import call from '../img/call.png';
import icon from '../img/iconner.png';

const Footer = ()=>{
    return(
       <div className={style.main}>
            <div className="contianer">
                <div className={style.content}>
                    <div className={style.glxavor}> 
                       <div className="">
                            <img src={logo} alt="" />
                       </div>
                        <div className="text">
                            <p style={{fontWeight: 'bold',color: '#7E7878',fontSize: '20px'}}>Fectetur adipisicing ellt,sed do euim mod <br />
                               tempor Lorem ipsum dolor sit amet,con <br />
                               sectetur adipisicing elitt ut labore</p>
                        </div>
                        <div className={style.email}>
                            <div className="container-fluid">
                                <p style={{color: '#7E7878',fontSize: '20px', marginTop: '10px'}}>Submit Email</p>
                            </div>
                            <div  className="">
                            <img src={namak2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className="">
                            <h1 style={{fontWeight: "bold"}}>About</h1>
                            <p style={{color: '#7E7878',fontSize: '20px', fontWeight: 'bold',marginTop: '30px'}}>About Us </p>
                            <p style={{color: '#7E7878',fontSize: '20px', fontWeight: 'bold'}}>Service</p>
                            <p style={{color: '#7E7878',fontSize: '20px', fontWeight: 'bold'}}>Our Stoiry</p>
                            <p style={{color: '#7E7878',fontSize: '20px', fontWeight: 'bold'}}>Success</p>
                            <p style={{color: '#7E7878',fontSize: '20px', fontWeight: 'bold'}}>Support</p>
                        </div>
                    </div>
                    <div  className={style.content2}>
                    <h1 style={{fontWeight: "bold"}}>Service</h1>
                            <p style={{color: '#7E7878',fontSize: '20px', fontWeight: 'bold',marginTop: '30px'}}>Development </p>
                            <p style={{color: '#7E7878',fontSize: '20px', fontWeight: 'bold'}}>Maintanance</p>
                            <p style={{color: '#7E7878',fontSize: '20px', fontWeight: 'bold'}}>Consultancy</p>
                            <p style={{color: '#7E7878',fontSize: '20px', fontWeight: 'bold'}}>Design</p>
                           
                    </div>
                    <div className={style.content3}>
                    <div className="">
                    <h1 style={{fontWeight: "bold",marginTop: '-30px'}}>Get in Touch</h1>
                        <img src={marshurt} alt="" />
                         <span style={{color: '#7E7878',fontSize: '20px', fontWeight: 'bold',marginLeft: "15px"}}>22/1 Bardeshi,Amin Bazar <br /></span>
                         <span style={{color: '#7E7878',fontSize: '20px', fontWeight: 'bold',marginLeft: "25px"}}>Dhaka 1348</span>
                        <div className={style.content4}>
                        <img  src={namak} alt="" />
                        <span style={{color: '#7E7878',fontSize: '20px', fontWeight: 'bold',marginLeft: "15px"}}>
                            xuwelkhan@gmail.com
                        </span>
                    </div>
                        </div>
                        <div className="">
                            <img src={call} alt="" />
                            <span style={{color: '#7E7878',fontSize: '20px', fontWeight: 'bold',marginLeft: "15px"}}>
                                +88 01679 252595
                            </span>
                        </div>
                    </div>
                </div>
                <div className={style.main2}>
                    <div className={style.content5}>
                        <div className="">
                        <p style={{fontWeight: 'bold',fontSize: '20px'}}>Follow us</p>
                        </div>
                        <div className="">
                            <img src={icon} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <p style={{fontSize: '20px'}}>All rights @ <span style={{fontWeight: 'bold'}}>Juwel Khen</span>2020</p>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Footer;