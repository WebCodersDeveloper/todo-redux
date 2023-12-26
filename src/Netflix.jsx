import  { useContext } from 'react'
import Step1 from './component/subscribeStepByStep/Step1';
import { ThemeContext } from './App';
import Step2 from './component/subscribeStepByStep/Step2';
import Step3 from './component/subscribeStepByStep/Step3';
import Step4 from './component/subscribeStepByStep/Step4';
import Step5 from './component/subscribeStepByStep/Step5';
import Final from './component/subscribeStepByStep/Final';

export default function Netflix() {
  

  // export const SetStep = setStep;
  
  const {theme, step} = useContext(ThemeContext)
  
//  const set = {...ThemeContext}
//  console.log(step);
// const step = 5;

  return (
    <>
      <div className={`subc_log ${theme}__log`}>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
        {step === 5 && <Step5 />}
        {step === 6 && <Final />}
        {/* <div className="next">
          <button onClick={Next}>Next</button>
        </div> */}
      </div>
    </>
  )
}
