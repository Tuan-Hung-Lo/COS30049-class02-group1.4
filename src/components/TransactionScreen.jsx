import styled from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";


function Transaction(){

    const TransactionContainer = styled.div `
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
                <TransactionContainer>
                    <Header>
                        <h1>Transactions History</h1>
                        <p>Buy and Sell NFTs</p>
                    </Header>
                </TransactionContainer>
            <Footer />
        </>
    );
}

export default Transaction