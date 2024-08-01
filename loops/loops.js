/*
使用 for 迴圈
找出 randomNumbers 能被 3 整除的數字
建立一個新陣列存放
10 % 3 = 1
*/
var randomNumbers = [585, 777, 727, 884, 916, 572, 299, 713, 925, 573, 904, 734, 419, 756, 561, 817, 939, 907, 151, 80, 611, 649, 808, 488, 905, 81, 825, 1, 446, 267, 822, 750, 902, 797, 343, 284, 292, 312, 275, 830, 220, 835, 47, 754, 399, 648, 328, 917, 397, 844, 878, 895, 18, 445, 946, 957, 671, 659, 97, 487, 39, 934, 458, 975, 760, 729, 554, 684, 323, 156, 898, 226, 369, 857, 153, 751, 454, 425, 478, 882, 617, 184, 608, 213, 460, 379, 276, 906, 927, 541, 677, 650, 298, 3, 707, 274, 423, 584, 51, 846];

var divisibleNumbers=[];
for(i=0; i<randomNumbers.length; i++){
  if(randomNumbers[i]%3==0)
    divisibleNumbers.push(randomNumbers[i]);
}
console.log(divisibleNumbers);


// 使用 while 迴圈列出所有被三整除的數字
var i=0;
while(i<randomNumbers.length){
  i++;
  randomNumbers%3==0;
  divisibleNumbers.push(randomNumbers[i]);
}
console.log("randomNumbers 能被 3 整除的數字是："+divisibleNumbers);