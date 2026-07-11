const fs = require('fs');

const path = 'index.html';
let content = fs.readFileSync(path, 'utf8');

// Add CSS animation before </style>
const cssAnim = `
@keyframes floatIc { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
.ic-float { display: inline-block; animation: floatIc 2s ease-in-out infinite; }
</style>
`;
if (!content.includes('.ic-float')) {
    content = content.replace('</style>', cssAnim);
}

// Replace the numbers in headers with animated icons
content = content.replace('<h4>1. Chưa hình thành năng lực', '<h4><span class="card__ic ic-float">🧩</span> Chưa hình thành năng lực');
content = content.replace('<h4>2. Chưa sở hữu sản phẩm', '<h4><span class="card__ic ic-float">🚀</span> Chưa sở hữu sản phẩm');
content = content.replace('<h4>3. Chưa khai thác hiệu quả', '<h4><span class="card__ic ic-float">📊</span> Chưa khai thác hiệu quả');
content = content.replace('<h4>4. Chưa phát huy đầy đủ', '<h4><span class="card__ic ic-float">🤝</span> Chưa phát huy đầy đủ');

fs.writeFileSync(path, content, 'utf8');
console.log("Success");
