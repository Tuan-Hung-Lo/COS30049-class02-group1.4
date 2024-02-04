import styled from "styled-components";
import image from "../assets/Item1.png"

function SmallCard(){
    const SmallCard = styled.div`
        width: 235px;
        height: 290px;
        background-color: #1C1C1C;
        margin: 20px;
        padding: 20px;
        border-radius: 10px;
        img,p,h4,div {
            margin: 0;
            padding: 0;
        }
        
    `;


    return(
        <SmallCard>
            <img src={image} alt="Item"/>
            <p>Auction</p>
            <h4>Item Name</h4>
            <div>
                <p>0.125 (Price)</p>
                <p>Likes</p>
            </div>

        </SmallCard>
    );
}

export default SmallCard