const fs = require('fs');

const path = 'index.html';
let content = fs.readFileSync(path, 'utf8');

const coverOld = '<div class="s-sub ac-reveal" style="--i:3;line-height:1.8">5.1 - Phòng Hàng không Không gian<br>5.2 - Phòng Thương mại điện tử<br>5.3 - Phòng Phát triển kinh doanh</div>';
const coverNew = '<div class="s-sub ac-reveal" style="--i:3;line-height:1.8">5.1 - Phòng Phát triển kinh doanh<br>5.2 - Phòng Hàng không Không gian<br>5.3 - Phòng Thương mại điện tử</div>';

content = content.replace(coverOld, coverNew);

const startMarker = '<!-- ===== S14a Khó khăn HKKG (1) ===== -->';
const midMarker1 = '<!-- ===== S16 VAI TRÒ TMĐT ===== -->';
const midMarker2 = '<!-- ===== S17c Khó khăn PTKD (5.3) ===== -->';
const endMarker = '<!-- ===== S18 THANK YOU ===== -->';

const idxStart = content.indexOf(startMarker);
const idxMid1 = content.indexOf(midMarker1);
const idxMid2 = content.indexOf(midMarker2);
const idxEnd = content.indexOf(endMarker);

if (idxStart === -1 || idxMid1 === -1 || idxMid2 === -1 || idxEnd === -1) {
    console.error("Could not find markers");
    process.exit(1);
}

let hkkgText = content.substring(idxStart, idxMid1);
let tmdtText = content.substring(idxMid1, idxMid2);
let ptkdText = content.substring(idxMid2, idxEnd);

hkkgText = hkkgText.replace(/5\.1 · Phòng Hàng không Không gian/g, '5.2 · Phòng Hàng không Không gian');
ptkdText = ptkdText.replace(/5\.3 · Phòng Phát triển kinh doanh/g, '5.1 · Phòng Phát triển kinh doanh');

const newBlocks = ptkdText + hkkgText + tmdtText;

const newContent = content.substring(0, idxStart) + newBlocks + content.substring(idxEnd);

fs.writeFileSync(path, newContent, 'utf8');
console.log("Success");
