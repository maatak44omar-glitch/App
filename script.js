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

function getFollowers() {
    const strategies = [
        "🔥 Strategy 1: Use 'Reels Remix' with trending videos in your niche to reach new audiences.",
        "📈 Strategy 2: Post 3-5 Reels per week using high-quality lighting and 3-second hooks.",
        "🤝 Strategy 3: Engage with followers of your competitors. Leave 10 thoughtful comments daily.",
        "keywords Strategy 4: Optimize your Bio with searchable keywords like 'Growth Expert' or 'Content Creator'.",
        "Story Strategy 5: Use 'Polls' and 'Questions' in your Stories to boost engagement algorithm."
    ];
    
    const randomStrategy = strategies[Math.floor(Math.random() * strategies.length)];
    document.getElementById('output').innerText = randomStrategy;
    document.getElementById('output').style.color = "#FFD700"; // لون ذهبي للنصيحة
}
