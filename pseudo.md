create questions: question string, answers, correct answers
create question counter = 0
Click on Start Button (attach event listner)
    Start timmer 75 seconds
        every second time is decreasing
        display time on screen
    Show first question with answer choices (function)
clicking ont he answer choices (attach event listner)
    check if answer click matches with correct answer for question
        display correct answer message
        check if we have time
            if question counter < length of your question array
                increment question counter
                    go to next question
    else || if(timer ===0)
    stop timer and grab the last second left
        display the score
    if wrong answer
        display wrong answer message
        decriment timer by 10 seconds
        check if we have time
        if question counter < length of your question array
            increment question counter
        go to next question
    else || if(timer ===0)
        stop timer and grab the last second left
        display the score
        form is going to take user initial and score and save in local storage and display it on second html page