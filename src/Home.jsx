
import {useState} from 'react'
import { Form,Button,Row,Col, FormLabel } from 'react-bootstrap'
import { useNavigate } from 'react-router';
// import Quiz from './Quiz'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';


function App() {
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  
  const navigate = useNavigate();
  
  

  const onSubmit = (evt) => {
    evt.preventDefault();

    if(name!==""){

      setSubmitted(true)
    }
  
    
    navigate('/quiz', { state: { player:name}});
    
  }

  return (
      <div className="home">
        
          {
            !submitted && 
                <div className="form">
                  
                <Form onSubmit={onSubmit}>
                <FormLabel className="form-title"><h1>Welcome to the Quiz</h1></FormLabel><br/><br/>
                <Row className="align-items-center">
                    <Col sm="auto" className="my-1">
                    <Form.Label htmlFor="inlineFormInputName" visuallyHidden>Enter Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" onChange={e=>setName(e.target.value)} required/>
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Button type="submit">Start Quiz</Button>
                    </Col>
                </Row>
                <h6 style={{color:'darkgreen',textAlign:"center"}}>developed by Omkar</h6>
                
                </Form>
                </div>
        }
        
    </div>
  );
}

export default App;
