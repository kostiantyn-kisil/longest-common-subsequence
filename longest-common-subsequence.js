const longestCommonSubsequence = (sequenceA, sequenceB) => traverse(sequenceA, sequenceA.length, 0, sequenceB, sequenceB.length, 0);

const traverse = (seqA, seqALen, curentAIndex, seqB, seqBLen, curentBIndex) => {
    if (seqALen === curentAIndex || seqBLen === curentBIndex) {
        return [];
    } else if (seqA[curentAIndex] === seqB[curentBIndex]) {
        return [
            seqA[curentAIndex],
            ...traverse(seqA, seqALen, curentAIndex + 1, seqB, seqBLen, curentBIndex + 1)
        ];
    } else {
        const excludeLastOfA = traverse(seqA, seqALen, curentAIndex + 1, seqB, seqBLen, curentBIndex);
        const excludeLastOfB = traverse(seqA, seqALen, curentAIndex, seqB, seqBLen, curentBIndex + 1);

        return excludeLastOfA.length > excludeLastOfB.length ? excludeLastOfA : excludeLastOfB;
    }
}


module.exports = { longestCommonSubsequence };