//Challenge: You are a teacher at a school and you need to send a message to all your students that school is cancelled for the day! You need to do this quickly as the day is about to start and the students will be starting to leave their houses.

//Please write the code needed in the function that will alert all the students. Be as inventive with the text as you like and please share on Discords #share-your-code channel
// function sendText( first, last ) {
//     //Block fo code to complete
//     console.log( first + ' ' + last + ', school is cancelled for the day! Yipee!')
// }
// sendText('Xian', 'Lee')
// sendText('Anna', 'Seeberg')
// sendText('Robert', 'Anderson')
// sendText('Diane', 'Leming')
// sendText('Mariam', 'Dover')

//Send each student their test results
function sendText(first, last, result) {
    console.log(first + ' ' + last + ' your test result is ' + result + '%')
}

sendText('Xian', 'Lee', 49)
sendText('Anna', 'Seeberg', 89)
sendText('Robert', 'Anderson', 78)
sendText('Diane', 'Leming', 42)
sendText('Mariam', 'Dover', 50)
