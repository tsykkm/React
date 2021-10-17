import React, { useState, useCallback } from 'react'
import Count from './Count'
import Title from './Title'
import Button from './Button'

const WrapComponent = () => {
    const [age, setAge] = useState(30);
    const [score, setScore] = useState(100);

    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age])

    // useMemoを使用してもincrementScoreがrerenderされるのは、親コンポーネントであるWrapComponentがrerenderされたタイミングで、
    // incrementScoreが新たに再生成され、別関数として認識されるため
    const incrementScore  = useCallback(() => {
        setScore(score + 1);
    }, [score])

    return (
        <div>
            <Title/>
            <Count text='年齢' count={age}/>
            <Count text='信用スコア' count={score}/>
            <Button handleClick={incrementAge}>年齢+</Button>
            <Button handleClick={incrementScore}>信用スコア+</Button>
        </div>
    )
}

export default WrapComponent