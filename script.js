// const clickRes = () => {
//     let html = document.getElementById('html').value;
//     let css = document.getElementById('css').value;
//     let bootstrap = document.getElementById('bootstrap').value;
//     let javascript = document.getElementById('javascript').value;

//     let totalGrade = parseFloat(html) + parseFloat(css) + parseFloat(bootstrap) + parseFloat(javascript);

//     let perc = (totalGrade / 400) * 100;
//     alert(perc);
//     let grade = '';
//     if (perc <= 100 && perc >= 80){
//         grade = 'A';
//     }else if (perc <= 79 && perc >= 60){
//         grade = 'B';
//     }else if (perc <= 59 && perc >= 40){
//         grade = 'C';
//     }else if (perc <= 39 && perc >= 28){
//         grade = 'D';
//     }else {
//         grade = 'F';
//     }
//     document.getElementById('demo').innerHTML = `Out of 400 your total is ${totalGrade} and percentage is ${perc}%. Your Grade is ${grade}`;
// }

const clickRes = () => {
    const html = document.getElementById('html').value;
    const css = document.getElementById('css').value;
    const bootstrap = document.getElementById('bootstrap').value;
    const javascript = document.getElementById('javascript').value;

    let totalGrade = parseFloat(html) + parseFloat(css) + parseFloat(bootstrap) + parseFloat(javascript);
    alert(totalGrade)
    let percentage = (totalGrade / 400) * 100;
    alert(percentage)
    let grade = '';
    if (percentage <= 100 && percentage >= 80) {
        grade = 'A';
    } else if (percentage <= 79 && percentage >= 60) {
        grade = 'B';
    } else if (percentage <= 59 && percentage >= 40) {
        grade = 'C';
    } else if (percentage <= 39 && percentage >= 28) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    document.getElementById('demo').innerHTML = `Out of 400 your total is ${totalGrade} and percentage is ${percentage}%. Your Grade is ${grade}`;
}