import {useState, useRef, useEffect} from 'react';
import {FaWarehouse} from 'react-icons/fa'
import {HiOfficeBuilding} from 'react-icons/hi'
import {TbTruckDelivery} from 'react-icons/tb'
import {BiLandscape} from 'react-icons/bi'
import style from './form.module.css';
import { logout, useAccount } from '../../firebase'
import { Link } from 'react-router-dom'
export default function Form() {
    const [building, setBuilding] = useState('--')
    const [formSub, setFormSub] = useState(false);
    const currentAccount = useAccount();

    const [buildType, setBuildType] = useState("")
    const ref = useRef(null);
    const metre = "in square feet";

    const handleSubmit = (e) => {
        setFormSub(true);
        e.preventDefault();
    }

    // scrolls page to form after user selects a building type
    const handleClick = (e) => {
        setBuilding(e.target.value);
        setFormSub(false);
        e.preventDefault();
        return ref.current?.scrollIntoView();   
    }

    const confirmBtn = (
        <div>
            <button className={style["completeBtn"]} type="submit">Complete</button>
        </div>
    )  
    
    // signs user out
    const logoutOnClick = () => {
        logout();
    }
    
    const [allCountries, setAllCountries] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const arr = [];

    //makes api call for list of countries for the form's location section
    const getCountries = async () => {
        try {
            const newData = await fetch('https://restcountries.com/v3.1/all')
            const resp = await newData.json();
            for (let i = 0; i < resp.length; i++) {
                if (resp[i].name.common !== arr[i-1]) {
                    arr.push(resp[i].name.common)
                } else {
                    arr.push(resp[i].name.official)
                }
            }
            console.log(arr.length)
            arr.sort();
            setAllCountries(arr)
            setLoading(false);
        } catch(e) {
            console.error(e);
        }

    };
    useEffect(() => {
        getCountries();
    }, [])
    

    return (
        <div className={style['wrapper']}>
            <form className={style['form']} onSubmit={(e) => handleSubmit(e)}>
                <header className={style["header"]}>
                    {/* User authentication */}
                    <section className={style["account"]}>
                        {currentAccount ? 
                        <div>
                            <p className={style["login"]}>{currentAccount.email}</p>
                            <a to="/" onClick={logoutOnClick} className={style["logout"]}>Logout</a>
                        </div> : <div>
                            <Link to="/signin" className={style["login"]}>Login</Link>
                                </div>}
                        
                    </section>
                </header>
                {/* Allow user to select a building type */}
                <div className={style["titleSec"]}>
                    <p className={style["title"]}>Building Type</p>
                </div>
                <div className={style["buildBtns"]}>
                    <div className={style["row1"]}>
                        <button className={style["btn"]} data-testid="officeBtn" value="office" onClick={(e) => handleClick(e)}><HiOfficeBuilding></HiOfficeBuilding> Office</button>
                        
                        <button className={style["btn"]} data-testid="warehouseBtn" value="warehouse" onClick={(e) => handleClick(e)}><FaWarehouse></FaWarehouse>Warehouse</button>
                    </div>
                    <div className={style["row2"]}>
                        <button className={style["btn"]} data-testid="deliveryBtn" value="delivery centre" onClick={(e) => handleClick(e)}><TbTruckDelivery></TbTruckDelivery>Delivery</button>
                        <button className={style["btn"]} data-testid="landBtn" value="land" onClick={(e) => handleClick(e)}><BiLandscape></BiLandscape> Land</button>
                    </div>
                </div>
                {/* This information is dependant on the building type */}
                {building === "office" ? <div>
                    <div className={style["topHalf"]}>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Size of building</p>
                            {/* Allow user to search buildings with a specific size */}
                            <div>
                                <input ref={ref} value={buildType} onChange={(e) => {setBuildType(e.target.value)}} className={style["inputBar"]} data-testid="inputBar" placeholder={metre} type="number" required></input>
                            </div>
                        </div>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Storage Area</p>
                            <div>
                                <input className={style["inputBar"]} required></input>
                            </div>
                        </div>
                    </div>
                    <div className={style["bottomHalf"]}>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Parking</p>
                            <input className={style["inputBar"]}></input>
                        </div>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]} required>Number of offices needed</p>
                            <input className={style["inputBar"]}></input>
                        </div>
                    </div>
                    
                    {/* Location separated by Region and city */}
                    
                    <section>
                        <p className={style["title"]}>Location</p>
                        {isLoading ? <div>Loading...</div> : <div>
                            <select className={style["optStyle"]}>
                                {allCountries.map((obj, id) => {
                                    return (
                                        <option data-testid={"dropdownElement"} key={id}>{obj}</option>
                                    )
                                })}</select></div>}
                        <div className={style["locDetails"]}>
                            <p className={style["subTitle"]}>City</p>
                            <input className={style["locInput"]}></input>
                        </div>
                        {formSub === true ? <div className={style["panel"]}>
                            <p className={style["panel-txt"]}>Success</p>
                        </div> : <div></div>}

                        {/* {currentAccount ? <div></div> : <p>Please Sign In</p>} */}

                        {confirmBtn}
                    </section>
                    
                </div> : <div></div>}
                {building === "warehouse" ? <div>
                <div className={style["topHalf"]}>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Size of building</p>
                            {/* Allow user to search buildings with a specific size */}
                            <div>
                                <input className={style["inputBar"]} value={buildType} onChange={(e) => {setBuildType(e.target.value)}} ref={ref} placeholder={metre} type="number" required></input>
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
                            <input className={style["inputBar"]} required></input>
                        </div>
                    </div>
                    <div className={style["bottomHalf"]}>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Storage Area</p>
                            <input className={style["inputBar"]} required></input>
                        </div>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Parking</p>
                            <input className={style["inputBar"]}></input>
                        </div>
                    </div>
                    {/* Location separated by Region and city */}
                    <section>
                        <p className={style["title"]}>Location</p>
                        {isLoading ? <div>Loading...</div> : <div>
                            <select className={style["optStyle"]}>
                                {allCountries.map((obj, id) => {
                                    return (
                                        <option key={id}>{obj}</option>
                                    )
                                })}</select></div>}
                        <div className={style["locDetails"]}>
                            <p className={style["subTitle"]}>City</p>
                            <input className={style["locInput"]}></input>
                        </div>
                        {formSub === true ? <div className={style["panel"]}>
                            <p className={style["panel-txt"]}>Success</p>
                        </div> : <div></div>}

                        {/* {currentAccount ? <div></div> : <p>Please Sign In</p>} */}

                        {confirmBtn}
                    </section>
                </div> : <div></div>}
                {building === "delivery centre" ? <div>
                <div className={style["topHalf"]}>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Size of building</p>
                            {/* Allow user to search buildings with a specific size */}
                            <div>
                                <input className={style["inputBar"]} value={buildType} onChange={(e) => {setBuildType(e.target.value)}} ref={ref} placeholder={metre} type="number" required></input>
                            </div>
                        </div>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Storage Area</p>
                            <div>
                                <input className={style["inputBar"]} required></input>
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
                            <input className={style["inputBar"]} required></input>
                        </div>
                    </div>
                    {/* Location separated by Region and city */}
                    <section>
                        <p className={style["title"]}>Location</p>
                        {isLoading ? <div>Loading...</div> : <div>
                                <select className={style["optStyle"]}>
                                    {allCountries.map((obj, id) => {
                                        return (
                                            <option data-testid="dropdownElement" key={id}>{obj}</option>
                                        )
                                    })}</select></div>}
                        <div className={style["locDetails"]}>
                            <p className={style["subTitle"]}>City</p>
                            <input className={style["locInput"]}></input>
                        </div>
                        {formSub === true ? <div className={style["panel"]}>
                            <p className={style["panel-txt"]}>Success</p>
                        </div> : <div></div>}

                        {/* {currentAccount ? <div></div> : <p>Please Sign In</p>} */}

                        {confirmBtn}
                    </section>
                </div> : <div></div>}
                {building === "land" ? <div className={style["location"]}>
                    {/* Location separated by Region and city */}
                    <section>
                        <p className={style["title"]}>Area Size</p>
                        <input className={style["locInput"]} value={buildType} onChange={(e) => {setBuildType(e.target.value)}} placeholder="sq" required></input>
                        <p className={style["title"]}>Location</p>
                            {isLoading ? <div>Loading...</div> : <div>
                                <select className={style["optStyle"]}>
                                    {allCountries.map((obj, id) => {
                                        return (
                                            <option data-testid={"dropdownElement"} key={id}>{obj}</option>
                                        )
                                    })}</select></div>}
                        <div className={style["locDetails"]}>
                            <p className={style["subTitle"]} ref={ref}>City</p>
                            <input className={style["locInput"]}></input>
                        </div>
                        {formSub ? <div className={style["panel"]}>
                            <p className={style["panel-txt"]}>Success</p>
                        </div> : <div></div>}

                        {/* {currentAccount ? <div></div> : <p>Please Sign In</p>} */}

                        {confirmBtn}
                    </section>

                </div> : <div></div>}
            </form>
        </div>
    )
}