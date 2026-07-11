import re

path = r'c:\Users\vietdt\OneDrive - PetroVietnam Exploration Production Corporation (PVEP)\Desktop\HTML\PVI-main\index.html'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

cover_old = r'<div class="s-sub ac-reveal" style="--i:3;line-height:1.8">5\.1 - Phòng Hàng không Không gian<br>5\.2 - Phòng Thương mại điện tử<br>5\.3 - Phòng Phát triển kinh doanh</div>'
cover_new = r'<div class="s-sub ac-reveal" style="--i:3;line-height:1.8">5.1 - Phòng Phát triển kinh doanh<br>5.2 - Phòng Hàng không Không gian<br>5.3 - Phòng Thương mại điện tử</div>'
content = re.sub(cover_old, cover_new, content)

hkkg_match = re.search(r'(<!-- ===== S14a Khó khăn HKKG \(1\) ===== -->.*?)(?=<!-- ===== S16 VAI TRÒ TMĐT ===== -->)', content, re.DOTALL)
tmdt_match = re.search(r'(<!-- ===== S16 VAI TRÒ TMĐT ===== -->.*?)(?=<!-- ===== S17c Khó khăn PTKD \(5\.3\) ===== -->)', content, re.DOTALL)
ptkd_match = re.search(r'(<!-- ===== S17c Khó khăn PTKD \(5\.3\) ===== -->.*?)(?=<!-- ===== S18 THANK YOU ===== -->)', content, re.DOTALL)

if not hkkg_match or not tmdt_match or not ptkd_match:
    print('Could not find blocks')
    if not hkkg_match: print('No HKKG')
    if not tmdt_match: print('No TMĐT')
    if not ptkd_match: print('No PTKD')
else:
    hkkg_text = hkkg_match.group(1)
    tmdt_text = tmdt_match.group(1)
    ptkd_text = ptkd_match.group(1)
    
    hkkg_text = hkkg_text.replace('5.1 · Phòng Hàng không Không gian', '5.2 · Phòng Hàng không Không gian')
    ptkd_text = ptkd_text.replace('5.3 · Phòng Phát triển kinh doanh', '5.1 · Phòng Phát triển kinh doanh')
    
    new_blocks = ptkd_text + hkkg_text + tmdt_text
    
    start_idx = hkkg_match.start()
    end_idx = ptkd_match.end()
    
    new_content = content[:start_idx] + new_blocks + content[end_idx:]
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Success')
