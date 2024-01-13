import styled from "styled-components";
import image from "../assets/Item1.png"


function SmallCard(){
    const SmallCard = styled.div`
        width: 200px;
        height: 290px;
        background-color: #1C1C1C;
        margin-right: 30px;
        padding: 20px;
        border-radius: 10px;
        display: grid;
        grid-template-rows: calc(70% - 10px) 30%;
        gap: 10px;
        p,h4,div {
            margin: 0;
            padding: 0;
        }
    `;

    const ImgContainer = styled.div`
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 10px;
        img{
            object-fit: contain;
            width: 100%;
            /* margin-top: -50%; */
        }
    `


    return(
        <SmallCard>
            <ImgContainer>
                <img src={image} alt="Item"/>
            </ImgContainer>
            <div>
                <p>Auction</p>
                <h4>Item Name</h4>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        0.125 (Price)
                    </div>
                    <div>
                        10 (Likes)
                    </div>
                </div>
            </div>

        </SmallCard>
    );
}

export default SmallCard