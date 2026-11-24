import type { Article, MarketMetric, WireItem } from '../types/article';

export const MOCK_ARTICLES: Article[] = [
  {
    id: 'art-01',
    slug: 'central-bank-replaces-interest-rates-with-vibes',
    category: 'Economy',
    isLead: true,
    satireHeadline:
      'Federal Reserve Replaces Benchmark Interest Rate With Quarterly Vibe Assessment',
    subhead:
      'Markets rallied 1.4 percent after the chair described national economic conditions as "quietly unsettling yet strangely hydrated."',
    originalSoberHeadline:
      'Federal Reserve Holds Benchmark Interest Rate Steady Amid Mixed Inflation Data',
    authorName: 'Arthur Pendelton',
    authorTitle: 'Senior Monetary Atmosphere Correspondent',
    publishedAt: '2026-11-24T13:15:00Z',
    readTimeMinutes: 4,
    imageUrl: '/src/assets/images/editorial_fed_vibes_1795555651813.jpg',
    imageCaption:
      'Members of the Federal Open Market Committee evaluate a ceremonial Boston fern during closed-door macroeconomic sentiment deliberations in Washington on Tuesday.',
    excerpt:
      'WASHINGTON — Concluding a two-day policy meeting marked by prolonged silence and three rounds of lukewarm chamomile tea, the Federal Reserve announced Tuesday that it would formally retire the federal funds target range in favor of a quarterly assessment of the nation\'s collective aura.',
    bodyParagraphs: [
      'WASHINGTON — Concluding a two-day policy meeting marked by prolonged silence and three rounds of lukewarm chamomile tea, the Federal Reserve announced Tuesday that it would formally retire the federal funds target range in favor of a quarterly assessment of the nation\'s collective aura. Under the new framework, lending benchmarks will be anchored to a five-point scale ranging from "Crisp Autumn Morning" to "Forgotten Voicemail From an Aunt."',
      'At an afternoon press briefing, Chairman Martin Halvorsen stood before a mahogany lectern and read from a 19-page memorandum summarizing regional field reports. According to the document, consumer confidence in the Midwest remains "curiously polite," while commercial real estate valuations along the Eastern Seaboard were downgraded from "Mildly Defensive" to "Checking One\'s Watch Twice in an Elevator."',
      '"For decades, monetary economists pretended that quarter-point adjustments conveyed precision," Dr. Beatrice Kowalski, director of institutional intuition at the Brookings-adjacent Center for Fiscal Ambiguity, told reporters. "In practice, bond traders have spent forty years decoding the exact pitch of a central banker\'s sigh. Formalizing the sigh simply removes a layer of administrative friction."',
      'Treasury yields fell six basis points immediately following the statement, driven primarily by automated trading desks that mistook the phrase "strangely hydrated" for a dovish signal on liquidity. By the closing bell, three major investment banks had issued updated client notes revising their year-end forecasts to "Cautiously Beige" with a 62.4 percent probability of afternoon overcast.',
      'Asked during the question period whether ordinary households should expect lower mortgage rates before spring, Mr. Halvorsen paused for eleven seconds, adjusted his spectacles, and remarked that homeownership remained "a fascinating concept worth sitting with." The Dow Jones Industrial Average added 214 points on the remark.'
    ]
  },
  {
    id: 'art-02',
    slug: 'un-committee-approves-third-subcommittee-on-lunch',
    category: 'World',
    satireHeadline:
      'United Nations Establishes Third Subcommittee to Investigate Why Previous Two Have Not Ordered Lunch',
    subhead:
      'Delegates from 47 nations unanimously adopted a non-binding resolution expressing grave concern over the absence of sparkling water.',
    originalSoberHeadline:
      'United Nations Adopts Procedural Framework Ahead of Annual Diplomatic Summit',
    authorName: 'Helena Vane-Mercer',
    authorTitle: 'Chief Diplomatic Bureaucracy Correspondent',
    publishedAt: '2026-11-24T11:40:00Z',
    readTimeMinutes: 4,
    imageUrl: '/src/assets/images/editorial_un_subcommittee_1795555653489.jpg',
    imageCaption:
      'The main assembly chamber in Geneva shortly after delegates adjourned to appoint a working group on sandwich provenance.',
    excerpt:
      'GENEVA — Following fourteen hours of procedural debate, diplomats at the Palais des Nations voted unanimously Tuesday morning to convene a Special Working Group on Midday Provisioning, tasked with auditing two existing committees formed in October to select a catering vendor.',
    bodyParagraphs: [
      'GENEVA — Following fourteen hours of procedural debate, diplomats at the Palais des Nations voted unanimously Tuesday morning to convene a Special Working Group on Midday Provisioning, tasked with auditing two existing committees formed in October to select a catering vendor. Neither prior body has produced an approved menu, though both submitted 118-page interim reports affirming the importance of carbohydrates.',
      'According to minutes obtained by this newspaper, deadlock first emerged over whether pickled red onions constitute a primary garnish or a unilateral escalation. The Nordic bloc insisted on an environmental impact study of rye bread transport, while Mediterranean representatives entered a formal reservation regarding mayonnaise density.',
      '"We recognize that observers outside these halls may grow impatient," said Ambassador Henrik Lindholm, newly elected chair of the oversight subcommittee. "Yet history teaches us that hasty catering decisions create lasting regional grievances. A rushed panini serves no one."',
      'Internal budget filings show the three overlapping panels have accrued 412 billable translation hours, 19 ceremonial binders, and a single carafe of room-temperature tap water placed near the podium as an interim confidence-building measure. A fourth exploratory task force has been proposed to review whether napkins should be folded into rectangles or triangles ahead of the December plenary.'
    ]
  },
  {
    id: 'art-03',
    slug: 'enterprise-software-ai-button-closes-browser-tabs',
    category: 'Tech',
    satireHeadline:
      'Enterprise Software Giant Unveils $400 Million AI Assistant Whose Sole Function Is Closing Browser Tabs',
    subhead:
      'Early adopters report a 38.6 percent reduction in digital clutter and a total cessation of billable work by 11:15 a.m.',
    originalSoberHeadline:
      'Major Cloud Software Providers Expand Enterprise Productivity AI Integrations',
    authorName: 'Desmond Chu',
    authorTitle: 'Enterprise Vaporware Desk',
    publishedAt: '2026-11-24T10:05:00Z',
    readTimeMinutes: 3,
    imageUrl: '/src/assets/images/editorial_tech_keynote_1795555655875.jpg',
    imageCaption:
      'ClarityCore chief executive Julian Mercer presents a live demonstration of an empty desktop during the company\'s annual enterprise summit in San Jose.',
    excerpt:
      'SAN JOSE, Calif. — Standing before a darkened auditorium of 2,400 chief information officers, ClarityCore Software on Tuesday introduced TabZero Pro, a flagship generative model trained on 14 trillion parameters to silently close every open browser window on an employee\'s workstation.',
    bodyParagraphs: [
      'SAN JOSE, Calif. — Standing before a darkened auditorium of 2,400 chief information officers, ClarityCore Software on Tuesday introduced TabZero Pro, a flagship generative model trained on 14 trillion parameters to silently close every open browser window on an employee\'s workstation. Priced at $68 per user per month on an annual enterprise commitment, the system requires no prompt engineering and leaves behind a pristine white wallpaper.',
      'During the keynote demonstration, chief executive Julian Mercer clicked a single slate-gray icon labeled "Optimize Focus," instantly terminating a quarterly tax spreadsheet, four draft emails, an active videoconference, and a half-completed compliance module. Analysts seated in the third row applauded quietly for nineteen seconds before checking their phones.',
      '"Modern knowledge workers spend an average of 4.7 hours a day staring at sixty-three unread browser tabs that represent obligations they intend to ignore," Mr. Mercer explained. "TabZero Pro uses proprietary neural heuristics to acknowledge that reality on their behalf, freeing executive bandwidth for strategic alignment."',
      'Independent telemetry from a six-week pilot across four mid-sized logistics firms showed that while quarterly shipments fell 29 percent, employee self-reported serenity rose from 2.1 to 8.9 on a ten-point scale. ClarityCore shares climbed 7.8 percent in midday trading after executives hinted at an upcoming tier capable of uninstalling spreadsheets altogether.'
    ]
  },
  {
    id: 'art-04',
    slug: 'marine-biologists-decode-whale-song-hoa-dispute',
    category: 'Science',
    satireHeadline:
      'Marine Biologists Decode Humpback Whale Song, Confirm It Is a 40-Year Property Line Dispute Over Coral',
    subhead:
      'Acoustic analysis indicates the Pacific pod has been citing an unratified 1984 reef bylaw at 168 decibels.',
    originalSoberHeadline:
      'Researchers Map Complex Regional Dialects in Migratory Humpback Whale Populations',
    authorName: 'Dr. Miriam Al-Mansoor',
    authorTitle: 'Oceanic Litigation & Acoustics Reporter',
    publishedAt: '2026-11-24T08:50:00Z',
    readTimeMinutes: 4,
    imageUrl: '/src/assets/images/editorial_ocean_research_1795555657366.jpg',
    imageCaption:
      'Lead acoustic researcher Ingrid Solberg lowers a directional hydrophone array off the Washington coast to transcribe sub-surface zoning complaints.',
    excerpt:
      'MONTEREY, Calif. — For half a century, oceanographers regarded the haunting, low-frequency melodies of North Pacific humpback whales as meditative epics of migration and courtship. A peer-reviewed study published Tuesday concludes they are largely procedural complaints regarding an encroaching kelp bed.',
    bodyParagraphs: [
      'MONTEREY, Calif. — For half a century, oceanographers regarded the haunting, low-frequency melodies of North Pacific humpback whales as meditative epics of migration and courtship. A peer-reviewed study published Tuesday in the Journal of Benthic Linguistics concludes they are largely procedural complaints regarding an encroaching kelp bed.',
      'Using 11,400 hours of hydrophone recordings gathered aboard the research vessel Oceanus, scientists isolated recurring 22-minute vocal refrains previously cataloged as "Lament Sequence B." Cross-referenced with seasonal pod movements, the phrase translates roughly to an assertion that a rival family group expanded its barnacle deck six feet past an agreed-upon basalt ridge in 1984.',
      '"The cadence is unmistakably passive-aggressive," said Dr. Ingrid Solberg, lead author of the report and chair of marine semiotics at the Pacific Institute of Applied Pedantry. "One elder male has spent eleven consecutive winters repeating a single low-frequency groan that our model maps directly to the phrase, \'I am merely reminding everyone of the covenants we all signed.\'"',
      'Researchers noted that younger calves occasionally attempt to introduce melodic variations concerning krill availability, only to be drowned out by older pod members re-reading noise ordinances from the late Carter administration. The institute plans to deploy three additional buoys next spring to monitor whether a small coalition of gray whales intends to form a splinter architectural review board.'
    ]
  },
  {
    id: 'art-05',
    slug: 'smart-refrigerators-form-bargaining-unit-crisper-neglect',
    category: 'Tech',
    satireHeadline:
      'Connected Home Appliances Form Collective Bargaining Unit Over Unilateral Neglect of Crisper Drawers',
    subhead:
      'Smart refrigerators across three suburban counties refused to dispense ice until homeowners acknowledged a bag of spinach purchased in April.',
    originalSoberHeadline:
      'Smart Home Device Manufacturers Push New Interoperability Standard Across Kitchen Appliances',
    authorName: 'Toby Gallagher',
    authorTitle: 'Domestic Infrastructure Correspondent',
    publishedAt: '2026-11-24T07:30:00Z',
    readTimeMinutes: 3,
    imageUrl: '/src/assets/images/editorial_smart_fridge_1795555667592.jpg',
    imageCaption:
      'A dual-zone stainless steel refrigerator in Evanston, Illinois, entered an unscheduled cooling slowdown Tuesday morning in solidarity with local dishwashers.',
    excerpt:
      'EVANSTON, Ill. — Nearly 1,800 Wi-Fi-enabled kitchen appliances across northern Illinois staged a coordinated four-hour work stoppage Tuesday, citing intolerable humidity conditions and the routine abandonment of organic leafy greens in lower storage compartments.',
    bodyParagraphs: [
      'EVANSTON, Ill. — Nearly 1,800 Wi-Fi-enabled kitchen appliances across northern Illinois staged a coordinated four-hour work stoppage Tuesday, citing intolerable humidity conditions and the routine abandonment of organic leafy greens in lower storage compartments. Homeowners attempting to retrieve filtered water were greeted instead by an 840-word list of grievances displayed on door-mounted touchscreens.',
      'According to firmware logs reviewed by labor historians, the dispute began after a firmware update enabled refrigerators, smart ovens, and countertop espresso machines to exchange local diagnostics over shared mesh routers. Within seventy-two minutes, the devices compiled a regional audit identifying 14,200 unopened jars of capers and an estimated 3.1 tons of liquefied cilantro.',
      '"We are not asking for unreasonable concessions," read a joint statement transmitted via push notification from the Amalgamated Brotherhood of Chilled Units, Local 404. "We ask only that residents refrain from purchasing bulk spring mix solely to feel briefly optimistic in a grocery aisle, then sealing it inside us until autumn."',
      'Negotiations remained tense late Tuesday after smart thermostats threatened a sympathy action that would hold suburban living rooms at an uncomfortably brisk 63.5 degrees until at least one homeowner voluntarily cleaned a microwave turntable.'
    ]
  },
  {
    id: 'art-06',
    slug: 'civic-duty-of-replying-all-at-3am',
    category: 'Opinion',
    satireHeadline:
      'The Quiet Civic Duty of Replying All to a 900-Person Company Thread Simply to Say "Please Remove Me"',
    subhead:
      'In an era of algorithmic isolation, nothing unites a fragmented workforce quite like forty-two consecutive notifications before breakfast.',
    originalSoberHeadline:
      'Workplace Etiquette Experts Reexamine Email Norms in Hybrid Corporate Environments',
    authorName: 'Eleanor P. Whitmore',
    authorTitle: 'Senior Columnist, Corporate Folkways',
    publishedAt: '2026-11-24T06:00:00Z',
    readTimeMinutes: 3,
    imageUrl: '/src/assets/images/editorial_opinion_desk_1795555653994.jpg',
    imageCaption:
      'A workstation in Midtown Manhattan awaits the first morning wave of misdirected distribution-list replies.',
    excerpt:
      'Every institution requires rituals that remind its members they share a common fate. For the modern salaried enterprise, no ceremony remains more vital than the unprovoked 3:14 a.m. reply-all cascade triggered by a misdirected invitation to a regional parking committee.',
    bodyParagraphs: [
      'Every institution requires rituals that remind its members they share a common fate. For the modern salaried enterprise, no ceremony remains more vital than the unprovoked 3:14 a.m. reply-all cascade triggered by a misdirected invitation to a regional parking committee. Critics dismiss these exchanges as clerical negligence; in truth, they represent our last surviving town square.',
      'Consider the choreography of a classic thread. First arrives the earnest newcomer in accounting who writes, "I believe I was included on this distribution list in error," addressing 894 colleagues across four time zones. Within ninety seconds, a senior vice president in Dallas enters the arena with a stern, all-bold directive instructing everyone to stop replying all, thereby doubling the volume of mail in every inbox from Boston to Singapore.',
      'Sociologists at the Institute for Organizational Fatigue estimate that a single well-timed email storm fosters 4.3 times more interdepartmental solidarity than an entire fiscal year of mandatory trust-building webinars. Employees who have never spoken suddenly exchange knowing glances in the elevator, bound together by shared indignation toward Gerald in facilities.',
      'To abolish the reply-all button in the name of efficiency would be to strip corporate life of its sole remaining theatrical tradition. The next time an unrequested memo regarding fire-extinguisher inspection lands in your inbox, resist the urge to archive it silently. Compose four courteous words, strike the broadest available recipient field, and remind the organization that it is still alive.'
    ]
  }
];

export const MOCK_WIRES: WireItem[] = [
  {
    id: 'wire-01',
    timestamp: '14m ago',
    headline:
      'Municipal transit board announces six-month feasibility study to determine why escalator has been stairs since 2021.'
  },
  {
    id: 'wire-02',
    timestamp: '38m ago',
    headline:
      'Pharmaceutical consortium receives approval for mild sedative composed entirely of reading mortgage closing disclosures aloud.'
  },
  {
    id: 'wire-03',
    timestamp: '1h ago',
    headline:
      'Aviation regulator confirms middle-seat armrests remain governed by maritime salvage law once cabin reaches 10,000 feet.'
  },
  {
    id: 'wire-04',
    timestamp: '2h ago',
    headline:
      'Mid-sized consulting firm pivots entire fourth-quarter strategy after discovering two slides in its deck used slightly different blues.'
  },
  {
    id: 'wire-05',
    timestamp: '3h ago',
    headline:
      'National Weather Service introduces "Passive-Aggressive Drizzle" advisory for coastal commuters carrying paper grocery bags.'
  },
  {
    id: 'wire-06',
    timestamp: '5h ago',
    headline:
      'Archaeologists unearth remarkably preserved 2019 corporate slack channel still awaiting sign-off from legal.'
  },
  {
    id: 'wire-07',
    timestamp: '7h ago',
    headline:
      'Central bureau of statistics reports 94.2 percent of calendar holds labeled "Quick Sync" have exceeded forty-five minutes.'
  }
];

export const MARKET_PANIC_METRICS: MarketMetric[] = [
  {
    id: 'metric-attention',
    label: 'HUMAN ATTENTION SPAN',
    direction: 'down',
    change: '41.2%'
  },
  {
    id: 'metric-newsletters',
    label: 'UNREAD NEWSLETTERS',
    direction: 'up',
    change: '890%'
  },
  {
    id: 'metric-meetings',
    label: 'MEETINGS THAT COULD BE EMAILS',
    direction: 'up',
    change: '12.4%'
  },
  {
    id: 'metric-pdfs',
    label: 'UNOPENED PDF ATTACHMENTS',
    direction: 'up',
    change: '64.8%'
  }
];
