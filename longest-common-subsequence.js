const longestCommonSubsequence = (sequenceA, sequenceB) => traverse(sequenceA, 0, sequenceB, 0);

const traverse = (seqA, curentAIndex, seqB, curentBIndex) => {
    if (seqA.length === curentAIndex || seqB.length === curentBIndex) {
        return [];
    } else if (seqA[curentAIndex] === seqB[curentBIndex]) {
        return [
            seqA[curentAIndex],
            ...traverse(seqA, curentAIndex + 1, seqB, curentBIndex + 1)
        ];
    } else {
        const excludeLastOfA = traverse(seqA, curentAIndex + 1, seqB, curentBIndex);
        const excludeLastOfB = traverse(seqA, curentAIndex, seqB, curentBIndex + 1);

        return excludeLastOfA.length > excludeLastOfB.length ? excludeLastOfA : excludeLastOfB;
    }
}


module.exports = { longestCommonSubsequence };