import {useState, useRef, useEffect} from 'react';
import {FaWarehouse} from 'react-icons/fa'
import {HiOfficeBuilding} from 'react-icons/hi'
import {TbTruckDelivery} from 'react-icons/tb'
import {BiLandscape} from 'react-icons/bi'
import style from './form.module.css';
import { logout, useAccount } from '../../firebase'
export default function Form() {
    const [building, setBuilding] = useState('--')
    const currentAccount = useAccount();

    const ref = useRef(null);
    const metre = "in square feet";

    const handleClick = (e) => {
        setBuilding(e.target.value);
        e.preventDefault();
        return ref.current?.scrollIntoView();   
    }

    const confirmBtn = (
        <div>
            <button className={style["completeBtn"]}>Complete</button>
        </div>
    )  
    
    const logoutOnClick = () => {
        logout();
    }
    
    const [allCountries, setAllCountries] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getCountries = async () => {
        try {
            const newData = await fetch('https://restcountries.com/v3.1/all')
            const resp = await newData.json();
            setAllCountries(resp)
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
            <form className={style['form']}>
                <header className={style["header"]}>
                    {/* User authentication */}
                    <section className={style["account"]}>
                        {currentAccount ? 
                        <div>
                            <p className={style["login"]}>{currentAccount.email}</p>
                            <a href="/" onClick={logoutOnClick} className={style["logout"]}>Logout</a>
                        </div> : <p>
                            <a href="/signin" className={style["login"]}>Login</a>
                                </p>}
                        
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
                                <input ref={ref} className={style["inputBar"]} placeholder={metre} type="number"></input>
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
                    
                    <section>
                        <p className={style["title"]}>Location</p>
                        {isLoading ? <div>Loading...</div> : <div>
                            <select className={style["optStyle"]}>
                                {allCountries.map((obj, id) => {
                                    return (
                                        <option key={id}>{obj.name.common}</option>
                                    )
                                })}</select></div>}
                        <div className={style["locDetails"]}>
                            <p className={style["subTitle"]}>City</p>
                            <input className={style["locInput"]}></input>
                        </div>
                        {confirmBtn}
                    </section>
                    
                </div> : <div></div>}
                {building === "warehouse" ? <div>
                <div className={style["topHalf"]}>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Size of building</p>
                            {/* Allow user to search buildings with a specific size */}
                            <div>
                                <input className={style["inputBar"]} ref={ref} placeholder={metre} type="number"></input>
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
                    <section>
                        <p className={style["title"]}>Location</p>
                        {isLoading ? <div>Loading...</div> : <div>
                            <select className={style["optStyle"]}>
                                {allCountries.map((obj, id) => {
                                    return (
                                        <option key={id}>{obj.name.common}</option>
                                    )
                                })}</select></div>}
                        <div className={style["locDetails"]}>
                            <p className={style["subTitle"]}>City</p>
                            <input className={style["locInput"]}></input>
                        </div> 
                        {confirmBtn}
                    </section>
                </div> : <div></div>}
                {building === "delivery centre" ? <div>
                <div className={style["topHalf"]}>
                        <div className={style["innerHalf"]}>
                            <p className={style["altTitle"]}>Size of building</p>
                            {/* Allow user to search buildings with a specific size */}
                            <div>
                                <input className={style["inputBar"]} ref={ref} placeholder={metre} type="number"></input>
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
                    <section>
                        <p className={style["title"]}>Location</p>
                        {isLoading ? <div>Loading...</div> : <div>
                                <select className={style["optStyle"]}>
                                    {allCountries.map((obj, id) => {
                                        return (
                                            <option data-testid="dropdownElement" key={id}>{obj.name.common}</option>
                                        )
                                    })}</select></div>}
                        <div className={style["locDetails"]}>
                            <p className={style["subTitle"]}>City</p>
                            <input className={style["locInput"]}></input>
                        </div>
                        {confirmBtn}
                    </section>
                </div> : <div></div>}
                {building === "land" ? <div className={style["location"]}>
                    {/* Location separated by Region and city */}
                    <section>
                        <p className={style["title"]}>Location</p>
                            {isLoading ? <div>Loading...</div> : <div>
                                <select className={style["optStyle"]}>
                                    {allCountries.map((obj, id) => {
                                        return (
                                            <option key={id}>{obj.name.common}</option>
                                        )
                                    })}</select></div>}
                        <div className={style["locDetails"]}>
                            <p className={style["subTitle"]} ref={ref}>City</p>
                            <input className={style["locInput"]}></input>
                        </div>
                        {confirmBtn}
                    </section>
                </div> : <div></div>}
            </form>
        </div>
    )
}