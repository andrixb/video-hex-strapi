import { useEffect, useState } from 'react';

interface useAPIParams {
    amountValue?: number;
    typeValue?: string;
    difficultyValue?: string;
}


export default function useAPIParams(amountValue = 10, typeValue = 'boolean', difficultyValue = 'hard') {
    const [amount, setAmount] = useState<number>(10);
    const [type, setType] = useState<string>('boolean');
    const [difficulty, setDifficulty] = useState<string>('hard');

    useEffect(() => {
        setAmount(amountValue);
        setType(typeValue);
        setDifficulty(difficultyValue);
    }, []);

    return {
        amount,
        type,
        difficulty,    
    }
}
