 tips = ["Post 3 Reels a week! 🚀", "Reply to comments 💬", "Use trending audio 🎵"];
const ideas = ["A day in my life 🤳", "Tutorial video 🎥", "Behind the scenes 🎬"];
const hashtags = ["#viral #reels", "#growth #marketing", "#success"];

// 2. الدالة الذكية (مسح القديمة وحط هادي)
function showRandom(list) {
    // كياخد السمية من الخانة، وإلا كانت خاوية كيدير Guest
    const user = document.getElementById("username").value || "Guest";
    
    // كيختار نصيحة عشوائية
    const random = list[Math.floor(Math.random() * list.length)];
    
    // كيبين النتيجة مخصصة بالسمية
    document.getElementById("output").innerText = "Hey " + user + ", " + random;
}

// 3. ربط الدوال (هادشي اللي عندك ف السطور 41، 42، 43)
function getTip() { showRandom(tips); }
function getIdeas() { showRandom(ideas); }
function getHashtags() { showRandom(hashtags); }
function copyToClipboard() {
    const text = document.getElementById("output").innerText;
    if(text) {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard! ✅");
    } else {
        alert("Nothing to copy yet! ❌");
    }
}

