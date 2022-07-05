import React from 'react'

function TopButtons({setQuery}) {
    const cities = [
        {
            id: 1,
            title: 'Mumbai'
        },
        {
            id: 2,
            title: 'Tokyo'
        },
        {
            id: 3,
            title: 'New York'
        },
        {
            id: 4,
            title: 'London'
        },
        {
            id: 5,
            title: 'Seoul'
        },
    ]
    return <div className='flex flex-row item-center justify-around my-6'>
        {cities.map((city) => (
            <button key={city.id} className="text-white text-lg font-medium hover:scale-125 hover:text-slate-600 transition ease-in-out"
                onClick={() => setQuery({ q: city.title })}>{city.title}</button>
        ))

        }
    </div>
}

export default TopButtons