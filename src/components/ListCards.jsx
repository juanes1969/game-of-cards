import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useGame } from "../hooks/useGame";

export const ListCards = () => {

    const { player1, player2, obtainedCards } = useGame();



    return (
        < Container >
            <Row>
                <Row>
                    <div className='align-items-center my-2'>
                        <h4>Jugador {player1.name}</h4>
                        <p>Cartas obtenidas</p>
                        {player1.cards.cuarta.map((card, index) => (
                            <img
                                className='col-sm-1 col-lg-1 mx-2 my-2'
                                key={index}
                                src={card.image}
                                alt={card.value}
                            />
                        ))}
                        {player1.cards.terna2.map((card, index) => (
                            <img
                                className='col-sm-1 col-lg-1 mx-2 my-2'
                                key={index}
                                src={card.image}
                                alt={card.value}
                            />
                        ))}
                        {player1.cards.terna.map((card, index) => (
                            <img
                                className='col-sm-1 col-lg-1 mx-2 my-2'
                                key={index}
                                src={card.image}
                                alt={card.value}
                            />
                        ))}
                    </div>
                </Row>
                <Row>
                    <div className='aling-items-center my-2'>
                        <h4>Jugador {player2.name}</h4>
                        <p>Cartas obtenidas</p>

                        {player2.cards.cuarta.map((card, index) => (
                            <img
                                className='col-sm-1 col-lg-1 mx-2 my-2'
                                key={index}
                                src={card.image}
                                alt={card.value}
                            />
                        ))}
                        {player2.cards.terna2.map((card, index) => (
                            <img
                                className='col-sm-1 col-lg-1 mx-2 my-2'
                                key={index}
                                src={card.image}
                                alt={card.value}
                            />
                        ))}
                        {player2.cards.terna.map((card, index) => (
                            <img
                                className='col-sm-1 col-lg-1 mx-2 my-2'
                                key={index}
                                src={card.image}
                                alt={card.value}
                            />
                        ))}
                    </div>
                </Row>

                <Row>
                    <div className='align-items-center my-2'>
                        <h4>Nuevas cartas</h4>
                        {obtainedCards.map((card, index) => (
                            <img
                                className='col-sm-1 col-lg-1 mx-2 my-2'
                                key={index}
                                src={card.image}
                                alt={card.value}
                            />
                        ))}
                    </div>
                </Row>
            </Row>
        </Container >
    )
}
