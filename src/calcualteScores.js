const fs = require('fs')

function calculateScores(){
    const data = JSON.parse(fs.readFileSync('../CodeChallenge/data/challenge.answers.json','utf-8'));

    const scores = {
        female: [],
        male: [],
        diverse: [],
    };
    
    data.forEach(element => {
        const rating = element.rating ? element.rating : 0;

        if(element.gender === 'female') scores.female.push(rating);
        if(element.gender === 'male') scores.male.push(rating);
        if(element.gender === 'diverse') scores.diverse.push(rating);
    });

    const calculateAverage = (scoresArray) => {
        const sum = scoresArray.reduce((acc,scores) => acc + scores,0);
        return scoresArray.length >0 ? parseFloat((sum/scoresArray.length).toFixed(1)): null;
    }

    const femaleScore = scores.female.length >= 3 ? calculateAverage(scores.female): null;
    const maleScore = scores.male.length >=3 ? calculateAverage(scores.male): null;
    const diverseScore = scores.diverse.length >=3 ? calculateAverage(scores.diverse): null;

    return {
        femaleScore: femaleScore || 0,
        maleScore: maleScore || 0,
        diverseScore: diverseScore || 0,
    };
}

module.exports = calculateScores;