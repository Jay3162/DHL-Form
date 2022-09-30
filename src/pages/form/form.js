import react, {useState, useRef} from 'react';
import {FaWarehouse} from 'react-icons/fa'
import {HiOfficeBuilding} from 'react-icons/hi'
import {TbTruckDelivery} from 'react-icons/tb'
import {BiLandscape} from 'react-icons/bi'
import style from './form.module.css';

export default function Form() {
    const [building, setBuilding] = useState('--')
    const [metre, setMetre] = useState("M")

    const ref = useRef(null);

    const handleClick = (e) => {
        setBuilding(e.target.value);
        e.preventDefault();
        return ref.current?.scrollIntoView();
    }
    
    return (
        <div className={style['wrapper']}>
            <form className={style['form']}>
                <header className={style["header"]}>
                    {/* User authentication */}
                    <section className={style["account"]}>
                        <a href="#" className={style["login"]}>Login</a>
                        <a href="#" className={style["logout"]}>Logout</a>
                    </section>
                </header>
                {/* Allow user to select a building type */}
                <p className={style["title"]}>Building Type</p>
                {/* <select className={style["building-opts"]} onClick={(e) => setBuilding(e.target.value)}>
                    <option className={style['build-opt']} value="--">--</option>
                    <option className={style['build-opt']} value="office">Office</option>
                    <option className={style['build-opt']} value="warehouse">Warehouse</option>
                    <option className={style['build-opt']} value="delivery centre">Delivery Centre</option>
                    <option className={style['build-opt']} value="land">Land</option>
                </select> */}
                <div className={style["buildBtns"]}>
                    <div className={style["row1"]}>
                        <button className={style["btn"]} value="office" onClick={(e) => handleClick(e)}><HiOfficeBuilding></HiOfficeBuilding> Office</button>
                        
                        <button className={style["btn"]} value="warehouse" onClick={(e) => handleClick(e)}><FaWarehouse></FaWarehouse>Warehouse</button>
                    </div>
                    <div className={style["row2"]}>
                        <button className={style["btn"]} value="delivery centre" onClick={(e) => handleClick(e)}><TbTruckDelivery></TbTruckDelivery>Delivery</button>
                        <button className={style["btn"]} value="land" onClick={(e) => handleClick(e)}><BiLandscape></BiLandscape> Land</button>
                    </div>
                </div>
                {/* This information is dependant on the building type */}
                {building === "office" ? <div>
                    <div className={style["topHalf"]}>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Size of building</p>
                            {/* Allow user to search buildings with a specific size */}
                            <div>
                                <input className={style["inputBar"]} placeholder={metre} type="number"></input>
                                {/* <select className={style["measure"]} onChange={(e) => setMetre(e.target.value)}>
                                    <option className={style['build-opt']} value="M">Metres</option>
                                    <option className={style['build-opt']} value="Sq">Square feet</option>
                                </select> */}
                            </div>
                        </div>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Storage Area</p>
                            <div>
                                <input className={style["inputBar"]}></input>
                            </div>
                        </div>
                    </div>
                    <div className={style["bottomHalf"]}>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Parking</p>
                            <input className={style["inputBar"]}></input>
                        </div>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Number of offices needed</p>
                            <input className={style["inputBar"]}></input>
                        </div>
                    </div>
                    
                    {/* Location separated by Region and city */}
                    <p className={style["title"]}>Location</p>
                    <section>
                        <div ref={ref} className={style["locDetails"]}>
                            <p className={style["subTitle"]}>Region</p>
                            <input className={style["locInput"]}></input>
                        </div>
                        <div className={style["locDetails"]}>
                            <p className={style["subTitle"]}>City</p>
                            <input className={style["locInput"]}></input>
                        </div>
                    </section>


                </div> : <div></div>}
                {building === "warehouse" ? <div>
                <div className={style["topHalf"]}>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Size of building</p>
                            {/* Allow user to search buildings with a specific size */}
                            <div>
                                <input className={style["inputBar"]} placeholder={metre} type="number"></input>
                                {/* <select className={style["measure"]} onChange={(e) => setMetre(e.target.value)}>
                                    <option className={style['build-opt']} value="M">Metres</option>
                                    <option className={style['build-opt']} value="Sq">Square feet</option>
                                </select> */}
                            </div>
                        </div>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Number of Truck Doors</p>
                            <div>
                                <input className={style["inputBar"]}></input>
                            </div>
                        </div>
                    </div>
                    <div className={style["bottomHalf"]}>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Charging Stations</p>
                            <input className={style["inputBar"]}></input>
                        </div>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Truck Yard</p>
                            <input className={style["inputBar"]}></input>
                        </div>
                    </div>
                    <div className={style["bottomHalf"]}>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Storage Area</p>
                            <input className={style["inputBar"]}></input>
                        </div>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Parking</p>
                            <input className={style["inputBar"]}></input>
                        </div>
                    </div>
                    {/* Location separated by Region and city */}
                    <p className={style["title"]}>Location</p>
                    <section>
                        <div className={style["locDetails"]}>
                            <p className={style["subTitle"]}>Region</p>
                            <input className={style["locInput"]}></input>
                        </div>
                        <div className={style["locDetails"]}>
                            <p className={style["subTitle"]}>City</p>
                            <input className={style["locInput"]}></input>
                        </div>
                    </section>
                </div> : <div></div>}
                {building === "delivery centre" ? <div>
                <div className={style["topHalf"]}>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Size of building</p>
                            {/* Allow user to search buildings with a specific size */}
                            <div>
                                <input className={style["inputBar"]} placeholder={metre} type="number"></input>
                                {/* <select className={style["measure"]} onChange={(e) => setMetre(e.target.value)}>
                                    <option className={style['build-opt']} value="M">Metres</option>
                                    <option className={style['build-opt']} value="Sq">Square feet</option>
                                </select> */}
                            </div>
                        </div>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Storage Area</p>
                            <div>
                                <input className={style["inputBar"]}></input>
                            </div>
                        </div>
                    </div>
                    <div className={style["bottomHalf"]}>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Parking</p>
                            <input className={style["inputBar"]}></input>
                        </div>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Truck Yard</p>
                            <input className={style["inputBar"]}></input>
                        </div>
                    </div>
                    {/* Location separated by Region and city */}
                    <p className={style["title"]}>Location</p>
                    <section>
                        <div className={style["locDetails"]}>
                            <p className={style["subTitle"]}>Region</p>
                            <input className={style["locInput"]}></input>
                        </div>
                        <div className={style["locDetails"]}>
                            <p className={style["subTitle"]}>City</p>
                            <input className={style["locInput"]}></input>
                        </div>
                    </section>
                </div> : <div></div>}
                {building === "land" ? <div>
                    {/* Location separated by Region and city */}
                    <p className={style["title"]}>Location</p>
                    <section>
                        <div className={style["locDetails"]}>
                            <p className={style["subTitle"]}>Region</p>
                            <input className={style["locInput"]}></input>
                        </div>
                        <div className={style["locDetails"]}>
                            <p className={style["subTitle"]}>City</p>
                            <input className={style["locInput"]}></input>
                        </div>
                    </section>

                </div> : <div></div>}
                
                
            </form>
        </div>
    )
}