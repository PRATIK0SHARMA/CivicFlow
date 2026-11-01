// Run with: node tests.cjs. No packages required.
const vm=require('node:vm'),fs=require('node:fs'),assert=require('node:assert/strict');
let memory=null;const elements=new Map();const element=()=>({innerHTML:'',textContent:'',value:'',style:{},open:false,classList:{add(){},remove(){},toggle(){},contains(){return false}},addEventListener(){},setAttribute(){},showModal(){this.open=true},close(){this.open=false}});
const ctx={console,structuredClone,Date,Math,URLSearchParams,Blob,setTimeout(){},clearTimeout(){},crypto:require('node:crypto').webcrypto,localStorage:{getItem(){return memory},setItem(k,v){memory=v}},window:{addEventListener(){}},location:{hash:'#home'},document:{title:'',querySelector(s){if(!elements.has(s))elements.set(s,element());return elements.get(s)},querySelectorAll(){return []},addEventListener(){}}};
vm.createContext(ctx);vm.runInContext(fs.readFileSync('data.js','utf8'),ctx);vm.runInContext(fs.readFileSync('app.js','utf8'),ctx);
const run=code=>vm.runInContext(code,ctx);let passed=0;function test(name,fn){fn();console.log('PASS '+name);passed++}
test('Fresh seed has valid structure and zero fabricated requests',()=>{assert.equal(run('validateBackup(initial()).requests.length'),0);assert.equal(run('state.catalog.length'),20)});
test('Invalid backup schema rejected',()=>assert.throws(()=>run('validateBackup({schema:2})')));
test('Duplicate catalog IDs rejected',()=>assert.throws(()=>run('(()=>{const x=initial();x.catalog.push(x.catalog[0]);validateBackup(x)})()')));
test('Invalid owner profile rejected',()=>assert.throws(()=>run('(()=>{const x=initial();x.currentProfile="missing";validateBackup(x)})()')));
test('HTML is escaped before rendering',()=>assert.equal(run('esc("<img src=x onerror=alert(1)>")'),'&lt;img src=x onerror=alert(1)&gt;'));
test('CSV neutralizes spreadsheet formulas and escapes quotes',()=>{assert.equal(run('csvCell("=1+1")'),'"\'=1+1"');assert.equal(run('csvCell(\'say "hello"\')'),'"say ""hello"""')});
test('Received cannot transition directly to Resolved',()=>assert.equal(run('TRANSITIONS.Received.includes("Resolved")'),false));
test('Resolved and rejected can reopen',()=>{assert.equal(run('TRANSITIONS.Resolved.includes("In progress")'),true);assert.equal(run('TRANSITIONS.Rejected.includes("In progress")'),true)});
test('Commit persists settings and revision',()=>{run('commit(s=>s.settings.city="Test City")');assert.equal(JSON.parse(memory).settings.city,'Test City');assert.equal(run('state.revision'),1)});
test('Failed save does not mutate in-memory state',()=>{const orig=ctx.localStorage.setItem;ctx.localStorage.setItem=()=>{throw Error('quota')};assert.throws(()=>run('commit(s=>s.settings.city="Lost change")'));assert.equal(run('state.settings.city'),'Test City');ctx.localStorage.setItem=orig});
test('Commit uses current storage rather than stale cached state',()=>{const fresh=JSON.parse(memory);fresh.settings.city='Another tab';memory=JSON.stringify(fresh);run('commit(s=>s.settings.sample=false)');assert.equal(run('state.settings.city'),'Another tab')});
test('Invalid directory type rejected',()=>assert.throws(()=>run('(()=>{const x=initial();x.catalog[0].type="script";validateBackup(x)})()')));
console.log(`${passed} logic checks passed.`);
