const emoji=["๐","๐","๐ฅฒ","๐","๐ฅฐ","๐","๐ค","๐","๐คจ","๐","๐","๐ฅณ","๐คฉ","๐ฉ","๐ป","๐ค"]
const generateBtn = document.getElementById('btn');
document.getElementById('emoji-generator').textContent=emoji[0];
generateBtn.addEventListener('click',function(){
    let output =emoji[Math.floor(Math.random()*emoji.length)];
    document.getElementById("emoji-generator").textContent=output;
})