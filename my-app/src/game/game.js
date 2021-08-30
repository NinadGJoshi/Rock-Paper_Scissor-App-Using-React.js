import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import './game.css'
import rock from '../assets/paper.jpg';
import paper from '../assets/rock.jpg';
import scissor from '../assets/scissor.jpg';

function Game() {
    const imgUrl = [rock, paper, scissor];
    const gesture = ['rock', 'paper', 'scissor'];
    var p1, p2;

    const [result, setResult] = useState([]);
    const [player1, setPlayer1] = useState(rock);
    const [player2, setPlayer2] = useState(rock);


    const getRandomIndex = () => {
        return Math.floor(Math.random() * 3);
    }
    const getResult = () => {
        let result = [];
        let [handGesture1, handGesture2] = [gesture[p1], gesture[p2]];
        if (handGesture1 === 'rock') {
            if (handGesture2 === 'rock') {
                result = ['draw'];
            } else if (handGesture2 === 'paper') {
                result = ['won', 'lost'];
            } else {
                result = ['lost', 'won'];
            }
        } else if (handGesture1 === 'paper') {
            if (handGesture2 === 'rock') {
                result = ['lost', 'won'];
            } else if (handGesture2 === 'paper') {
                result = ['draw'];
            } else {
                result = ['won', 'lost'];
            }
        } else if (handGesture1 === 'scissor') {
            if (handGesture2 === 'rock') {
                result = ['won', 'lost'];
            } else if (handGesture2 === 'paper') {
                result = ['lost', 'won'];
            } else {
                result = ['draw'];
            }
        }

        return result;
    }

    useEffect(() => {
        [p1, p2] = [getRandomIndex(), getRandomIndex()];
        setPlayer1(imgUrl[p1]);
        setPlayer2(imgUrl[p2]);
        setResult(getResult());
    }, []);

    return (
        <div className="game-wrapper">
            <div className="row">
                <div className="div-wrapper">
                    <p className="fs-1 game-heading">Rock-Paper-Scissor (Press F5)</p>
                </div>
            </div>
            <div className='row'>
                <div className="div-wrapper">
                    <div className="img-container col-4">
                        <img id={gesture[p1]} className="hand-img" src={player1} />
                    </div>
                    <div>
                        <p className="fs-2 versus-text">VS</p>
                    </div>
                    <div className="img-container col-4">
                        <img id={gesture[p2]} className="hand-img" src={player2} />
                    </div>
                </div>
            </div>
            <div className='row my-4'>
                <div className="div-wrapper container">
                    {(result.length > 1) ? (
                        <>
                            <div className="col-4">
                                <p className={result[0]}>{result[0]}<span></span></p>
                            </div>
                            <div className="col-4">
                                <p className={result[1]}>{result[1]}<span></span></p>
                            </div>
                        </>
                    ) : <>
                        <div className="col-12">
                            <p className={result.slice(-1)}>{result.slice(-1)[0]}</p>
                        </div>
                    </>}
                </div>
            </div>
        </div>
    );
}

export default Game;