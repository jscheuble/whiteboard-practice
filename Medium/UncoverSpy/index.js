/*
In a city-state of n people, there is a rumor going around that one of the n people is a spy for the neighboring city-state.

The spy, if it exists:

Does not trust anyone else.
Is trusted by everyone else (he's good at his job).
Works alone; there are no other spies in the city-state.
You are given a list of pairs, trust. Each trust[i] = [a, b] represents the fact that person a trusts person b.

If the spy exists and can be found, return their identifier. Otherwise, return -1.

Example 1:

Input: n = 2, trust = [[1, 2]]
Output: 2
Explanation: Person 1 trusts Person 2, but Person 2 does not trust Person 1, so Person 2 is the spy.
Example 2:

Input: n = 3, trust = [[1, 3], [2, 3]]
Output: 3
Explanation: Person 1 trusts Person 3, and Person 2 trusts Person 3, but Person 3 does not trust either Person 1 or Person 2. Thus, Person 3 is the spy.
*/



// brute force solution

function uncover_spy(n, trust) {
    let spy = [];
    let ppl = new Set();
    let relationships = {};

    for (let i = 0; i < trust.length; i++) {
        let personA = trust[i][0];
        let personB = trust[i][1];
        ppl.add(personA);
        ppl.add(personB);

        if (!relationships[personA]) {
            relationships[personA] = [personB]
        } else {
            relationships[personA].push(personB)
        }
    }

    ppl.forEach(e => {
        if (!relationships[e]) {
            let trustees = Object.values(relationships);

            let count = 0;
            for (let i = 0; i < trustees.length; i++) {
                if (trustees[i].includes(e)) {
                    count++;
                }
            }
            if (count == trustees.length) {
                spy.push(e)
            }
        }
    })

    return spy.length === 1 ? spy[0] : -1;
}
