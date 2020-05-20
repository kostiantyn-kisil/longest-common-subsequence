const {expect} = require('chai');
const {longestCommonSubsequence, longestCommonSubsequenceMemo} = require('./longest-common-subsequence');

describe('#longestCommonSubsequnce', () => {
    it('case #1', () => {
        const arr1 = ['Dog', 'Cat'];
        const arr2 = ['Dog', 'Bat', 'Cat'];

        const expected = ['Dog', 'Cat'];

        expect(longestCommonSubsequence(arr1, arr2)).to.deep.eq(expected);
    });

    it.only('case #2', () => {
        const arr1 = ['Dog', 'Ludacious', 'Ludacious', 'Anakin', 'Dog', 'Yam'];
        const arr2 = ['Ludacious', 'Spyro', 'Anakin', 'Spyro', 'Dog', 'Plum', 'Yam'] ;

        const expected = ['Ludacious', 'Anakin', 'Dog', 'Yam'];

        expect(longestCommonSubsequence(arr1, arr2)).to.deep.eq(expected);
    });

    it('case #3', () => {
        const arr1 = ['Dog', 'Dog', 'Dog', 'Dog'];
        const arr2 = ['Dog', 'Dog'];

        const expected = ['Dog', 'Dog'];

        expect(longestCommonSubsequence(arr1, arr2)).to.deep.eq(expected);
    });

    it('case #4', () => {
        const arr1 = ['Tea', 'Tea', 'Tea'];
        const arr2 = [];

        const expected = [];

        expect(longestCommonSubsequence(arr1, arr2)).to.deep.eq(expected);
    });

    it('case #5', () => {
        const arr1 = ['Dog', 'Yam', 'Yam', 'Dog'];
        const arr2 = ['Dog', 'Yam', 'Trout', 'Dog', 'Yam', 'Dog'];

        const expected = ['Dog', 'Yam', 'Yam', 'Dog'];

        expect(longestCommonSubsequence(arr1, arr2)).to.deep.eq(expected);
    });

    it('case #6', () => {
        const arr1 = ['Ginger', 'Dog', 'Spyro', 'Yam', 'Tea'];
        const arr2 = ['Dog', 'Yam', 'Ginger', 'Spyro', 'Tea'];

        const expected = ['Ginger', 'Spyro', 'Tea'];

        expect(longestCommonSubsequence(arr1, arr2)).to.deep.eq(expected);
    });
});

describe('#longestCommonSubsequenceMemo', () => {
    it('case #1', () => {
        const arr1 = ['Dog', 'Cat'];
        const arr2 = ['Dog', 'Bat', 'Cat'];

        const expected = ['Dog', 'Cat'];

        expect(longestCommonSubsequenceMemo(arr1, arr2)).to.deep.eq(expected);
    });

    it.only('case #2', () => {
        const arr1 = ['Dog', 'Ludacious', 'Ludacious', 'Anakin', 'Dog', 'Yam'];
        const arr2 = ['Ludacious', 'Spyro', 'Anakin', 'Spyro', 'Dog', 'Plum', 'Yam'] ;

        const expected = ['Ludacious', 'Anakin', 'Dog', 'Yam'];

        expect(longestCommonSubsequenceMemo(arr1, arr2)).to.deep.eq(expected);
    });

    it('case #3', () => {
        const arr1 = ['Dog', 'Dog', 'Dog', 'Dog'];
        const arr2 = ['Dog', 'Dog'];

        const expected = ['Dog', 'Dog'];

        expect(longestCommonSubsequenceMemo(arr1, arr2)).to.deep.eq(expected);
    });

    it('case #4', () => {
        const arr1 = ['Tea', 'Tea', 'Tea'];
        const arr2 = [];

        const expected = [];

        expect(longestCommonSubsequenceMemo(arr1, arr2)).to.deep.eq(expected);
    });

    it('case #5', () => {
        const arr1 = ['Dog', 'Yam', 'Yam', 'Dog'];
        const arr2 = ['Dog', 'Yam', 'Trout', 'Dog', 'Yam', 'Dog'];

        const expected = ['Dog', 'Yam', 'Yam', 'Dog'];

        expect(longestCommonSubsequenceMemo(arr1, arr2)).to.deep.eq(expected);
    });

    it('case #6', () => {
        const arr1 = ['Ginger', 'Dog', 'Spyro', 'Yam', 'Tea'];
        const arr2 = ['Dog', 'Yam', 'Ginger', 'Spyro', 'Tea'];

        const expected = ['Ginger', 'Spyro', 'Tea'];

        expect(longestCommonSubsequenceMemo(arr1, arr2)).to.deep.eq(expected);
    });
});