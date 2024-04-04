'use client'

import ButtonClick from "@/app/component/ButtonClick";
import "../../css/firtsView.css"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function FirtsView() {


    return(
        <>
          <h1 className="text-center mb-5  text-7xl">Do your tasks quickly and easy</h1>
         <p className=" text-center mt-3 mb-3 text-2xl">Your tasks, your rules, our support.</p> 
         <div className="text-center mt-5">
                <ButtonClick />
         </div>
         <div className=" text-center">
            <Link className="underline" href=''>Create an account</Link>   
         </div>
         <div className="decorativeLine">
            <div className="line"></div>
            <span className="orText">OR</span>
            <div className="line"></div>
         </div>
         <div className="socialIcons">
         <FontAwesomeIcon icon={faGoogle} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faApple} />
         </div>
        </>
    )
}