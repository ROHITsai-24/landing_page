document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        let parent = item.parentElement;
        let icon = item.querySelector('.toggle-icon');

        if (parent.classList.contains('open')) {
            parent.classList.remove('open');
            icon.textContent = '+';
        } else {
            parent.classList.add('open');
            icon.textContent = '−';

            let answerBox = parent.querySelector('.faq-answer');
            if (!answerBox) {
                let newAnswerBox = document.createElement('div');
                newAnswerBox.classList.add('faq-answer');
                newAnswerBox.style.marginTop = '10px';
                newAnswerBox.style.textAlign = 'left';

                let input = document.createElement('textarea');
                input.placeholder = 'Type your answer here...';
                input.style.width = '100%';
                input.style.padding = '8px';
                input.style.fontSize = '16px';

                newAnswerBox.appendChild(input);
                parent.appendChild(newAnswerBox);
            }
        }
    });
});

