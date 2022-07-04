import React, { useState } from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
function Inputs({ setQuery, units, setUnits }) {

    const [city, setCity] = useState("");

    const handleSearch = () => {
        if (city !== '') setQuery({ q: city })
    }

    const handleLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat, lon
                })
            })
        }
    }

    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                <input
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    type="text"
                    placeholder='Search'
                    className="text-xl font-light p-2 focus:outline-none w-full shadow-xl capitalize rounded-3xl px-10" />

                <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"
                    onClick={handleSearch} />

                <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"
                    onClick={handleLocation} />
            </div>


            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button name="metric" className="text-xl text-white font-light hover:scale-125 transition ease-out">°C</button>

                <p className='text-xl text-white mx-2'>|</p>

                <button name="imperial" className="text-xl text-white font-light hover:scale-125 transition ease-out">°F</button>
            </div>
        </div>
    );
}

export default Inputs;