import styled from "styled-components";

import HeartIcon from "../assets/heart.svg"
import CommentIcon from "../assets/comment.svg"
import BellIcon from "../assets/bell.svg"

import ProfilePic from "../assets/Capture.jpg"

import { useState } from 'react';

function ProfileCard(){
    // 	const [user, setUser] = useState(null);

    const Container = styled.div`
        margin: 20px;
        padding: 20px;
        background-color: #1C1C1C;
        border-radius: 20px;
    `;

    const ProfilePicture = styled.img`
        width: 100px;
        height: 100px;
        border-radius: 50px;
        margin: 0 auto;
        display: block;
        text-align: center;
    `;

    const CardButton = styled.div`
        display: flex;
        justify-content: center;
        button{
            width: 70px;
            height: 70px;
            padding: 15px;
            border-radius: 35px;
            text-decoration: none;
            border: none;
            margin: 10px auto;
            justify-content: center;
            background: linear-gradient(0deg, #161616 0%, #2A2A2A 100%);
        }
        img{
            width: 40px;
            margin: 0;
            padding: 0;
            
        }
    `;

    const CreditCard = styled.div`
        width: 90%;
        height: 180px;
        border-radius: 10px;
        background-color: #2A2A2A;
        margin: 10px auto;

    `

    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    }

    const [currentDate] = useState(getDate());

    return(
        <Container>
            <ProfilePicture src={ProfilePic}/>
            <h2 className='card-title'>
                Kinley
            </h2>
            <p className='card-text'>
                Im a retard
            </p>
            <CardButton>
                <button>
                    <img src={HeartIcon} alt="" />
                </button>
                <button>
                    <img src={CommentIcon} alt="" />
                </button>
                <button>
                    <img src={BellIcon} alt="" />
                </button>
            </CardButton>
            <CreditCard>
                <span>icon</span>
                Visa ending in 6987<br/>

                <span>Visa</span>
            </CreditCard>
            <h1>Top Artist</h1>
            <p>{currentDate}</p>
            <div>Artist</div>
            <div>Artist</div>
            <div>Artist</div>
        </Container>
    );
}
export default ProfileCard;