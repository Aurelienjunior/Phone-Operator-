    const phoneInput = document.getElementById("phone-input");
    // console.log(phoneInput.value)
    // phoneInput.addEventListener('input', function()){
    //   const value = phoneInput.value
    //   console.log(value);
    // }
    const operatorDiv = document.querySelector(".operator");
  
    const operators = [
      { digits: ['650', '651', '652', '653', '654', '680', '681', '682', '683', '670', '671', '672', '673', '674', '675', '676', '677', '678', '679', ], code: 'MTN' },
      { digits: ['655', '656', '658', '659', '690', '691', '692', '693', '694', '695', '696', '697', '698', '699'], code: 'Orange' },
      { digits: ['660', '661', '662', '663', '664', '665', '666', '667', '668', '669'], code: 'Nextel' },
      { digits: ['621', '622', '623', '624', '625', '626', '627', '628', '629'], code: 'Camtel' }
    ];
  
    phoneInput.addEventListener("input", function(event) {
      const inputChar = event.data; // Get the entered character
      if (!/\d/.test(inputChar)) {
        // If the entered character is not a digit, prevent it from being entered
        phoneInput.value = phoneInput.value.replace(/\D/g, '');
      }
  
      const value = phoneInput.value.substring(0, 3); // Extract the first 3 digits
      const operator = operators.find(op => op.digits.includes(value));
      operatorDiv.textContent = operator ? operator.code : 'Unknown';
      // console.log(phoneInput.value)
    });