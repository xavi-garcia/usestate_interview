import {useState} from 'react'
import {Card, Button} from 'react-bootstrap'

export function Counter (){
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1)
  }
  
  console.log({count})
  

    return (
        <>
        <Card style={{ width: '18rem' }} className="counter">
        <Card.Body>
          <Card.Title>Counter</Card.Title>
          <Card.Text>{count}</Card.Text>
          <Button onClick={increase} variant="primary">+</Button>
          <Button onClick={decrease} variant="danger">-</Button>
        </Card.Body>
      </Card>
        </>
    );

}