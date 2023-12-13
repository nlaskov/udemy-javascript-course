'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: c++'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const fav = Number(
      prompt(`${this.question} \n ${this.options.join('\n')}`)
    );

    if (fav && fav >= 0 && fav <= 3) this.answers[fav] += 1;
    else alert('Wrong input!');
    this.displayResults();
  },

  displayResults(type = 'string') {
    type === 'array' && console.log(this.answers);
    type === 'string' &&
      console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
