import NavBar from "./NavBar"
import Footer from "./Footer";
import styled from "styled-components";

function Explore(){

    const ExploreContainer = styled.div `
		margin-top: 100px;
		::-webkit-scrollbar {
  			display: none;
		}
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 90vw;
		gap: 5vh;
	`;

    const Header = styled.div `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    `;

    return(
        <>
            <NavBar />
            <ExploreContainer>
                <Header>
                    <h1>Explore</h1>
                    <p>Buy and Sell NFTs</p>
                </Header>
            </ExploreContainer>
            <Footer />
        </>
    )
}

export default Explore