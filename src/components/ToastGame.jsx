import Toast from 'react-bootstrap/Toast';
import { useGame } from '../hooks/useGame';
import { IoGameControllerOutline } from "react-icons/io5";
import ToastContainer from 'react-bootstrap/ToastContainer';

export const ToastGame = () => {

    const { showToast, setShowToast, winName } = useGame();


    return (
        <ToastContainer className='p-3' position='top-start'>
            <Toast show={showToast} onClose={() => setShowToast(false)}>
                <Toast.Header>
                    <div>
                        <IoGameControllerOutline />
                    </div>
                    &nbsp;
                    <strong className='me-auto'>Deck Of cards</strong>
                    {winName === 'EMPATE' ? (<small>Empate</small>) : (<small>Winner</small>)}

                </Toast.Header>
                {winName === 'EMPATE' ? (<Toast.Body>¡Hubo un empate! El juego a finalizado. </Toast.Body>) : (<Toast.Body>Player ${winName} </Toast.Body>)}
            </Toast>
        </ToastContainer>
    )
}
