import react, {useState, useRef} from 'react';
import style from './form.module.css';

export default function Form() {
    const [building, setBuilding] = useState('--')
    const [metre, setMetre] = useState("M")

    const handleClick = (e) => {
        setBuilding(e.target.value);
        e.preventDefault();

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
                        <button className={style["btn"]} value="office" onClick={(e) => handleClick(e)}>Office</button>
                        <button className={style["btn"]} value="warehouse" onClick={(e) => handleClick(e)}>Warehouse</button>
                    </div>
                    <div className={style["row2"]}>
                        <button className={style["btn"]} value="delivery centre" onClick={(e) => handleClick(e)}>Delivery</button>
                        <button className={style["btn"]} value="land" onClick={(e) => handleClick(e)}>Land</button>
                    </div>
                </div>
                {/* This information is dependant on the building type */}
                {building === "office" ? <div>
                    <p className={style["title"]}>Size of building</p>
                    {/* Allow user to search buildings with a specific size */}
                    <div>
                        <input className={style["inputBar"]} placeholder={metre} type="number"></input>
                        <select className={style["measure"]} onChange={(e) => setMetre(e.target.value)}>
                            <option className={style['build-opt']} value="M">Metres</option>
                            <option className={style['build-opt']} value="Sq">Square feet</option>
                        </select>
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
                    <p className={style["title"]}>Number of offices needed</p>
                    <input className={style["locInput"]} type="number"></input>

                </div> : <div></div>}
                {building === "warehouse" ? <div>
                    <p className={style["title"]}>Size of building</p>
                    <div>
                        <input className={style["inputBar"]} placeholder={metre} type="number"></input>
                        <select className={style["measure"]} onChange={(e) => setMetre(e.target.value)}>
                            <option className={style['build-opt']} value="M">Metres</option>
                            <option className={style['build-opt']} value="Sq">Square feet</option>
                        </select>
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
                    <p className={style["title"]}>Storage area needed?</p>
                    <input type="checkbox"></input>
                </div> : <div></div>}
                {building === "delivery centre" ? <div>
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