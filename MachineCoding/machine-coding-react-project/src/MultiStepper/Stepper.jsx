import React, { useState } from 'react'
import { defaultStepsInfo } from './defaultStepsInfo'
import './Stepper.css';

const Stepper = () => {
    const [stepsData, setStepsData] = useState(defaultStepsInfo);
    const [currentStep, setCurrentStep] = useState(1);

    const stepHandler = () => {
        if (currentStep === defaultStepsInfo.length) return;
        setCurrentStep(currentStep + 1);
    }

    const resetStepHandler = () => {
        setCurrentStep(1);
    }

    return (
        <>
            <div className='steps-container'>
                {stepsData.map((stepData, index) => {
                    return (
                        <ShowIndividualStep checked={currentStep >= index + 1}>{stepData.stepName}</ShowIndividualStep>
                    )
                })}
            </div>
            <div className='button-container'>
                <div>{defaultStepsInfo[currentStep - 1].details}</div>
                <button onClick={stepHandler}>Next</button>
                <button disabled={currentStep !== defaultStepsInfo.length} onClick={resetStepHandler}>Reset</button>
            </div>
        </>
    )
}

const ShowIndividualStep = ({ children, checked }) => {
    return <div className={`${checked && 'checked'}`} > {children}</div >
}

export default Stepper