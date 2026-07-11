const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace pills in hero
html = html.replace(
    '<span class="pill ac-pop" style="--i:5">Phòng HKKG</span>\n      <span class="pill ac-pop" style="--i:6">Phòng PTKD</span>',
    '<span class="pill ac-pop" style="--i:5">Phòng PTKD</span>\n      <span class="pill ac-pop" style="--i:6">Phòng HKKG</span>'
);

// Replace pills in closing slide
html = html.replace(
    '<span class="pill ac-pop" style="--i:4">Phòng HKKG</span>\n      <span class="pill ac-pop" style="--i:5">Phòng PTKD</span>',
    '<span class="pill ac-pop" style="--i:4">Phòng PTKD</span>\n      <span class="pill ac-pop" style="--i:5">Phòng HKKG</span>'
);

// Replace 'Mục 05' in TOC
html = html.replace('<div class="divider__no ac-reveal">05</div>', '<div class="divider__no ac-reveal">04</div>');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Final fixes done.');
