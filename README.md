# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

My first and 2nd loop should be equivalent to n Because they are the ones that are dividing the list into sections and inside the usual implementation complexity is n

My 3th and 4rd loops does the comparisons inside of each of the sections yes so that should be equivalent to n log n because the usual implementation complexity is nlogn

Making the asymptotic equation $n * nlogn = n^2*logn$ because everything is in nested loops

Making the asymptotic analysis O($n^2*logn$)



For this assignment, I used the resources of https://www.geeksforgeeks.org/in-place-algorithm/,https://www.w3schools.com/js/js_let.asp, https://stackoverflow.com/questions/2571049/how-to-sort-in-place-using-the-merge-sort-algorithm, and https://www.geeksforgeeks.org/how-to-swap-two-variables-in-javascript/.

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
