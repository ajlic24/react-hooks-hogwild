import {useState} from 'react'

function CardInfo({specialty, weight, greased, highestMedal, name, image}) {
    const [isClicked, setIsClicked] = useState(false)
    const [isHidden, setIsHidden] = useState(false)

    function handleTileClick() {
        setIsClicked(!isClicked)
    }

    function handleHideButton() {
        setIsHidden(!isHidden)
    }

    return (
        <>
            <div className="ui grid container" onClick={handleTileClick} >
                <div className="ui eight wide column"  >
                    <h1>{name}</h1>
                    <img src={image} />
                    {!isClicked ? null : (
                        <>
                            <p><strong>Specialty:</strong> {specialty}</p>
                            <p><strong>Weight:</strong> {weight}</p>
                            <p><strong>Greased:</strong> {greased ? 'Yes' : 'No'}</p>
                            <p><strong>Highest Medal Achieved:</strong> {highestMedal.toUpperCase()}</p>
                        </>
                    )}
                </div>
            </div>
            <button onClick={handleHideButton} >Hide me</button>
        </>

    )
}

export default CardInfo