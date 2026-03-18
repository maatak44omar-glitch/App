function getTip() {
    const tips = [
        "✨ Use 'The 3-Second Hook': Start your Reel with a strong headline to stop people from scrolling.",
        "✨ Post at 'Peak Hours': Check your insights and post exactly when your followers are most active.",
        "✨ Reply to every comment in the first hour: This tells the algorithm your post is engaging.",
        "✨ Use 'SEO Keywords' in your Bio and Captions, not just hashtags.",
        "✨ Create 'Saveable Content': Educational carousels get more saves, which boosts reach.",
        "✨ Use Trending Audio, but keep the volume low (8-10%) if you are speaking.",
        "✨ Collab Posts: Partner with another creator to tap into their audience instantly.",
        "✨ Consistency over Intensity: Posting 3 times a week for a year is better than 7 times in one week."
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById('output').innerText = randomTip;
    document.getElementById('output').style.color = "#FFD700";
}

function getIdeas() {
    const ideas = [
        "💡 'A Day in My Life' Reel (Behind the scenes).",
        "💡 '3 Tools I use' to grow my brand.",
        "💡 'Mistakes to avoid' in your specific niche.",
        "💡 'How to' tutorial related to your service.",
        "💡 Answer a common question from your DMs in a video."
    ];
    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    document.getElementById('output').innerText = randomIdea;
}

function getHashtags() {
    const hashtags = [
        "#InstagramGrowth #SocialMediaStrategy #ContentCreator #DigitalMarketing #ViralTips",
        "#GrowthHacking #ReelsStrategy #SocialMediaMarketing #InfluencerTips #GoldenTips",
        "#MarketingDigital #SmallBusinessGrowth #OnlineBusiness #InstagramMarketing"
    ];
    const randomHash = hashtags[Math.floor(Math.random() * hashtags.length)];
    document.getElementById('output').innerText = randomHash;
}

function copyToClipboard() {
    const text = document.getElementById('output').innerText;
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard! ✅");
}
 
