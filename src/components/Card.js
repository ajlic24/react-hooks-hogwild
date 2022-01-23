import { useState } from 'react'
import CardInfo from './CardInfo'


function Card({ data }) {

    return (
        <>
            {data.map(hog => {
                // console.log(hog)
                return (
                    <CardInfo key={hog.name} name={hog.name} image={hog.image} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} highestMedal={hog['highest medal achieved']} />
                )
            })
            }
        </>
    )
}

export default Card