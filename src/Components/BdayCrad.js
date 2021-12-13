import React from 'react'
import { RiInstagramFill, RiWhatsappFill } from 'react-icons/ri'
import Wish from './bg/cherry-happy-birthday.png'

function BdayCrad(props) {
    return (
        <div className="Bday--card">
            <div className="B--card">
                <div className="Wish">
                    <img src={Wish} alt="Wish" />
                </div>
                <div className="Card--img">
                    <img src={props.img} alt="Img" className="Img" />
                </div>
                <div className="Container">
                    <p className="box">Wish me...!</p>
                    <a href={props.insta}><RiInstagramFill className="Icon Insta" /></a>
                    <a href={props.whtsp}><RiWhatsappFill className="Icon Whtsp" /></a>
                </div>
            </div>
        </div>
    )
}

export default BdayCrad
