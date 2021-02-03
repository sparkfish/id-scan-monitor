import IdScanMonitor from './id-scan-monitor'

IdScanMonitor.activateScanMonitor()
document.addEventListener('healthIdScan', (e) => {
    console.log(`healthIdScan: [${(e as CustomEvent).detail.toJson()}]`)
})
document.addEventListener('aamvaIdScan', (e) => {
    console.log(`aamvaIdScan: [${(e as CustomEvent).detail.toJson()}]`)
})

// import HealthIdCard from './health-id-card'
// //let hc = new HealthIdCard('%H^12345678901^^^BN123456^PC1234567890^GR123456789012345?')
// //let hc = new HealthIdCard('%WH9101004444ZGP923333171^SMITH/JOSE/MARCO^DB19860623?     ')
// let hc = new HealthIdCard('%WH9118772604960235001^GARCIA/MOSES/N^GR8F9999^BN610444^PC9999^RGUHC^DI20161008?                                                        ')
// //console.log(`healthId: [${hc.toJson()}]`)

// import AamvsIdCard from './aamva-id-card'
// //let dl = new AamvsIdCard('@|~||~|ANSI 636015080001DL00310283DLDCACM|~|DDAF|~|DDB10102016|~|DCBNONE|~|DCDNONE|~|DBA01162026|~|DCSSMITH|~|DDEN|~|DACJOHN|~|DDFN|~|DADMICHAEL|~|DDGN|~|DBD01272020|~|DBB02121966|~|DBC1|~|DAYBRO|~|DAZBRO|~|DAU071 IN|~|DAW160|~|DCLW|~|DDK1|~|DAG1234 MIDWAY RD|~|DAIADDISON|~|DAJTX|~|DAK750010000  |~|DCK03330779  20200128|~|DAQ0333779|~|DCF07121010115207915749|~|DCGUSA|~||~|', '|~|')
// //let dl = new AamvsIdCard('@|~||~|ANSI 636004090001DL00310235DLDCAC|~|DCBNONE|~|DCDM|~|DBA04152026|~|DCSDoe|~|DACJohn|~|DADNONE|~|DBD04152020|~|DBB04152004|~|DBC1|~|DAYBRO|~|DAU072 in|~|DAG123 Main Street|~|DAIAny Town|~|DAJPA|~|DAK123456     |~|DAQ1234567890|~|DCFNONE|~|DCGUSA|~|DDEN|~|DDFN|~|DAZBRO|~|DDH04152022|~|DDI04152023|~|DDJ04152025', '|~|')
// //let dl = new AamvsIdCard('@|~||~|ANSI 636026080102DL00410288ZA03290015DLDAQD12345678|~|DCSPUBLIC|~|DDEN|~|DACJOHN|~|DCUJR|~|DDFN|~|DADQUINCY|~|DDGN|~|DCAD|~|DCIOMAHA|~|DCBNONE|~|DCDNONE|~|DBNPUCKY|~|DBGSTICKS|~|DBSJ|~|DBD08242015|~|DBB01311970|~|DBA01312035|~|DBC1|~|DCJAUDIT|~|DAU069 in|~|DAYGRN|~|DAG789 E OAK ST|~|DAHAPT 1|~|DAIANYTOWN|~|DAJCA|~|DAK902230000|~|DCF83D9BN217QO983B1|~|DCGUSA|~|DAW180|~|DAZBRO|~|DCK12345678900000000000|~|DDB02142014|~|DDK1|~|ZAZAAN|~|ZAB|~|ZAC', '|~|')
// let dl = new AamvsIdCard('@|~||~|ANSI 636000100002DL00410278ZV03190008DLDAQT64235789|~|DCSSAMPLE|~|DDEN|~|DACMICHAEL|~|DDFN|~|DADJOHN|~|DDGN|~|DCUJR|~|DCAD|~|DCBK|~|DCDPH|~|DBD06062019|~|DBB06061986|~|DBA12102024|~|DBC1|~|DAU068 in|~|DAYBRO|~|DAG2300 WEST BROAD STREET|~|DAIRICHMOND|~|DAJVA|~|DAK232690000  |~|DCF2424244747474786102204|~|DCGUSA|~|DCK123456789|~|DDAF|~|DDB06062018|~|DDC06062020|~|DDD1|~|ZVZVA01')
// console.log(`aamvaId: [${dl.toJson()}]`)
