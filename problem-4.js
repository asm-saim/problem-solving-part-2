// Problem-04: Same Same But Different   
// ⚠️ Function Name Must be isSame()
// তোমার কাজ হচ্ছে একটি ফাংশন তৈরি করা যার নাম হবে isSame()। এই ফাংশনটি দুটি অ্যারে ইনপুট হিসেবে নেবে, তারপর চেক করবে — এই দুইটি অ্যারে Same কিনা  যদি ২ টা  Array সেইম হয় তাহলে ফাংশন টি return করবে true ।  আর না হলে return করবে false ।
// ২ টা Array Same হবার শর্ত - 
// 🚩Array ২ টির length সমান হতে হবে।
// 🚩Array ২ টির  প্রতিটি index এর value exactly  same হতে হবে।


// 📥 Input:
// ফাংশন টি দুইটি  Array ইনপুট হিসেবে নেবে। 
// Array এর ভেতর যেকোন ধরনের primitive type data  থাকতে পারে। 

// 🚀 Output:
// Function টি একটা boolean value return করবে।  
// যদি দুইটি অ্যারে সেইম হয়  তাহলে ফাংশন return করবে true ।  আর  অন্যথায়  return করবে  false

// Note: তোমাকে অবশ্যই output টা রিটার্ন করতে হবে।  console.log করলে কোন মার্ক পাবেনা

// 🚩Challenge:  
// যদি ইনপুট দুটি Array না হয়, তাহলে ফাংশন return করবে:"Invalid"

// SAMPLE INPUT
// SAMPLE OUTPUT (boolean/string) 
// [1, 2, 3] , [1 , 2 , 3]
// true
// [34 , 5 ,7 ,9 ], [ 34 , 5 , 7 ]
// false
// [1, undefined , 3] , [1,null ,3]
// false
// [1 , 4 , 5], [1 , 4 , 5]
// true
// [1 , "4" , 4] ,[1 , 4  , 4]
// false
// [2 , 5 , 6] ,256
// Invalid
// {data: [2 , 5 , 6] } , [2 , 5 , 6]
// Invalid



function isSame(arr1, arr2) {
    if (Array.isArray(arr1) !== true || Array.isArray(arr2) !== true) {
        return "Invalid";
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true; 
}
const result = isSame([1, 4, 5], [1, 4, 5]);
console.log(result);

//Think of return true as the finish line — you only reach it if nothing went wrong! 
//Always check cheapest/easiest conditions first!

