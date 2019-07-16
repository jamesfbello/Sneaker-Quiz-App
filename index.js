var questionBank = [
    {//question 1
      question: "What is Nike's trademark logo called?",
      answers: ['Check',
                'U-turn',
                'Swoosh',
                'Zip Curve'],
      correctAnswer: 'Swoosh'
    },
    {//question 2
      question:'Who founded Adidas?',
      answers: ['Phil Knight',
                'Rudolf Dassler', 
                'Tinker Hatfield', 
                'Adolf Dassler'],
      correctAnswer: 'Adolf Dassler'
    },
    {//question 3
      question:'What does ASICS stand for?',
      answers: ['A Short Interveled Core Study',
                'Applications Stored Inside Cellular Shoes', 
                'Anima Sana In Corpore Sano', 
                'Alpha Shoe Integrated Chip System'],
      correctAnswer: 'Anima Sana In Corpore Sano'
    },
    {//question 4
      question:'When did the Nike Air Jordan 1 first release?',
      answers: ['1990',
                '1987',
                '1985',
                '1982'],
      correctAnswer: '1985'
    },
    {//question 5
      question:'Which one of these shoes has NOT been showcased in a movie?',
      answers: ['Yeezy 350 Boost "Beluga"',
                'Air Jordan 11 "Space Jam"',
                'Nike "Air Mag"',
                'PF Flyers'],
      correctAnswer: 'Yeezy 350 Boost "Beluga"'
    },
    {//question 6
      question:'Where is Nike HQ located?',
      answers: ['Los Angeles, California',
                'Beaverton, Oregon',
                'New York City, NY',
                'Seattle, Washington'],
      correctAnswer: 'Beaverton, Oregon'
    },
    {//question 7
      question: 'Who is the famous icon who left Nike in 2013 to start a signature shoe line with Adidas?',
      answers: ['Drake',
                'Lebron James',
                'Michael Jordan', 
                'Kanye West'],
      correctAnswer: 'Kanye West'
    },
    {//question 8
      question:'What parent company owns Converse?',
      answers: ['Nike',
                'Adidas',
                'Vans',
                'Reebok'],
      correctAnswer: 'Nike'
    },
    {//question 9
      question:'Where was PUMA founded?',
      answers: ['United States',
                'Germany', 
                'Jamaica',
                'United Kingdom'],
      correctAnswer: 'Germany'
    },
    {//question 10
      question:'Which one of these designers has not designed a shoe for Nike?',
      answers: ['Virgil Abloh',
                'Tinker Hatfield',
                'Christian Tresser',
                'Phil Knight'],
      correctAnswer: 'Phil Knight'
    }];


    let questionNumber = 0;
    let score = 0;
    
    //generate question html
    function generateQuestion () {
      if (questionNumber < questionBank.length) {
        return `<div class="question-${questionNumber}">
        <h2>${questionBank[questionNumber].question}</h2>
        <form>
        <fieldset>
        <label class="answerOption">
        <input type="radio" value="${questionBank[questionNumber].answers[0]}" name="answer" required>
        <span>${questionBank[questionNumber].answers[0]}</span>
        </label>
        <label class="answerOption">
        <input type="radio" value="${questionBank[questionNumber].answers[1]}" name="answer" required>
        <span>${questionBank[questionNumber].answers[1]}</span>
        </label>
        <label class="answerOption">
        <input type="radio" value="${questionBank[questionNumber].answers[2]}" name="answer" required>
        <span>${questionBank[questionNumber].answers[2]}</span>
        </label>
        <label class="answerOption">
        <input type="radio" value="${questionBank[questionNumber].answers[3]}" name="answer" required>
        <span>${questionBank[questionNumber].answers[3]}</span>
        </label>
        <button type="submit" class="submitButton">Submit</button>
        </fieldset>
        </form>
        </div>`;
    } else {
        renderResults();
        restartQuiz();
        $('.questionNumber').text(10)
      }
    }
    
    //increment question number
    function changeQuestionNumber () {
      //if (questionNumber < questionBank.length) {
        questionNumber ++;
      //}
      $('.questionNumber').text(questionNumber+1);
    }
    
    //increment score
    function changeScore () {
      score ++;
    }
    
    //start quiz
    //on startQuizButton click hide start div
    //unhide quiz form div
    function startQuiz () {
      $('.quizStart').on('click', '.startButton', function (event) {
        $('.quizStart').remove();
        $('.questionAnswerForm').css('display', 'block');
        $('.questionNumber').text(1);
    });
    }
    
    // render question in DOM
    function renderQuestion () {
      $('.questionAnswerForm').html(generateQuestion());
    }
    
    //user selects answer on submit run user feedback
    function userSelectAnswer () {
      $('form').on('submit', function (event) {
        event.preventDefault();
        let selected = $('input:checked');
        let answer = selected.val();
        let correctAnswer = `${questionBank[questionNumber].correctAnswer}`;
        if (answer === correctAnswer) {
          selected.parent().addClass('correct');
          ifAnswerIsCorrect();
        } else {
          selected.parent().addClass('wrong');
          ifAnswerIsWrong();
        }
      });
    }
    
    function ifAnswerIsCorrect () {
      userAnswerFeedbackCorrect();
      updateScore();
    }
    
    function ifAnswerIsWrong () {
      userAnswerFeedbackWrong();
    }
    
    //user feedback for correct answer
    function userAnswerFeedbackCorrect () {
      let correctAnswer = `${questionBank[questionNumber].correctAnswer}`;
      $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"></div><p><b>You got it right!</b></p><button type=button class="nextButton">Next</button></div>`);
    }
    
    //user feedback for wrong answer
    function userAnswerFeedbackWrong () {
      let correctAnswer = `${questionBank[questionNumber].correctAnswer}`;
      $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"></div><p><b>You got it wrong</b><br>the correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
    }
    
    //update score text
    function updateScore () {
      changeScore();
      $('.score').text(score);
    }
    
    //when quiz is over this is the html for the page
    function renderResults () {
      if (score >= 8) {
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You are a Sneakerhead!</h3><img src="https://live.staticflickr.com/7861/45604911205_8130ee91e1_h.jpg" alt="car expert icon"/><p>You got ${score} / 10</p><p>You flexed your sneaker knowledge now go out and those shoes you have been eyeing, you deserve it!</p><button class="restartButton">Restart Quiz</button></div>`);
      } else if (score < 8 && score >= 5) {
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Almost there, just a couple more steps!</h3><img src="https://live.staticflickr.com/4349/37124938546_6ed78203fd_h.jpg" alt="Air Jordan 1 in boxes arranged in steps"/><p>You got ${score} / 10</p><p>Try again for a better score and the title of Sneakerhead!</p><button class="restartButton">Restart Quiz</button></div>`);
      } else {
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You got tripped out because you have your shoes on backwards!</h3><img src="http://4.bp.blogspot.com/_3ZRXPWRNUzA/TQ-eYfMcLbI/AAAAAAAAAFs/APU3KqvWXJU/s1600/IMAG0277%255B1%255D.jpg" alt="child with his shoes on backwards"/><p>You got ${score} / 10</p><p>Do a bit more research and you should be able to pass in no time!</p><button class="restartButton">Restart Quiz</button></div>`);
      }
    }
    
    //what happens when the user clicks next
    function renderNextQuestion () {
      $('main').on('click', '.nextButton', function (event) {
        changeQuestionNumber();
        renderQuestion();
        userSelectAnswer();
      });
    }
    
    //restart quiz function - reloads page to start quiz over
    function restartQuiz () {
      $('main').on('click', '.restartButton', function (event) {
        location.reload();
      });
    }
    
    //run quiz functions
    function createQuiz () {
      startQuiz();
      renderQuestion();
      userSelectAnswer();
      renderNextQuestion();
    }
    
    $(createQuiz);
    