import {useState} from 'react'
import Card from './Card'

function Buttons({data}) {
    const [stateData, setStateData] = useState(data)

    function handleGreasedClick() {
        const isGreased = [...stateData].filter(hog => hog.greased)
        setStateData(isGreased)
    }

    function handleNameFilter() {
        const isFiltered = [...stateData].sort((a,b) => {
           if (a.name > b.name) {
               return 1
           } else if (a.name < b.name) {
               return -1
           } else {
               return 0
           }
        })
        setStateData(isFiltered)
    }

    function handleWeightFilter() {
        const isFiltered = [...stateData].sort((a,b) => a.weight - b.weight)
        setStateData(isFiltered)
    }

    return (
        <>
            <button onClick={handleGreasedClick} >Show Greased Only</button>
            <button onClick={handleNameFilter} >Filter by Name</button>
            <button onClick={handleWeightFilter} >Filter by Weight</button>
            <br/> <br/> <br/>
            <Card data={stateData} />
        </>
    )
}

export default Buttons