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

My first loop sets the size of each partition. The partition increases by i = i*2, starting at a size of one This should run log n times

My 2nd, 3rd, and 4th loops run through each partition and compare all the elements. Each partition has the size of I, and we will need to check all elements inside of each of the partitions are against all other elements, meaning that they should run $n^2$ times

Making the asymptotic equation $n^2 * logn = n^2*logn$ because everything is in nested loops

Making the asymptotic analysis O($n^2*logn$)



For this assignment, I used the resources of https://www.geeksforgeeks.org/in-place-algorithm/,https://www.w3schools.com/js/js_let.asp, https://stackoverflow.com/questions/2571049/how-to-sort-in-place-using-the-merge-sort-algorithm, and https://www.geeksforgeeks.org/how-to-swap-two-variables-in-javascript/.

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
