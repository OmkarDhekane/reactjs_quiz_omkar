import React from 'react'
import { useLocation } from 'react-router';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Card, Modal,Button } from 'react-bootstrap';

// function shuffle(array) {

// 	let i = array.length - 1;
// 	for (; i > 0; i--) {
// 	  const j = Math.floor(Math.random() * (i + 1));
// 	  const temp = array[i];
// 	  array[i] = array[j];
// 	  array[j] = temp;
// 	}
// 	return array;
// }

export default function Quiz(props) {
    let questions = [
		{
			qid:1,
			questionText: 'Which of the following keyword is used to create a class inheritance in reactJS?',
			answerOptions: [
				{ answerText: 'Create', isCorrect: false },
				{ answerText: 'Inherits', isCorrect: false },
				{ answerText: 'Extends', isCorrect: true },
				{ answerText: 'This', isCorrect: false },
			],
		},
		{
			qid:2,
			questionText: 'Which feature of OOP indicates code reusability?',
			answerOptions: [
				{ answerText: 'Abstraction', isCorrect: false },
				{ answerText: 'Polymorphism', isCorrect: false },
				{ answerText: 'Encapsulation', isCorrect: false },
				{ answerText: 'Inheritance', isCorrect: true },
			],
		},
		{
			qid:3,
			questionText: 'Which of the following is not a type of tree?',
			answerOptions: [
				{ answerText: 'NVL', isCorrect: true },
				{ answerText: 'RBT', isCorrect: false },
				{ answerText: 'BST', isCorrect: false },
				{ answerText: 'B+', isCorrect: false },
			],
		},
		{
			qid:4,
			questionText: 'Which of the following is not an ACID Property in DBMS?',
			answerOptions: [
				{ answerText: 'Consistancy', isCorrect: false },
				{ answerText: 'Atomicity', isCorrect: false },
				{ answerText: 'Density', isCorrect: true },
				{ answerText: 'Isolation', isCorrect: false },
			],
		},
		{
			qid:5,
			questionText: 'What does CPU Stands for?',

			answerOptions: [
				{ answerText: 'Computer Personal Unit', isCorrect: false },
				{ answerText: 'Central Process Unit', isCorrect: false },
				{ answerText: 'Central Processing Unit', isCorrect: true },
				{ answerText: 'Central Processor Unit', isCorrect: false },
			],
		},
	];

	const totalQuestions = questions.length;

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);


    const {state} = useLocation();
    const { player } = state; 
	// var frac  = 0;

    const handleAnswers=(isCorrect)=>{
        if(isCorrect){
			setScore(score+1);
		}
		
		// questions[currentQuestion].selected = optionSelected;

        const countQs = currentQuestion + 1;
		
		if(countQs < totalQuestions){
            setCurrentQuestion(countQs);
        }else{
            setShowScore(true);

			// frac = ((score/totalQuestions)*100)
			// if(frac > 60 && frac < 80){
			// 	setScore()
			// }

			setModalShow(true)
        }
    }


	// const option = props.option;
	

	// useEffect(() => {
	// 	const time = setTimeout(() => {
		  
	// 		const q = currentQuestion+1;
	// 		if(q < totalQuestions){
	// 			setCurrentQuestion(q)
	// 		}else{
	// 			setShowScore(true)
	// 		}
		  
	// 	  setShow(false)

	// 	}, 3000)
	// 	return () => {setTimeout(time)}
	//   })
	const [modalShow, setModalShow] = useState(false)


    return (
        <div className="quiz">

            {showScore?
				<>


				 <MyVerticallyCenteredModal
						show={modalShow}
						onHide={() => setModalShow(false)}
						score={score}
						total = {totalQuestions}
				/>
				
                	<h1 className="text-center" style={{color:"#7478a7"}}>Your score {score} out of {totalQuestions}</h1>
					<Link to="/">Back to main</Link>
					<ul className="list-result">
						{
							questions.map((question)=>(
								<li key={question.qid}>
									<QuestionCard question={question} option="read"/>
								</li>
							))
						}
					</ul>
				</>
                :
                <>
                        <h4 style={{float:"right",marginRight:"10px"}}>Hello {player}</h4> 
                        <div className="questionsData">
							<div className="qcnt">
								<span>Questions completed : {currentQuestion} / {totalQuestions}</span>
							</div>
                        </div>
						<QuestionCard question={questions[currentQuestion]} handler={handleAnswers} option="write"/>	
												
						{/* <QuestionCard question={questions[currentQuestion]} handler={handleAnswers}
							currentQuestion = {currentQuestion}
							setCurrentQuestion = {setCurrentQuestion}
							totalQuestions = {totalQuestions}
							showScore ={showScore}
							setShowScore = {setShowScore}
						/> */}


						
                </>
        }

        </div>
    )
}


function QuestionCard(props) {
	
	const  question  =  props.question;
	const option = props.option;

	
	// var {currentQuestion,setCurrentQuestion,totalQuestions,setShowScore} = props;	


	// const [clicked,setClicked] = useState(false);
	// const [select,SetSelect] = useState(-1);
	// const [show,setShow] = useState(false);

	// useEffect(() => {
	// 	const timeout = setTimeout(() => {
	// 	  setShow(false)
	// 	  setClicked(false)
	// 	}, 2000)
	// 	return () => 
	// 	{
	// 		clearTimeout(timeout)	
	// 	}
	//   }, [show])

	return (
		<Card className="mx-auto" id="mycard">
			<Card.Header className="text-center">{question.questionText}</Card.Header>
  			<Card.Body>
				  <div className="row options">			
							
							


							{/* (clicked) && 
							question.answerOption.map((answerOption,i)=>(
							(currentQuestion<totalQuestions)?setCurrentQuestion(currentQuestion+1):setShowScore(true)
							) */}
						


							{/* (!(clicked) && !(show))?
							question.answerOptions.map((answerOption,i)=>(

						 	<button className="btn col-sm" key={i} onClick={()=>							
							{
								
								setClicked(true);
								setShow(true);
								SetSelect(i);
								question.answerOptions.map((answerOption,i)=>(
									props.handler(answerOption.isCorrect,i)
								))
							

							}
							
							}>{answerOption.answerText}</button>
						))
						:
						
						
						
						question.answerOptions.map(
							(answerOption,i)=>(
							
							
							
							(answerOption.isCorrect === true)?
							<div className="btn col-sm" key={i} style={{backgroundColor:"#198754"}}>{answerOption.answerText}
							{
								(select === i)? <span style={{fontSize:"small"}}>&nbsp;&nbsp;(selected)</span>:""
							}
							
							</div>
							:
							<div className="btn col-sm" key={i} style={{backgroundColor:"#dc3545"}}>{answerOption.answerText}
							{
								(select === i)? <span style={{fontSize:"small"}}>&nbsp;&nbsp;(selected)</span>:""
							}
							</div>
							
							
						))
						
						*/}
						
						{

							(option === 'write')?
							question.answerOptions.map((answerOption,i)=>(
								<button className="btn col-sm" key={i} onClick={()=>props.handler(answerOption.isCorrect,i)}
								>{answerOption.answerText}</button>
							))
							:

							question.answerOptions.map((answerOption,i)=>(

								
								(answerOption.isCorrect === true)?
								<div className="btn col-sm" key={i} style={{backgroundColor:"#198754"}}>{answerOption.answerText}
								{
									(question.selected === i)? <span style={{fontSize:"small"}}>&nbsp;&nbsp;(selected)</span>:""
								}
								</div>
								:
								<div className="btn col-sm" key={i} style={{backgroundColor:"#dc3545"}}>{answerOption.answerText}
								{
									(question.selected === i)? <span style={{fontSize:"small"}}>&nbsp;&nbsp;(selected)</span>:""
								}
								</div>

							))
							
						}


					

				  </div>
			</Card.Body>
		</Card>

	)
}

function MyVerticallyCenteredModal(props) {

	const Finalscore = (props.score/props.total)*100;

	return (
	  <Modal
		{...props}
		size="lg"
		aria-labelledby="contained-modal-title-vcenter"
		centered
	  >
		<Modal.Header closeButton>
		  <Modal.Title  id="contained-modal-title-vcenter">
		 Congratulations! Your Quiz is now submitted
		  </Modal.Title>
		</Modal.Header>
		<Modal.Body>
		  {

			  (Finalscore >= 60 && Finalscore <= 80)?
			  	<div>
				  <h1 style={{color:"blue"}}>score:{Finalscore} Very Good !!!</h1>
				  <a href="https://google.com">Click on for getting best offer from UpCloud digital healthcare</a> 
				</div> 
			  : (Finalscore === 100)?<h1 style={{color:"orange"}}>score:{Finalscore} Well Done !!!</h1>
			  : 
			<div className="text-center">
				<h1  style={{fontSize:"1.5rem", color:"orange"}}>score:{Finalscore} Sorry you are not eligible to get best offer, please try again !!!</h1> 
				<Link to="/"><Button variant="warning" className="w-25">Replay</Button></Link>
			</div>
		  }

		</Modal.Body>
		<Modal.Footer>
		  <Button onClick={props.onHide}>Close</Button>
		</Modal.Footer>
	  </Modal>
	);
  }