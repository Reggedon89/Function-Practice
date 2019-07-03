// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];


// ---------------------------
// 1. Find largest number
// ---------------------------

   
   var largest =  Math.max.apply(Math, numbers);
    console.log(largest);

// ---------------------------
// 2. Find longest string
// ---------------------------

    function findLongestWord() {
        var maxLength = 0;
        var longest;
        for (let i = 0; i < strings.length; i++) {
            if (strings[i].length > maxLength){
                maxLength = strings[i].length;
                longest = strings[i];
            }
        }
        return longest
    }

    console.log(findLongestWord())


// ---------------------------
// 3. Find even numbers
// ---------------------------

    function evenNum(){
        var newArr = []

        for (i = 0; i < numbers.length; i++){
            if (numbers[i] % 2 == 0) {
                newArr.push(numbers[i]);
            }
        }
    return newArr;
    }

    console.log(evenNum())

// ---------------------------
// 4. Find odd numbers
// ---------------------------

    function oddNum(){
        var newArr = []

        for (i = 0; i < numbers.length; i++){
            if (numbers[i] % 1 == 0) {
                newArr.push(numbers[i]);
            }
        }
    return newArr;
    }

    console.log(oddNum())
    

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

    function findIs() {
       var word = ''
        for (var i = 0; i < strings.length; i++){
            if (strings[i] == "is") {
                word = strings[i];
            }
        }
        return word
    }
console.log(findIs())

// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

    function joinArrays(a,b) {
       

        var newArr=a.concat(b); 

        return newArr
    }

    console.log(joinArrays(strings, numbers))

// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------