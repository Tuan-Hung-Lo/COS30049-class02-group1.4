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
        /* width: 90%;
        height: 180px;
        border-radius: 10px;
        background-color: #2A2A2A;
        margin: 10px auto; */

        .visa_card_container {
            display: grid;
            grid-template-columns: 1fr auto;
            grid-template-rows: 50px 60px 50px;
            max-width: 310px;
            margin: auto;
            background: #e1e1eb;
            border: 1px solid rgba(255, 255, 255, 0.20);
            border-radius: 10px;
            padding: 20px 18px;
            box-shadow: 0px 0px 20px rgba(253, 253, 253, 0.2);
            grid-template-areas: "balance visa""cardnumber cardnumber""holder expiry"
        }

        .avail_balance,
        .numeric_balance {
            grid-area: balance;
            margin: 0;
        }

        .visa_icon {
            width: 47px;
        }

        .numeric_balance {
            margin-top: 10px;
        }

        .numeric_balance,
        .numeric_balance-2,
        .card_number {
            font-size: 1.1rem;
            font-weight: 500;
            -webkit-text-stroke: .2px;
        }

        .numeric_balance,
        .numeric_balance-2,
        .card_number,
        .owner_name,
        .expiry_date {
            color: #464646;
        }

        .avail_balance,
        .holder_text,
        .expiry_text {
            font-size: .53rem;
            letter-spacing: 1px;
            font-weight: 300;
            color: #a1a1a4;
        }

        .visa_icon {
            grid-area: visa;
        }

        .card_number {
            grid-area: cardnumber;
            letter-spacing: 2.1px;
            display: flex;
            justify-content: space-around;
        }

        .hidden_pin {
            -webkit-text-stroke: 1.4px;
            letter-spacing: 5px;
        }

        .holder_text,
        .owner_name {
            grid-area: holder;
        }

        .expiry_text {
            margin-right: 3.3px;
        }

        .expiry_text,
        .expiry_date {
            display: grid;
            grid-area: expiry;
            justify-content: end;
        }

        .owner_name,
        .expiry_date {
            margin-top: 23px;
            font-size: .77rem;
            letter-spacing: .7px;
            text-transform: uppercase;
            -webkit-text-stroke: .2px;
            line-height: 2;
        }
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
                <section className="visa_card">
                    <div className="visa_card_container">

                        <p className="avail_balance">Available Balance</p>
                        <img src="https://res.cloudinary.com/dvhndpbun/image/upload/q_auto:eco/v1584302122/visa-card-logo-png-transparent_pljppj.png"
                            alt="visa icon" className="visa_icon"/>
                        <h2 className="numeric_balance">$24.560</h2>

                        <p className="card_number"> 
                            <span className="hidden_pin">••••</span>
                            <span className="hidden_pin">••••</span>
                            <span className="hidden_pin">••••</span>
                            <span>1234</span>
                        </p>
                        <h3 className="holder_text">HOLDER</h3>
                        <p className="owner_name">Kien</p>
                        <h3 className="expiry_text">EXPIRY</h3>
                        <p className="expiry_date">07/20</p>
                    </div>
                </section>
            </CreditCard>
            <h2>Top Artist</h2>
            <p>{currentDate}</p>
            <div>Artist</div>
            <div>Artist</div>
            <div>Artist</div>
        </Container>
    );
}
export default ProfileCard;