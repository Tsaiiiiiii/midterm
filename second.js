let bmi;
function BMI(weight,height){
    height = height/100;
    bmi = weight/(height*height);
    bmi=Math.floor(bmi*10)/10;
    console.log(bmi);
}
BMI(50,150);