const http = require('http');
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const PORT = 4599;
const TYPES = { '.html':'text/html; charset=utf-8', '.js':'text/javascript', '.css':'text/css', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.svg':'image/svg+xml' };
http.createServer((req,res)=>{
  let p = decodeURIComponent(req.url.split('?')[0]);
  if(p === '/' ) p = '/BaoCao_HKKG_2025-2026.html';
  const fp = path.join(ROOT, p);
  if(!fp.startsWith(ROOT)){ res.writeHead(403); return res.end('no'); }
  fs.readFile(fp,(err,data)=>{
    if(err){ res.writeHead(404); return res.end('not found'); }
    res.writeHead(200,{'Content-Type': TYPES[path.extname(fp).toLowerCase()]||'application/octet-stream'});
    res.end(data);
  });
}).listen(PORT, ()=>console.log('preview on http://localhost:'+PORT));
