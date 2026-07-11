$path = 'index.html'
$content = Get-Content $path -Raw -Encoding UTF8

$coverOld = '<div class="s-sub ac-reveal" style="--i:3;line-height:1.8">5.1 - Phòng Hàng không Không gian<br>5.2 - Phòng Thương mại điện tử<br>5.3 - Phòng Phát triển kinh doanh</div>'
$coverNew = '<div class="s-sub ac-reveal" style="--i:3;line-height:1.8">5.1 - Phòng Phát triển kinh doanh<br>5.2 - Phòng Hàng không Không gian<br>5.3 - Phòng Thương mại điện tử</div>'

$content = $content.Replace($coverOld, $coverNew)

$startMarker = '<!-- ===== S14a Khó khăn HKKG (1) ===== -->'
$midMarker1 = '<!-- ===== S16 VAI TRÒ TMĐT ===== -->'
$midMarker2 = '<!-- ===== S17c Khó khăn PTKD (5.3) ===== -->'
$endMarker = '<!-- ===== S18 THANK YOU ===== -->'

$idxStart = $content.IndexOf($startMarker)
$idxMid1 = $content.IndexOf($midMarker1)
$idxMid2 = $content.IndexOf($midMarker2)
$idxEnd = $content.IndexOf($endMarker)

if ($idxStart -eq -1 -or $idxMid1 -eq -1 -or $idxMid2 -eq -1 -or $idxEnd -eq -1) {
    Write-Host "Could not find markers"
    exit 1
}

$hkkgText = $content.Substring($idxStart, $idxMid1 - $idxStart)
$tmdtText = $content.Substring($idxMid1, $idxMid2 - $idxMid1)
$ptkdText = $content.Substring($idxMid2, $idxEnd - $idxMid2)

$hkkgText = $hkkgText.Replace('5.1 · Phòng Hàng không Không gian', '5.2 · Phòng Hàng không Không gian')
$ptkdText = $ptkdText.Replace('5.3 · Phòng Phát triển kinh doanh', '5.1 · Phòng Phát triển kinh doanh')

$newBlocks = $ptkdText + $hkkgText + $tmdtText

$newContent = $content.Substring(0, $idxStart) + $newBlocks + $content.Substring($idxEnd)

[IO.File]::WriteAllText($path, $newContent, [Text.Encoding]::UTF8)
Write-Host "Success"
