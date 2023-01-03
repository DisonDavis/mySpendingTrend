
import React, {useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { TransactionConsumer } from '../contexts/Transactions';


const SpendingEntry = () => {
    const [form, setForm] = useState({ amount: '', reason: '', category: '' })
    const [errors, setErrors] = useState({ amount: '', reason: '', category: '' })
    const {  addNewTransaction } = TransactionConsumer();

    const setField = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        })

        if (!!errors[e.target.id]) {
            setErrors({
                ...errors,
                [e.target.id]: null
            })
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formErrors = validateForm()

        if (Object.keys(formErrors).length > 0) {

            setErrors(formErrors)
        }
        else {
          

            addNewTransaction(form)


        }
    }

    const validateForm = () => {
        const { amount, reason, category } = form
        const newErrors = {}
        if (!amount || amount === '' || amount <= 0) newErrors.amount = 'Please enter valid amount'
        if (!reason || reason === '') newErrors.reason = 'Please enter the reason for the spending'
        if (!category || category === '') newErrors.category = 'Please enter spending category'
        return newErrors
    }

    return (
        <Form>
            <Row className='justify-content-center mt-5'>
                <h4>Enter the spending</h4>
                <Form.Group as={Col} xs={12} sm={6} md={4} controlId="amount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" placeholder="Amount" value={form.amount} onChange={(e) => setField(e)} isInvalid={!!errors.amount} />
                    <Form.Control.Feedback type='invalid'>
                        {errors.amount}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xs={12} sm="6" md="4" controlId="reason">
                    <Form.Label>Reason</Form.Label>
                    <Form.Control type="text" placeholder="Reason" value={form.reason} onChange={(e) => setField(e)} isInvalid={errors.reason} />
                    <Form.Control.Feedback type='invalid'>
                        {!!errors.reason}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} xs={12} sm={6} md={4} controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" value={form.category} onChange={(e) => { setField(e) }} isInvalid={!!errors.category}>
                        <option>Category</option>
                        <option value="Needs">Needs</option>
                        <option value="Wants">Wants</option>
                        <option value="Wishes">Wishes</option>
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>
                        {errors.category}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <div className='mt-3'>
                <Button variant="dark" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </div>

        </Form>
    )
}
export default SpendingEntry