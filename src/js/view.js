import fractionCalculator from './engine';

import 'bootstrap-scss';
import '../scss/view.scss';

window.addEventListener('load',()=>{
    const output = document.getElementById('display-fraction');
    const wholeDom = document.getElementById('whole-num');
    const decimalDom = document.getElementById('dec-num');
    const periodicDom = document.getElementById('per-num');
    const mainForm = document.getElementById('main-form');
    const ableDec = document.getElementById('able-dec');
    const partsOfNum = [wholeDom, decimalDom, periodicDom];
    const wholePartOut = document.getElementById('show-whole-part');
    const decPartOut = document.getElementById('show-dec-part');
    const periodicPartOut = document.getElementById('show-periodic-part');


    ableDec.addEventListener('change', ()=>{
        decimalDom.disabled =!ableDec.checked;
        if (ableDec.checked){
            decimalDom.focus();
            decPartOut.classList.remove('hidden');
        } else {
            decPartOut.classList.add('hidden');
        }
    });

    partsOfNum.forEach(manageNumericInput);
    partsOfNum.forEach(showCompleteNumber);

    function showCompleteNumber(partsOfNum){
        partsOfNum.addEventListener('input',()=>{
            wholePartOut.innerText = wholeDom.value || 0;
            decPartOut.innerText = decimalDom.value;
            periodicPartOut.innerText = periodicDom.value;
        })
    };


    function manageNumericInput(inputDom){
        inputDom.addEventListener('keypress',(keyPressEvt)=>{
            const isValidKey = keyPressEvt.key >= '0' && keyPressEvt.key <= '9';
            if (!isValidKey) keyPressEvt.preventDefault();
        })
    };

    mainForm.addEventListener('submit', evt => {
        evt.preventDefault();
        const whole = wholeDom.value;
        const decimal = ableDec.checked ? decimalDom.value : '';
        const periodic = periodicDom.value;
        const {num, den} = fractionCalculator(whole, decimal, periodic);
        showResult(num,den);
    });

    function showResult(num,den){
        output.innerHTML = `${num}/${den}`;
    }
})