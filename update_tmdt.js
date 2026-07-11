const fs = require('fs');

const path = 'index.html';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/<div class="eyebrow ac-reveal">PHẦN I<\/div>/g, '<div class="eyebrow ac-reveal">5.3 · Phòng Thương mại điện tử</div>');
content = content.replace(/<div class="eyebrow ac-reveal">PHẦN II<\/div>/g, '<div class="eyebrow ac-reveal">5.3 · Phòng Thương mại điện tử</div>');
content = content.replace(/<div class="eyebrow ac-reveal">PHẦN III · 4 YẾU TỐ TRỌNG YẾU<\/div>/g, '<div class="eyebrow ac-reveal">5.3 · Phòng Thương mại điện tử (4 yếu tố trọng yếu)</div>');
content = content.replace(/<div class="eyebrow ac-reveal">PHẦN IV<\/div>/g, '<div class="eyebrow ac-reveal">5.3 · Phòng Thương mại điện tử</div>');

fs.writeFileSync(path, content, 'utf8');
console.log("Success");
