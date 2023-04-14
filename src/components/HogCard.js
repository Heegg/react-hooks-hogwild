// <Start>=========================================================</>

import { useState } from "react"

const Front = ({ name, image }) => {
    return (
        <div>
            <h1>{ name }</h1>
            <img src={image} alt='piggy'/>
        </div>
    )
}

const Back = ({ hog }) => {
    return (
        <div>
            <h1>{hog.name}</h1>
            <h3>{hog.specialty}</h3>
            <h2>{hog.weight} kilos</h2>
            <h4>{hog["highest medal achieved"]} medal achieved</h4>
            { hog.greased ? <h1>READY FOR FUN</h1> : <div>no grease</div> }
        </div>
    )
}
//46;44
const HogCard = ({ hog }) => {

    const [ showFront, setShowFront ] = useState(false)

    const toggleFront = () => setShowFront(showFront => !showFront)

    console.log(showFront)
    return (
       <div onClick={toggleFront} className="ui three wide column image pigTile">
        { showFront ? 
            <Front name={hog.name} image={hog.image}/> : 
            <Back hog={hog}/> 
        }
       </div> 
    )
}

export default HogCard




// <Answer>=========================================================</>
// import { useState } from "react"

// const Front = ({ name, image }) => {
//     return (
//         <div>
//             <h1>{ name }</h1>
//             <img src={ image } alt="piggy"/>
//         </div>
//     )
// }

// const Back = ({ hog }) => {
//     return (
//         <div>
//             <h1>{ hog.name }</h1>
//             <h3>{ hog.specialty }</h3>
//             <h2>{ hog.weight } kilos</h2>
//             <h4 className="achievementText">
//                 { hog["highest medal achieved"] } medal achieved
//             </h4>
//             { hog.greased ? <h1>READY FOR FUN</h1> : <div>no grease</div>}
//         </div>
//     )
// }

// const HogCard = ({ hog }) => {
//     console.log( hog )

//     const [ showFront, setShowFront ] = useState( false )
   
//     // const toggleFront = () => {
//     //     setShowFront( showFront => !showFront )
//     // }
//     // Since this code only has one line of code, we can convert it to oneline code 
//     const toggleFront = () => setShowFront( showFront => !showFront )

//     console.log( showFront )
//     return (
//         <div onClick={ toggleFront } 
//             className="ui four wide column image pigTile">
//             { showFront ? <Front name={ hog.name } image={ hog.image } /> : 
//                           <Back hog={ hog } /> }
//         </div>
//     )
// }

// export default HogCard

// // How can we give each card it's unique? Giving useState