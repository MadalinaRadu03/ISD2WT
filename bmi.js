let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    //i am gonna make the field height an weight false
    let height_status=false, weight_status=false;
//using an if statement it will check if the height its empty or is the height its not a number or if the height its bellow 0 
    // if it is once you will press the button calculate it will display an error 
    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }
//the weight its the same as height
    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }
// we now check the height and the weight =to true and will run to complite the final result
    if(height_status && weight_status){
        //this formula will calculate the bmi value
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
//if the bmi result its bellow 18.6 you are underweght and so on 
        if(bmi < 18.6){
            result.innerHTML = 'Under weight : ' + bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'Normal : ' + bmi;
        }else{
            result.innerHTML = 'Over weight : ' + bmi;
        }
    }else{
        //if the status its not true will display an alert message 
        alert('The form has errors');
        result.innerHTML = '';
    }
});

        
     