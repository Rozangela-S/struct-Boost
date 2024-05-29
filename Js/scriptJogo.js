let randomNumber
document.addEventListener('DOMContentLoaded', function() {
     randomNumber = Math.floor(Math.random() * 10) + 1;
     let attempts = 3;

     console.log('Número correto:', randomNumber);

     document.getElementById('checkButton').onclick = function(){
          console.log('Botão clicado ')

               const guessInput = document.getElementById('guessInput');
               const message = document.getElementById('message');

               console.log('guessInput:', guessInput)

               if(guessInput){
                    const userGuess = parseInt(guessInput.value);
                    console.log('userGuess:', userGuess)

                    if(isNaN(userGuess) || userGuess < 1 || userGuess > 10){
                         message.textContent = ' Digite um número válido entre 1 e 10.';
                         guessInput.value = '';
                         return 0;
                    }
               
                    attempts--;
               
                    if (userGuess === randomNumber) {
                         message.textContent = 'Parabéns! Você acertou o número!';
                         disableInputAndButton();
                    } else {
                         if (attempts === 0) {
                         message.textContent = `Suas tentativas acabaram. O número correto era ${randomNumber}.`;
                         disableInputAndButton();
                         } else {
                         message.textContent = `Tente novamente. Você ainda tem ${attempts} tentativas.`;
                         }
                    };

                    guessInput.value = '';
                    
               } 
               
          }
});


function disableInputAndButton() {
 const guessInput = document.getElementById('guessInput');
 const button = document.getElementById('checkButton');

 guessInput.disabled = true;
 button.disabled = true;
}

