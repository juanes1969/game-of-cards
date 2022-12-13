import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { useGame } from '../hooks/useGame';

export const FormPlayGame = () => {

    const { idGame, requestCards, player1, setPlayer1, player2, setPlayer2, compare, setInitialGame, show } = useGame();

    const [showBtnCards, setShowBtnCards] = useState(false)

    const handleClick = async () => {
        if (player1.cards.cuarta.length === 0) {
            await setInitialGame();
        } else {
            await setValidate();
        }
        setShowBtnCards(true)
    }


    return (
        <Stack gap={2} className="col-md-5 mx-auto">
            <Button disabled={showBtnCards} onClick={handleClick} variant="secondary">Repartir cartas</Button>
            <Button disabled={show} onClick={requestCards} variant="secondary" >Nueva Carta</Button>
        </Stack>
    )
}
