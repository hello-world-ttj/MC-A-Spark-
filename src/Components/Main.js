import React from 'react'
import { RiInstagramFill, RiWhatsappFill } from 'react-icons/ri'

function Main(props) {

    return (
        <div className="Main">

            <div className="Card">
                <div className="Card--img">
                    <img src={props.img} alt="Img" className="Img" />
                </div>
                <div className="Container">
                    <h3 className="Name">{props.name}</h3>
                    <p>Text me...!</p>
                    <a href={props.insta}><RiInstagramFill className="Icon Insta"/></a>
                    <a href={props.whtsp}><RiWhatsappFill className="Icon Whtsp"/></a>
                </div>
            </div>

        </div>
    )
}

export default Main
