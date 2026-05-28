// Logo loading strategy (3 layers — something always shows):
// 1. Simple Icons CDN  → https://cdn.simpleicons.org/{slug}/{color}
// 2. Google Favicon    → https://t2.gstatic.com/faviconV2?...
// 3. Inline SVG        → drawn with real brand color (final safety net)

const SI  = (slug, hex) => `https://cdn.simpleicons.org/${slug}/${hex}`;
const GF  = (domain)    => `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=256`;

function logoFail(img, fallbackUrl, color, initials) {
  if (img._tried1) {
    // Both CDN and favicon failed — draw inline SVG
    const fs = initials.length > 4 ? 16 : initials.length > 3 ? 18 : 22;
    const s = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 80'><rect width='120' height='80' rx='8' fill='%23${color}'/><text x='60' y='48' font-family='Arial Black,sans-serif' font-weight='900' font-size='${fs}' fill='white' text-anchor='middle' dominant-baseline='middle'>${initials}</text></svg>`;
    img.onerror = null;
    img.src = 'data:image/svg+xml,' + s;
  } else {
    img._tried1 = true;
    img.src = fallbackUrl;
  }
}

const BRANDS = [

{ id:1,  name:'Safaricom',
  logo: SI('safaricom','00A550'),
  fallback: GF('safaricom.co.ke'),
  color:'00A550', initials:'SCM',
  country:'🇰🇪 Kenya', sector:'Telecom', rating:4.9, reviews:12400,
  story:'Safaricom is Kenya\'s largest telecommunications company and most profitable company in East and Central Africa. Founded in 1997, it launched M-Pesa mobile money in 2007, revolutionising financial inclusion across Africa. M-Pesa now processes transactions worth more than Kenya\'s entire GDP annually and the company serves over 47 million subscribers.' },

{ id:2,  name:'Equity Bank',
  logo: SI('equitybank','E31E25'),
  fallback: GF('equitybank.co.ke'),
  color:'E31E25', initials:'EQT',
  country:'🇰🇪 Kenya', sector:'Banking', rating:4.7, reviews:8900,
  story:'Equity Bank began as a small building society in Murang\'a in 1984 and grew into one of Africa\'s largest banks by customer numbers. With over 15 million accounts, it serves the previously unbanked with accessible, low-cost banking. Founder James Mwangi has won multiple international accolades for transforming banking access in Africa.' },

{ id:3,  name:'KCB Bank',
  logo: SI('kcb','006633'),
  fallback: GF('kcbgroup.com'),
  color:'006633', initials:'KCB',
  country:'🇰🇪 Kenya', sector:'Banking', rating:4.6, reviews:7200,
  story:'KCB Group is Kenya\'s largest commercial bank by assets, with a history dating back to 1896. It operates across 7 African countries with over 250 branches. Its KCB M-Pesa partnership made mobile lending accessible to millions of Kenyans without formal collateral.' },

{ id:4,  name:'Tusker Beer',
  logo: SI('eabl','F5A623'),
  fallback: GF('eabl.com'),
  color:'F5A623', initials:'TSK',
  country:'🇰🇪 Kenya', sector:'Beverages', rating:4.8, reviews:9800,
  story:'Tusker is Kenya\'s most iconic beer brand, brewed by East African Breweries Limited since 1922. Named in memory of co-founder George Hurst who was killed by an elephant. Tusker\'s elephant logo is one of the most recognisable in East Africa and the beer is exported to over 35 countries worldwide.' },

{ id:5,  name:'Coca-Cola Kenya',
  logo: SI('cocacola','F40009'),
  fallback: GF('coca-cola.com'),
  color:'F40009', initials:'CCK',
  country:'🇰🇪 Kenya', sector:'Beverages', rating:4.5, reviews:6700,
  story:'Coca-Cola has been present in Kenya since 1948, bottled locally by Century Bottlers. Deeply embedded in Kenyan culture from roadside kiosks in Kibera to five-star hotels in Nairobi, the brand invests heavily in community development including water access and youth entrepreneurship programmes.' },

{ id:6,  name:'Airtel Kenya',
  logo: SI('airtel','E40000'),
  fallback: GF('airtel.com'),
  color:'E40000', initials:'AIR',
  country:'🇰🇪 Kenya', sector:'Telecom', rating:4.2, reviews:5400,
  story:'Airtel Kenya is the second largest mobile network operator in Kenya with over 12 million subscribers. Part of the global Bharti Airtel group, it competes through competitive data bundles and Airtel Money services, driving down mobile costs for ordinary Kenyans.' },

{ id:7,  name:'Nation Media Group',
  logo: SI('nation','003580'),
  fallback: GF('nationmedia.com'),
  color:'003580', initials:'NMG',
  country:'🇰🇪 Kenya', sector:'Media', rating:4.4, reviews:4900,
  story:'Nation Media Group is the largest independent media house in East and Central Africa, founded by the Aga Khan in 1959. It publishes the Daily Nation — Kenya\'s most-read newspaper — and operates NTV, Nation FM, and digital platforms across Kenya, Uganda, Tanzania, and Rwanda.' },

{ id:8,  name:'Kenya Airways',
  logo: SI('kenyaairways','CC0000'),
  fallback: GF('kenya-airways.com'),
  color:'CC0000', initials:'KQ',
  country:'🇰🇪 Kenya', sector:'Aviation', rating:4.3, reviews:5800,
  story:'Kenya Airways, "The Pride of Africa," is Kenya\'s national carrier founded in 1977. It flies to over 50 destinations across Africa, Europe, Asia, and the Americas. A SkyTeam alliance member, KQ remains a symbol of Kenyan ambition and continental connectivity.' },

{ id:9,  name:'Bamburi Cement',
  logo: SI('holcim','FF6600'),
  fallback: GF('bamburi.co.ke'),
  color:'FF6600', initials:'BMB',
  country:'🇰🇪 Kenya', sector:'Construction', rating:4.4, reviews:3200,
  story:'Bamburi Cement is the largest cement manufacturer in East Africa, part of the global Holcim group. Founded in 1951, it has built Kenya\'s modern infrastructure from highways to housing estates. Its Haller Park project turned exhausted quarry land into a thriving nature reserve.' },

{ id:10, name:'Naivas Supermarket',
  logo: SI('naivas','E31E24'),
  fallback: GF('naivas.co.ke'),
  color:'E31E24', initials:'NVS',
  country:'🇰🇪 Kenya', sector:'Retail', rating:4.5, reviews:6700,
  story:'Naivas is Kenya\'s fastest-growing supermarket chain. Founded in Nakuru in 1990, it now operates over 90 stores across Kenya and Uganda. Kenyan-owned with a focus on fresh produce and local suppliers, Naivas filled the gap left by Nakumatt\'s collapse and is a beloved retail success story.' },

{ id:11, name:'Java House',
  logo: SI('java','4B2E10'),
  fallback: GF('javahouse.co.ke'),
  color:'4B2E10', initials:'JAVA',
  country:'🇰🇪 Kenya', sector:'Hospitality', rating:4.6, reviews:7800,
  story:'Java House is East Africa\'s leading coffee house chain, founded in Nairobi in 1999. Growing to over 70 outlets across Kenya, Uganda, Rwanda, and Ethiopia, Java House introduced modern café culture to East Africa and sources coffee directly from East African farmers.' },

{ id:12, name:'SportPesa',
  logo: SI('sportpesa','1E3A5F'),
  fallback: GF('sportpesa.com'),
  color:'1E3A5F', initials:'SPT',
  country:'🇰🇪 Kenya', sector:'Sports Betting', rating:4.1, reviews:8900,
  story:'SportPesa was founded in Nairobi in 2014 and became one of the world\'s most recognised sports betting brands, sponsoring Hull City, Everton, and Arsenal. It became the official betting partner of the Kenyan Premier League and brought global sports closer to Kenyan fans.' },

{ id:13, name:'Carrefour Kenya',
  logo: SI('carrefour','004F9F'),
  fallback: GF('carrefour.ke'),
  color:'004F9F', initials:'CRF',
  country:'🇰🇪 Kenya', sector:'Retail', rating:4.5, reviews:5900,
  story:'Carrefour entered Kenya in 2016 through the Majid Al Futtaim partnership and rapidly grew into one of Nairobi\'s most popular supermarkets. Operating large-format hypermarkets in shopping malls, it is known for wide product range, competitive pricing, and international goods.' },

{ id:14, name:'M-Kopa Solar',
  logo: SI('mkopa','FF9900'),
  fallback: GF('mkopa.com'),
  color:'FF9900', initials:'MKP',
  country:'🇰🇪 Kenya', sector:'Energy', rating:4.6, reviews:4400,
  story:'M-KOPA is a Nairobi-founded company providing pay-as-you-go solar energy to off-grid households across Africa. Founded in 2011, it has connected over 3 million homes to clean energy using M-Pesa micropayments and has been named one of the world\'s most innovative companies.' },

{ id:15, name:'Co-operative Bank',
  logo: SI('cooperativebank','003399'),
  fallback: GF('co-opbank.co.ke'),
  color:'003399', initials:'COOP',
  country:'🇰🇪 Kenya', sector:'Banking', rating:4.5, reviews:5900,
  story:'Co-operative Bank of Kenya is uniquely owned by Kenya\'s cooperative movement. With over 15 million customers and 180 branches, it champions banking for cooperative societies, farmers, and SACCOs. Its MCo-opCash platform made digital finance accessible to millions in rural Kenya.' },

{ id:16, name:'Stanbic Bank Kenya',
  logo: SI('stanbic','003580'),
  fallback: GF('stanbicbank.co.ke'),
  color:'003580', initials:'SBK',
  country:'🇰🇪 Kenya', sector:'Banking', rating:4.3, reviews:3100,
  story:'Stanbic Bank Kenya is part of Standard Bank Group, Africa\'s largest bank by assets. Known for trade finance, infrastructure lending, and corporate advisory, it has been instrumental in financing major Kenyan infrastructure projects including roads, energy, and telecoms.' },

{ id:17, name:'Keroche Breweries',
  logo: SI('keroche','CC0000'),
  fallback: GF('kerochemanufacturers.com'),
  color:'CC0000', initials:'KRB',
  country:'🇰🇪 Kenya', sector:'Beverages', rating:4.3, reviews:4200,
  story:'Keroche Breweries is Kenya\'s first locally-owned large-scale brewery, founded by Tabitha Karanja in 1997 in Naivasha. Producing Summit Lager and Vienna Ice, Keroche challenged EABL\'s dominance. Tabitha Karanja was later elected Senator for Nakuru County.' },

{ id:18, name:'Kenya Power',
  logo: SI('kenyapower','CC0000'),
  fallback: GF('kplc.co.ke'),
  color:'CC0000', initials:'KPLC',
  country:'🇰🇪 Kenya', sector:'Energy', rating:3.9, reviews:4100,
  story:'Kenya Power and Lighting Company is the sole electricity distributor in Kenya, managing over 7 million customer connections and operating networks reaching all 47 counties. It is central to the government\'s Last Mile Connectivity project for universal electricity access.' },

{ id:19, name:'M-Pesa',
  logo: SI('mpesa','00A550'),
  fallback: GF('mpesa.com'),
  color:'00A550', initials:'MPesa',
  country:'🇰🇪 Kenya', sector:'Fintech', rating:4.9, reviews:18500,
  story:'M-Pesa is one of the most transformative financial innovations in history. Launched by Safaricom in 2007, it enabled millions of unbanked Kenyans to send, receive, and save money via mobile phone. Today M-Pesa processes over $300 billion annually and has expanded across Africa and beyond.' },

{ id:20, name:'Nakumatt',
  logo: SI('nakumatt','FF0000'),
  fallback: GF('nakumatt.com'),
  color:'FF0000', initials:'NKM',
  country:'🇰🇪 Kenya', sector:'Retail', rating:3.8, reviews:6200,
  story:'Nakumatt was East Africa\'s largest supermarket chain at its peak with over 60 stores across 5 countries. Founded in Nakuru in 1987, its dramatic collapse in 2017 leaving suppliers and employees owed billions remains one of the most cautionary corporate stories in East African business history.' },

{ id:21, name:'Bidco Africa',
  logo: SI('bidco','003399'),
  fallback: GF('bidcoafrica.com'),
  color:'003399', initials:'BDC',
  country:'🇰🇪 Kenya', sector:'Consumer Goods', rating:4.5, reviews:4100,
  story:'Bidco Africa is one of East Africa\'s largest FMCG manufacturers, producing cooking oils, soaps, detergents, and personal care products. Founded in 1985, its brands Elianto, Kimbo, and Cowboy are household names across the region with manufacturing in Kenya, Uganda, and Tanzania.' },

{ id:22, name:'Tuskys Supermarket',
  logo: SI('tuskys','FF6600'),
  fallback: GF('tuskys.com'),
  color:'FF6600', initials:'TSY',
  country:'🇰🇪 Kenya', sector:'Retail', rating:3.9, reviews:5200,
  story:'Tuskys was one of Kenya\'s most popular supermarket chains with over 60 stores. Its collapse in 2020-2021 under financial pressure is a cautionary tale of aggressive expansion without financial discipline, mirroring the Nakumatt story that shook Kenyan retail.' },

{ id:23, name:'Pepsi Kenya',
  logo: SI('pepsi','004B93'),
  fallback: GF('pepsi.com'),
  color:'004B93', initials:'PEP',
  country:'🇰🇪 Kenya', sector:'Beverages', rating:4.2, reviews:4500,
  story:'Pepsi has been competing in Kenya\'s beverage market for decades, bottled locally and distributed nationally. Though Coca-Cola dominates, Pepsi maintains a loyal following through pricing and partnerships. PepsiCo\'s snacks portfolio including Lay\'s and Doritos is also growing strongly.' },

{ id:24, name:'Old Mutual Kenya',
  logo: SI('oldmutual','00843D'),
  fallback: GF('oldmutual.com'),
  color:'00843D', initials:'UAP',
  country:'🇰🇪 Kenya', sector:'Insurance', rating:4.2, reviews:2700,
  story:'UAP Old Mutual is one of East Africa\'s largest financial services groups, formed by the merger of UAP Insurance and South Africa\'s Old Mutual. Operating across Kenya, Uganda, Tanzania, Rwanda, and South Sudan, it offers life insurance, general insurance, and asset management services.' },

{ id:25, name:'Cellulant',
  logo: SI('cellulant','0066CC'),
  fallback: GF('cellulant.io'),
  color:'0066CC', initials:'CLT',
  country:'🇰🇪 Kenya', sector:'Fintech', rating:4.4, reviews:2200,
  story:'Cellulant is a pan-African digital payments company founded in Nairobi in 2003. It operates in 34 African countries connecting businesses to consumers through mobile money, cards, and bank transfers. Named one of Africa\'s most innovative companies, it has processed billions in transactions.' },

{ id:26, name:'ICEA Lion Group',
  logo: SI('icealion','003580'),
  fallback: GF('icealion.co.ke'),
  color:'003580', initials:'ICEA',
  country:'🇰🇪 Kenya', sector:'Insurance', rating:4.2, reviews:2400,
  story:'ICEA Lion Group is one of East Africa\'s largest insurance and asset management companies. Operating in Kenya, Uganda, Tanzania, and Rwanda, it manages assets worth billions and insures hundreds of thousands of individuals and businesses across the region.' },

{ id:27, name:'Unga Group',
  logo: SI('ungagroup','CC6600'),
  fallback: GF('ungagroup.com'),
  color:'CC6600', initials:'UNG',
  country:'🇰🇪 Kenya', sector:'Food Processing', rating:4.3, reviews:3100,
  story:'Unga Group is one of Kenya\'s oldest companies, milling flour since 1908. Its Jogoo, Sembe, and Ndovu brands are staples in Kenyan kitchens. Listed on the NSE, Unga Group operates mills in Kenya and Zambia, producing animal feed and flour for millions of East Africans daily.' },

{ id:28, name:'Kenchic',
  logo: SI('kenchic','E87722'),
  fallback: GF('kenchic.com'),
  color:'E87722', initials:'KCH',
  country:'🇰🇪 Kenya', sector:'Food', rating:4.4, reviews:3800,
  story:'Kenchic is Kenya\'s largest integrated poultry company, producing day-old chicks, feeds, and processed chicken products. Founded in 1971, it supplies chicken to supermarkets, hotels, and fast food chains across East Africa and supports thousands of smallholder farmers.' },

{ id:29, name:'Strathmore University',
  logo: SI('strathmore','003580'),
  fallback: GF('strathmore.edu'),
  color:'003580', initials:'STR',
  country:'🇰🇪 Kenya', sector:'Education', rating:4.6, reviews:4800,
  story:'Strathmore University is one of Kenya\'s most respected private universities. Founded in 2002, it consistently ranks among Africa\'s top universities in business, law, and information technology, producing graduates who lead corporations, governments, and NGOs across the continent.' },

{ id:30, name:'Uchumi Supermarket',
  logo: SI('uchumi','E31E24'),
  fallback: GF('uchumi.com'),
  color:'E31E24', initials:'UCH',
  country:'🇰🇪 Kenya', sector:'Retail', rating:4.0, reviews:2800,
  story:'Uchumi Supermarket is one of Kenya\'s oldest retail chains, founded in 1975. At its peak it operated stores across Kenya, Uganda, and Tanzania. Despite financial challenges, Uchumi remains a recognised Kenyan brand with deep roots in the country\'s retail history.' },

{ id:31, name:'Standard Chartered',
  logo: SI('standardchartered','0B5FB3'),
  fallback: GF('sc.com'),
  color:'0B5FB3', initials:'SCB',
  country:'🇰🇪 Kenya', sector:'Banking', rating:4.3, reviews:3400,
  story:'Standard Chartered Kenya has operated since 1911, making it one of the country\'s most established international banks. It serves corporate, commercial, and retail clients with over 30 branches and is known for trade finance, wealth management, and supporting Kenya\'s corporate sector.' },

{ id:32, name:'Safaricom Ethiopia',
  logo: SI('safaricom','00A550'),
  fallback: GF('safaricomethiopia.et'),
  color:'00A550', initials:'SET',
  country:'🇰🇪 Kenya', sector:'Telecom', rating:4.3, reviews:3100,
  story:'Safaricom Ethiopia is Safaricom\'s ambitious regional expansion launched in 2022 as Ethiopia opened its telecoms sector. The first foreign company in Ethiopia\'s mobile market, it brings M-Pesa and digital services to one of Africa\'s largest populations and has already surpassed 10 million customers.' },

];
