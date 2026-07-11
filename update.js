const fs = require('fs');

const path = "c:\\Users\\vietdt\\OneDrive - PetroVietnam Exploration Production Corporation (PVEP)\\Desktop\\HTML\\PVI-main\\index.html";
let html = fs.readFileSync(path, 'utf8');

// Helper to replace with checking
function replaceAll(str, find, replace) {
    if (!str.includes(find)) console.warn("WARNING: string not found: " + find.substring(0, 50));
    return str.split(find).join(replace);
}

// 1. Swap PTKD and HKKG in Slide 3 (Tổng quan KQKD 2025)
html = replaceAll(html, 
`<div class="kpi kpi--cyan ac-pop" style="--i:1"><span class="kpi__v">477,6 tỷ</span><span class="kpi__l">Phòng HKKG</span><span class="tag tag--g">117,9% KH</span></div>
      <div class="kpi kpi--cyan ac-pop" style="--i:2"><span class="kpi__v">947,1 tỷ</span><span class="kpi__l">Phòng PTKD</span><span class="tag tag--g">156,6% KH</span></div>`,
`<div class="kpi kpi--cyan ac-pop" style="--i:1"><span class="kpi__v">947,1 tỷ</span><span class="kpi__l">Phòng PTKD</span><span class="tag tag--g">156,6% KH</span></div>
      <div class="kpi kpi--cyan ac-pop" style="--i:2"><span class="kpi__v">477,6 tỷ</span><span class="kpi__l">Phòng HKKG</span><span class="tag tag--g">117,9% KH</span></div>`
);

html = replaceAll(html,
`<div class="hbar ac-reveal" style="--i:6"><span class="hbar__l">HKKG</span><div class="hbar__track" style="display:flex;border-radius:8px"><div class="hbar__fill ac-fill-x" style="--w:23.0%;background:linear-gradient(90deg,var(--pvi-blue),#00205c);border-radius:0"></div><div class="hbar__fill ac-fill-x" style="--w:9.5%;background:linear-gradient(90deg,var(--pvi-cyan),#0079b3);border-radius:0"></div></div><span class="hbar__v">477,6</span></div>
        <div class="hbar ac-reveal" style="--i:7"><span class="hbar__l">PTKD</span><div class="hbar__track" style="display:flex;border-radius:8px"><div class="hbar__fill ac-fill-x" style="--w:21.5%;background:linear-gradient(90deg,var(--pvi-blue),#00205c);border-radius:0"></div><div class="hbar__fill ac-fill-x" style="--w:42.9%;background:linear-gradient(90deg,var(--pvi-cyan),#0079b3);border-radius:0"></div></div><span class="hbar__v">947,1</span></div>`,
`<div class="hbar ac-reveal" style="--i:6"><span class="hbar__l">PTKD</span><div class="hbar__track" style="display:flex;border-radius:8px"><div class="hbar__fill ac-fill-x" style="--w:21.5%;background:linear-gradient(90deg,var(--pvi-blue),#00205c);border-radius:0"></div><div class="hbar__fill ac-fill-x" style="--w:42.9%;background:linear-gradient(90deg,var(--pvi-cyan),#0079b3);border-radius:0"></div></div><span class="hbar__v">947,1</span></div>
        <div class="hbar ac-reveal" style="--i:7"><span class="hbar__l">HKKG</span><div class="hbar__track" style="display:flex;border-radius:8px"><div class="hbar__fill ac-fill-x" style="--w:23.0%;background:linear-gradient(90deg,var(--pvi-blue),#00205c);border-radius:0"></div><div class="hbar__fill ac-fill-x" style="--w:9.5%;background:linear-gradient(90deg,var(--pvi-cyan),#0079b3);border-radius:0"></div></div><span class="hbar__v">477,6</span></div>`
);

// Slide 4 (DT 2025 vs KH)
html = replaceAll(html,
`<tr><td>HKKG</td><td>337,8</td><td>139,7</td><td>477,6</td><td>405,0</td><td class="pos">117,9%</td></tr>
          <tr><td>PTKD</td><td>315,8</td><td>631,3</td><td>947,1</td><td>605,0</td><td class="pos">156,6%</td></tr>`,
`<tr><td>PTKD</td><td>315,8</td><td>631,3</td><td>947,1</td><td>605,0</td><td class="pos">156,6%</td></tr>
          <tr><td>HKKG</td><td>337,8</td><td>139,7</td><td>477,6</td><td>405,0</td><td class="pos">117,9%</td></tr>`
);

// Slide 9 (Kế hoạch DT 2026) - Replace and update
html = replaceAll(html,
`<tr><td>HKKG</td><td>405,0</td><td>477,6</td><td class="pos">117,9%</td><td>552,0</td><td class="pos">+15,6%</td><td class="pos">+36,3%</td></tr>
        <tr><td>PTKD</td><td>605,0</td><td>947,1</td><td class="pos">156,6%</td><td>960,0</td><td class="pos">+1,4%</td><td class="pos">+58,7%</td></tr>`,
`<tr><td>PTKD</td><td>605,0</td><td>947,1</td><td class="pos">156,6%</td><td>987,0</td><td class="pos">+4,2%</td><td class="pos">+63,1%</td></tr>
        <tr><td>HKKG</td><td>405,0</td><td>477,6</td><td class="pos">117,9%</td><td>525,0</td><td class="pos">+9,9%</td><td class="pos">+29,6%</td></tr>`
);

// Slide 11 (TH 6T 2026 tổng quan) - Replace and update
html = replaceAll(html,
`<div class="kpi ac-pop" style="--i:0"><span class="kpi__v">823,7 tỷ</span><span class="kpi__l">Toàn Ban - 6T</span><span class="tag tag--g">112,4% KH 6T</span></div>
      <div class="kpi kpi--cyan ac-pop" style="--i:1"><span class="kpi__v">227,2 tỷ</span><span class="kpi__l">Phòng HKKG</span><span class="tag tag--g">102,4% KH 6T</span></div>
      <div class="kpi kpi--cyan ac-pop" style="--i:2"><span class="kpi__v">570,2 tỷ</span><span class="kpi__l">Phòng PTKD</span><span class="tag tag--g">116,8% KH 6T</span></div>`,
`<div class="kpi ac-pop" style="--i:0"><span class="kpi__v">912,8 tỷ</span><span class="kpi__l">Toàn Ban - 6T</span><span class="tag tag--g">124,6% KH 6T</span></div>
      <div class="kpi kpi--cyan ac-pop" style="--i:1"><span class="kpi__v">659,4 tỷ</span><span class="kpi__l">Phòng PTKD</span><span class="tag tag--g">135,1% KH 6T</span></div>
      <div class="kpi kpi--cyan ac-pop" style="--i:2"><span class="kpi__v">227,2 tỷ</span><span class="kpi__l">Phòng HKKG</span><span class="tag tag--g">102,4% KH 6T</span></div>`
);

html = replaceAll(html,
`<tr><td>HKKG</td><td>221,9</td><td>227,2</td><td class="pos">102,4%</td><td>552</td><td>41,2%</td></tr>
          <tr><td>PTKD</td><td>488,1</td><td>570,2</td><td class="pos">116,8%</td><td>960</td><td>59,4%</td></tr>
          <tr><td>TMĐT</td><td>22,7</td><td>26,2</td><td class="pos">115,7%</td><td>70</td><td>37,5%</td></tr>
          <tr class="total"><td>Toàn Ban</td><td>732,7</td><td>823,7</td><td class="pos">112,4%</td><td>1.582</td><td>52,1%</td></tr>`,
`<tr><td>PTKD</td><td>488,1</td><td>659,4</td><td class="pos">135,1%</td><td>987</td><td>66,8%</td></tr>
          <tr><td>HKKG</td><td>221,9</td><td>227,2</td><td class="pos">102,4%</td><td>525</td><td>43,3%</td></tr>
          <tr><td>TMĐT</td><td>22,7</td><td>26,2</td><td class="pos">115,7%</td><td>70</td><td>37,4%</td></tr>
          <tr class="total"><td>Toàn Ban</td><td>732,7</td><td>912,8</td><td class="pos">124,6%</td><td>1.582</td><td>57,7%</td></tr>`
);

// Slide 12 (TH 6T theo Phòng)
html = replaceAll(html,
`<tr><td>PTKD</td><td>262.183</td><td>308.083</td><td>570.265</td></tr>
          <tr><td>HKKG</td><td>154.915</td><td>72.306</td><td>227.221</td></tr>
          <tr><td>TMĐT</td><td>26.221</td><td>0</td><td>26.221</td></tr>
          <tr class="total"><td>Tổng</td><td>443.319</td><td>380.388</td><td>823.707</td></tr>`,
`<tr><td>PTKD</td><td>262.593</td><td>396.823</td><td>659.416</td></tr>
          <tr><td>HKKG</td><td>154.915</td><td>72.306</td><td>227.221</td></tr>
          <tr><td>TMĐT</td><td>26.221</td><td>0</td><td>26.221</td></tr>
          <tr class="total"><td>Tổng</td><td>443.729</td><td>469.129</td><td>912.858</td></tr>`
);

html = replaceAll(html,
`<div class="card card--ok ac-reveal" style="--i:4"><h4>HKKG</h4><p>TH <b>227,2 tỷ</b> · KH 221,9 tỷ → <b class="pos">102,4%</b></p></div>
      <div class="card card--ok ac-reveal" style="--i:5"><h4>PTKD</h4><p>TH <b>570,2 tỷ</b> · KH 488,1 tỷ → <b class="pos">116,8%</b></p></div>`,
`<div class="card card--ok ac-reveal" style="--i:4"><h4>PTKD</h4><p>TH <b>659,4 tỷ</b> · KH 488,1 tỷ → <b class="pos">135,1%</b></p></div>
      <div class="card card--ok ac-reveal" style="--i:5"><h4>HKKG</h4><p>TH <b>227,2 tỷ</b> · KH 221,9 tỷ → <b class="pos">102,4%</b></p></div>`
);

// Gộp Mục 03 và Mục 04:
// TOC
html = replaceAll(html,
`<div class="toc__item ac-reveal" style="--i:3" data-go="10"><span class="toc__no">03</span><span class="toc__t">Kế hoạch 2026 của từng Phòng</span></div>
      <div class="toc__item ac-reveal" style="--i:4" data-go="16"><span class="toc__no">04</span><span class="toc__t">Thực hiện 6 tháng 2026 &amp; so sánh kế hoạch năm</span></div>
      <div class="toc__item ac-reveal" style="--i:5" data-go="19"><span class="toc__no">05</span><span class="toc__t">Khó khăn, Thách thức &amp; Giải pháp của từng Phòng</span></div>`,
`<div class="toc__item ac-reveal" style="--i:3" data-go="10"><span class="toc__no">03</span><span class="toc__t">Kế hoạch – Thực hiện 2026</span></div>
      <div class="toc__item ac-reveal" style="--i:4" data-go="13"><span class="toc__no">04</span><span class="toc__t">Khó khăn, Thách thức &amp; Giải pháp của từng Phòng</span></div>`
);

// Cover 03
html = replaceAll(html,
`<section class="slide" data-title="Mục 03 · Kế hoạch 2026">
  <div class="slide-content"><div class="wrap divider cover">
    <div class="divider__kicker ac-reveal">Phần 03</div>
    <div class="divider__no ac-reveal" style="--i:1">03</div>
    <div class="divider__bar ac-reveal" style="--i:2"></div>
    <div class="divider__t ac-reveal" style="--i:3">Kế hoạch 2026 của từng Phòng</div>
  </div></div>
</section>`,
`<section class="slide" data-title="Mục 03 · Kế hoạch – Thực hiện 2026">
  <div class="slide-content"><div class="wrap divider cover">
    <div class="divider__kicker ac-reveal">Phần 03</div>
    <div class="divider__no ac-reveal" style="--i:1">03</div>
    <div class="divider__bar ac-reveal" style="--i:2"></div>
    <div class="divider__t ac-reveal" style="--i:3">Kế hoạch – Thực hiện 2026</div>
  </div></div>
</section>`
);

// Delete sheets 13, 14, 15, 16 and Cover 04
const section10Start = '<!-- ===== S10 KH 2026 từng phòng ===== -->';
const s11Start = '<!-- ===== S11 TH 6T 2026 tổng quan ===== -->';

if (html.indexOf(section10Start) !== -1 && html.indexOf(s11Start) !== -1) {
    const before = html.substring(0, html.indexOf(section10Start));
    const after = html.substring(html.indexOf(s11Start));
    html = before + after;
} else {
    console.warn("Could not find blocks to remove sheets 13-16");
}

// Update Eyebrows for 04 -> 03
html = replaceAll(html, '04 · Thực hiện 6 tháng 2026', '03 · Kế hoạch – Thực hiện 2026');
html = replaceAll(html, '05 · Khó khăn', '04 · Khó khăn'); // if exists
html = replaceAll(html, '<div class="divider__no ac-reveal">05</div>', '<div class="divider__no ac-reveal">04</div>');
html = replaceAll(html, '5.1 · Phòng', '4.1 · Phòng');
html = replaceAll(html, '5.2 · Phòng', '4.2 · Phòng');
html = replaceAll(html, '5.3 · Phòng', '4.3 · Phòng');

html = replaceAll(html, 
`Khó khăn, Thách thức<br>&amp; Giải pháp của từng Phòng</div>
    <div class="s-sub ac-reveal" style="--i:3;line-height:1.8">5.1 - Phòng Phát triển kinh doanh<br>5.2 - Phòng Hàng không Không gian<br>5.3 - Phòng Thương mại điện tử</div>`,
`Khó khăn, Thách thức<br>&amp; Giải pháp của từng Phòng</div>
    <div class="s-sub ac-reveal" style="--i:3;line-height:1.8">4.1 - Phòng Phát triển kinh doanh<br>4.2 - Phòng Hàng không Không gian<br>4.3 - Phòng Thương mại điện tử</div>`
);

// Content Khó khăn PTKD
const oldKhokanPTKD = `<div class="cards cards--3">
      <div class="card ac-reveal" style="--i:2"><h4><span class="card__ic">①</span> Nội dung đang cập nhật</h4><p>Phần khó khăn &amp; thách thức của Phòng Phát triển kinh doanh sẽ được bổ sung trong bản cập nhật tiếp theo.</p></div>
      <div class="card ac-reveal" style="--i:3"><h4><span class="card__ic">②</span> Nội dung đang cập nhật</h4><p>Phần khó khăn &amp; thách thức của Phòng Phát triển kinh doanh sẽ được bổ sung trong bản cập nhật tiếp theo.</p></div>
      <div class="card ac-reveal" style="--i:4"><h4><span class="card__ic">③</span> Nội dung đang cập nhật</h4><p>Phần khó khăn &amp; thách thức của Phòng Phát triển kinh doanh sẽ được bổ sung trong bản cập nhật tiếp theo.</p></div>
    </div>
    <div class="note note--o ac-reveal" style="--i:5;margin-top:var(--content-gap)">⏳ Slide dành riêng cho Phòng Phát triển kinh doanh - nội dung Khó khăn sẽ được bổ sung sau.</div>`;

const newKhokanPTKD = `<div class="cards cards--3">
      <div class="card card--warn ac-reveal scroll-y" style="--i:2"><h4><span class="card__ic">🛡</span> 1. Kinh doanh bảo hiểm gốc</h4>
        <ul class="blt">
          <li>Cạnh tranh khốc liệt từ DBV, TCGI, Opes... chạy đua hạ phí hoặc tăng chi phí trên đơn.</li>
          <li>CTBH đẩy mức hỗ trợ hợp lệ (PCCC tăng 10%, cá biệt 17-18%). Các nghiệp vụ chưa có biểu phí bắt buộc thì giảm phí, chào phí không cần hiệu quả, bù phí để giành dịch vụ.</li>
          <li>Các CTBH hậu thuẫn từ ngân hàng (MIC, BIC, VBI, TCGI...) triệt để khai thác tệp KH. Khách hàng điều chỉnh cơ cấu vốn vay dẫn đến PVI mất lợi thế.</li>
          <li>Dự án đầu tư công 2026 khởi sắc nhưng áp dụng chỉ định thầu cho đối tác quen, hạn chế khả năng tham gia của PVI.</li>
        </ul>
      </div>
      <div class="card card--bad ac-reveal" style="--i:3"><h4><span class="card__ic">🌐</span> 2. Nhận tái bảo hiểm quốc tế</h4>
        <ul class="blt">
          <li>Chủ động không tái tục nhận TBH fronting cho Aquilano qua WTW SGP, dẫn đến sụt giảm 147 tỷ DT và không thu xếp chương trình thay thế.</li>
          <li>Dịch vụ nhận TBH fronting BMC/EAI áp dụng nhiều yêu cầu chặt chẽ, giảm mức trách nhiệm nhiều nghiệp vụ để đảm bảo an toàn &amp; danh tiếng.</li>
        </ul>
      </div>
      <div class="card card--warn ac-reveal" style="--i:4"><h4><span class="card__ic">👥</span> 3. Nhân sự &amp; Quản trị</h4>
        <ul class="blt">
          <li>Nhân sự hiện tại của phòng khá mỏng so với khối lượng công việc và doanh thu được giao.</li>
        </ul>
      </div>
    </div>`;

html = replaceAll(html, oldKhokanPTKD, newKhokanPTKD);

// Content Giải pháp PTKD
const oldGiaiPhapPTKD = `<div class="steps">
      <div class="step ac-reveal" style="--i:2"><div class="step__n">1</div><div><h4>Nội dung đang cập nhật</h4><p>Phần giải pháp &amp; đề xuất của Phòng Phát triển kinh doanh sẽ được bổ sung trong bản cập nhật tiếp theo.</p></div></div>
      <div class="step ac-reveal" style="--i:3"><div class="step__n">2</div><div><h4>Nội dung đang cập nhật</h4><p>Phần giải pháp &amp; đề xuất của Phòng Phát triển kinh doanh sẽ được bổ sung trong bản cập nhật tiếp theo.</p></div></div>
    </div>
    <div class="note note--o ac-reveal" style="--i:4;margin-top:var(--content-gap)">⏳ Slide dành riêng cho Phòng Phát triển kinh doanh - nội dung Giải pháp sẽ được bổ sung sau.</div>`;

const newGiaiPhapPTKD = `<div class="steps">
      <div class="step ac-reveal" style="--i:2"><div class="step__n">1</div><div><h4>Bám sát khách hàng &amp; Dự án trọng điểm</h4><p>Bám sát khách hàng để đảm bảo tái tục thành công các dịch vụ hiện hữu và nhanh chóng thu xếp bảo hiểm cho các dự án trọng điểm lớn như các dự án xây dựng nhà máy điện sinh khối của Tập đoàn Erex tại Việt Nam…</p></div></div>
      <div class="step ac-reveal" style="--i:3"><div class="step__n">2</div><div><h4>Phát triển các nghiệp vụ đặc thù &amp; tiềm năng</h4><p>Bên cạnh các nghiệp vụ bảo hiểm truyền thống, tập trung khai thác và mở rộng các nghiệp vụ đặc thù và tiềm năng như: Trade Credit, Cyber Risk, D&amp;O, PI...</p></div></div>
    </div>`;

html = replaceAll(html, oldGiaiPhapPTKD, newGiaiPhapPTKD);

fs.writeFileSync(path, html, 'utf8');
console.log("File updated successfully.");
