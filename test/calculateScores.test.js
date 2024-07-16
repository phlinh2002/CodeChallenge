const fs = require('fs');
const calculateScores = require('../src/calcualteScores');

jest.mock('fs');

describe('calculateScores', () => {
  it('calculates scores correctly', () => {
    const mockData = JSON.stringify([
      { "_id": "1", "rating": 4, "gender": "female" },
      { "_id": "2", "rating": 10, "gender": "female" },
      { "_id": "3", "rating": 10, "gender": "female" },
      { "_id": "4", "rating": 7, "gender": "male" },
      { "_id": "5", "rating": 8, "gender": "male" },
      { "_id": "6", "rating": 7, "gender": "male" },
      { "_id": "7", "rating": 9, "gender": "diverse" },
      { "_id": "8", "rating": 10, "gender": "diverse" },
      { "_id": "9", "rating": 9, "gender": "diverse" }
    ]);

    fs.readFileSync.mockReturnValue(mockData);

    const scores = calculateScores();
    expect(scores.femaleScore).toBe(8);
    expect(scores.maleScore).toBe(7.3);
    expect(scores.diverseScore).toBe(9.3);
  });

  it('sets score to zero if less than 3 responses', () => {
    const mockData = JSON.stringify([
      { "_id": "1a", "rating": 6, "gender": "female" },
      { "_id": "2a", "rating": 10, "gender": "female" },
      { "_id": "3b", "rating": 7, "gender": "male" },
      { "_id": "4zzz", "rating": 8, "gender": "male" }
    ]);

    fs.readFileSync.mockReturnValue(mockData);

    const scores = calculateScores();
    expect(scores.femaleScore).toBe(0);
    expect(scores.maleScore).toBe(0);
    expect(scores.diverseScore).toBe(0);
  });

  it('calculate scores correctly, although people didnt have answers about rating', () => {
    const mockData = JSON.stringify([
        { "_id": "1a", "rating": 6, "gender": "female" },
        { "_id": "4zzz", "rating": "", "gender": "male" },
        { "_id": "2a", "rating": 10, "gender": "female" },
        { "_id": "2a", "rating": "", "gender": "female" },
        { "_id": "3b", "rating": 7, "gender": "male" },
        { "_id": "3b", "rating": 7, "gender": "male" },
        { "_id": "43z", "rating": 8, "gender": "male" }
      ]);
    fs.readFileSync.mockReturnValue(mockData);

    const scores = calculateScores();
    expect(scores.femaleScore).toBe(5.3);
    expect(scores.maleScore).toBe(5.5);
    expect(scores.diverseScore).toBe(0);

  })
});
