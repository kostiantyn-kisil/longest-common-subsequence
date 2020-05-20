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

const memoize = (fn, cache) => {
    cache = cache || new Map();

    return (...args) => {
        const hash = args.join('');

        if (cache.has(hash)) {
            return cache.get(hash);
        }

        const result = fn(memoize(fn, cache), ...args);

        cache.set(hash, result);

        return result;
    }
}


const traverseWith = (fn, seqA, curentAIndex, seqB, curentBIndex) => {
    if (seqA.length === curentAIndex || seqB.length === curentBIndex) {
        return [];
    } else if (seqA[curentAIndex] === seqB[curentBIndex]) {
        return [
            seqA[curentAIndex],
            ...fn(seqA, curentAIndex + 1, seqB, curentBIndex + 1)
        ];
    } else {
        const excludeLastOfA = fn(seqA, curentAIndex + 1, seqB, curentBIndex);
        const excludeLastOfB = fn(seqA, curentAIndex, seqB, curentBIndex + 1);

        return excludeLastOfA.length > excludeLastOfB.length ? excludeLastOfA : excludeLastOfB;
    }
}

const traverseMemo = memoize(traverseWith);

const longestCommonSubsequenceMemo = (sequenceA, sequenceB) => traverseMemo(sequenceA, 0, sequenceB, 0);


module.exports = { longestCommonSubsequence, longestCommonSubsequenceMemo };