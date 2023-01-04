import { Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import { TransactionConsumer } from '../contexts/Transactions'
import { useEffect } from 'react'

const SpendingSummary = () => {
  const { transactions } = TransactionConsumer()
  //console.log(transactions)

  var getRemainingDays = () => {
    var date = new Date()
    var time = new Date(date.getTime())
    time.setMonth(date.getMonth() + 1)
    time.setDate(0)
    var days =
      time.getDate() > date.getDate() ? time.getDate() - date.getDate() : 0
    return days
  }

  let amount = transactions.map(function (item) {
    return parseInt(item.amount, 10)
  })

  //console.log(amount)

  const sum = amount.reduce(add, 0) // with initial value to avoid when the array is empty

  function add(accumulator, a) {
    return accumulator + a
  }
  useEffect(() => {
    console.log('summary')
  }, [])

  //console.log(sum); // 6

  return (
    <Container fluid='md'>
      <Row className='mt-5'>
        <h4>Spending Summary</h4>
      </Row>
      <Row>
        <p>
          <b>{sum}</b> rupees already spent on this month.
        </p>
        <p>
          Only <b>1000</b> rupees remaining to spend on this month.
        </p>
        <p>
          {' '}
          <b>{getRemainingDays()}</b> days remaining in this month
        </p>
        <p>
          {' '}
          Last month saving was <b>25000</b> rupees.
        </p>
        <p>
          {' '}
          Total saving <b>40000</b> rupees, since, 10 Jan 2023.
        </p>
        <h5 className='text-success'>Congrats, Great Job!</h5>
      </Row>
    </Container>
  )
}

export default SpendingSummary
