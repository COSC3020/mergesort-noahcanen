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

My first loop should be equivalent to log (n) my 2nd loop should be equivalent to 2log(n) Because the second loop is based on the 1st loop k = k + i*2   my 3rd and 4th loops compares the elements which the 1st two loops isolate so they should be equivalent to n^2 and because all of this is inside of a big nested loop my Asymptotic equation should be $3log(n) * n^2$  so my worst case should be $O(log(n) * n^2)$


For this assignment, I used the resources of https://www.geeksforgeeks.org/in-place-algorithm/,https://www.w3schools.com/js/js_let.asp, https://stackoverflow.com/questions/2571049/how-to-sort-in-place-using-the-merge-sort-algorithm, and https://www.geeksforgeeks.org/how-to-swap-two-variables-in-javascript/.

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
