import React, {useState} from 'react'
import Count from './Count'
import Title from './Title'
import Button from './Button'

const WrapComponent = () => {
    const [age, setAge] = useState(30);
    const [score, setScore] = useState(100);

    const incrementAge = () => {
        setAge(age + 1);
    }

    const incrementScore = () => {
        setScore(score + 100);
    }

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