let questions = [];

// 1. fetch the data
// 2. console.log
// 3. response to json
// 4. map the data
// 5. set to variable


async function getData() {
    await fetch("https://opentdb.com/api.php?amount=20&category=15&difficulty=medium&type=multiple")
        .then((response) => {
            console.log(response)
            return response.json();
        })
        .then((data) => { 
            return data.results;
         })
        .then((data) => {
            console.log('running inside of the promise')
            questions = data;
        })
        .catch((error) => {
            console.warn(error)
            console.log(error, 'ooops');
        });

    console.log(questions)
}




getData();