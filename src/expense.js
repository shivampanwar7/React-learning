import styled from 'styled-components';


function ExpenseItem() {
    const DIV = styled.div`
    font-size: 16px;
    margin: 2rem;
    padding: 1.5rem;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    .heading {
        font-size: 2rem;
        color: blue; 
    }
    `;
    return (
        <DIV>
        <h2 className='heading'>Title</h2>
        <p>Amount</p>
        <p>Date</p>
        </DIV>
    );
}

export default ExpenseItem;