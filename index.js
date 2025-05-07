// using javascript, solve

// Challenge 1: Optimized Longest Palindromic Substring with Constraints
//
// Problem Description:
//
// Given a string s, find the longest palindromic substring (a substring that reads the same forwards and backwards).
//
// Additional constraints:
//
// The returned substring must not exceed 100 characters.
//
// If there are multiple candidates with the same length, return the first one found.
//
// If there is no palindromic substring of length ≥ 2, return null.
//
// Input:
//
// s → string, length 1 to 10⁵, alphanumeric characters only.
//
// Output:
//
// The longest palindromic substring (string), or null.
//
// Examples:
// js
// Edit
// Input: "abac"
// Output: "aba"
//
// Input: "tacag"
// Output: "aca"
//
// Input: "wegeeksskeegyuwe"
// Output: "geeksskeeg"
//
// Input: "abcdefgh"
// Output: null

function findPalindrome(word) {
    if (word.length < 2) return null;

    let maxPalindrome = "";

    let aux = "";

    for (let i = 0; i < word.length; i++) {
        // Odd-length palindromes
        aux = "";
        let start = i, end = i;
        while (start >= 0 && end < word.length && word[start] === word[end]) {
            aux = word.slice(start, end + 1);
            if (aux.length > maxPalindrome.length) {
                maxPalindrome = aux;
            }
            start--;
            end++;
        }

        // Even-length palindromes
        aux = "";
        start = i;
        end = i + 1;
        while (start >= 0 && end < word.length && word[start] === word[end]) {
            aux = word.slice(start, end + 1);
            if (aux.length > maxPalindrome.length) {
                maxPalindrome = aux;
            }
            start--;
            end++;
        }
    }


    if (maxPalindrome.length > 100) maxPalindrome = maxPalindrome.slice(0, 100);
    return maxPalindrome.length >= 2 ? maxPalindrome : null;
}


console.log(findPalindrome("aba")) // Output: "aba"
console.log(findPalindrome("tacag")) // Output: "aca"
console.log(findPalindrome("eabae")) // Output: "eabae"
console.log(findPalindrome("wegeeksskeegyuwe")) // Output: "geeksskeeg"
console.log(findPalindrome("abcdefgh")) // Output: null