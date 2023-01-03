import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { TransactionConsumer } from '../contexts/Transactions';

const SpendingSummary = () => {
    const {  transactions } = TransactionConsumer();
    console.log(transactions)
    return (
        <Container fluid="md">
            <Row className='mt-5'>
            <h4>Spending Summary</h4>
            </Row>
            <Row>
            <p><b>1000</b> rupees already spent on this month.</p>
            <p>Only <b>1000</b> rupees remaining to spend on this month.</p>
            <p> <b>10</b> days remaining in this month</p>
            <p> Last month saving was <b>25000</b> rupees.</p>
            <p> Total saving <b>40000</b> rupees, since, 10 Jan 2023.</p>
            <h5 className='text-success'>Congrats, Great Job!</h5>
            </Row>
           
        </Container>



    )
}

export default SpendingSummary