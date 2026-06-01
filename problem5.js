// Problem-05: Exam Result Report Generator
// ⚠️ Function Name Must be resultReport()
// তোমাকে  resultReport()  নামে একটা ফাংশন বানাতে হবে , যেটা একটি নাম্বারের Array ইনপুট হিসেবে নেবে (যেখানে একজন student এর  মার্কসগুলো থাকবে) এবং রিটার্ন করবে একটি object, যেখানে থাকবে ৩ টি প্রোপার্টি —
// finalScore :  পরীক্ষার গড় নম্বর  |  pass: মোট কয়টি বিষয় পাস করেছে  |  fail: কয়টি বিষয় ফেল করেছে
// মনে রাখতে হবেঃ  
// 👉 প্রতিটি সাবজেক্টে পাশ মার্ক হলো  40 
// 👉 finalScore কখনো দশমিক হবেনা। এটাকে rounded করে  পুর্ন সংখ্যায় রুপান্তর করতে হবে।    

// 📥 Input:
// Function টি একটি array ইনপুট নেবে, যেটিতে থাকবে প্রতিটি পরীক্ষায় প্রাপ্ত number




// 🚀 Output:
// Output হবে একটি object , যার ভেতরে 3 টা প্রোপার্টি থাকবে। 

// finalScore : শিক্ষার্থীর গড় নম্বর  ( rounded )  
// pass: মোট কয়টি বিষয় পাস করেছে
// fail: আর কয়টি বিষয় ফেল করেছে
// Note: তোমাকে অবশ্যই output টা রিটার্ন করতে হবে।  console.log করলে কোন মার্ক পাবেনা



// 🚩Challenge:  
// ইনপুট  যদি Array না হয়  তাহলে   "Invalid" return করবে।  



// SAMPLE INPUT
// SAMPLE OUTPUT ( object / string ) 
// []
// { finalScore: 0 , pass: 0, fail: 0 }
// //explore   why  you got NaN 😉
// [98, 87, 67, 91, 92, 33, 87]
// { finalScore: 79, pass: 6, fail: 1 }
// [99, 87, 67, 12 ,87]
// { finalScore: 70, pass: 4, fail: 1 } 
// [99]
// { finalScore: 99, pass: 1, fail: 0 }
// 100
// Invalid


function resultReport(marks) {
    if (Array.isArray(marks) !== true) {
        return "Invalid";
    }
     // empty array check
    // if (marks.length === 0) {
    //     return { finalScore: 0, pass: 0, fail: 0 };
    // }
    let finalScore = 0;
    let fail = 0;
    let pass = 0;
    for (let mark of marks) {
        finalScore = Math.round(finalScore + (mark / marks.length));
        if (mark < 40) {
            fail++;
        }
        else {
            pass++;
        }

    } return { finalScore: finalScore, fail: fail, pass: pass };


}
const result = resultReport([]);
console.log(result);

