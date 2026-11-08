/* All site text lives here. Edit English (en) and Arabic (ar) side by side.
   Each list keeps the same order in both languages. */
var LINKS={
  email:'deema.alnasser22@gmail.com',
  linkedin:'https://www.linkedin.com/in/deema-alnasser-328921215/',
  github:'https://github.com/its-deema',
  blog:'https://deemaalnasser.com/ar/'
};

/* Photos app. To add a picture: drop the file in assets/gallery/ and add a line,
   e.g. {project:'taskmanager',src:'assets/gallery/my-shot.png',en:'Caption',ar:'وصف'}.
   project must match a key in GALLERY_PROJECTS. */
var GALLERY_PROJECTS={
  nafas:{en:'Nafas',ar:'نَفَس'},
  toothtruth:{en:'Tooth Truth',ar:'Tooth Truth'},
  kerdle:{en:'Kerdle',ar:'Kerdle'}
};
var GALLERY=[
  {project:'nafas',src:'assets/img/nafas-chat.webp',web:'https://github.com/user-attachments/assets/f948859a-c447-47eb-9154-1c51401f05e5',en:'Chat interface',ar:'واجهة المحادثة'},
  {project:'nafas',src:'assets/img/nafas-journal.webp',web:'https://github.com/user-attachments/assets/2e20736e-ced1-43ae-902a-93d534e0211e',en:'Journaling',ar:'التدوين'},
  {project:'nafas',src:'assets/img/nafas-analytics.webp',web:'https://github.com/user-attachments/assets/c99ec08a-b6a6-4e8f-914c-b78368643dd4',en:'Analytics dashboard',ar:'لوحة التحليلات'},
  {project:'toothtruth',src:'assets/img/toothtruth-tree.webp',web:'https://github.com/user-attachments/assets/fb4e57c3-06bb-4e8a-984f-5e19f99f610c',en:'Dental diseases tree',ar:'شجرة أمراض الأسنان'},
  {project:'kerdle',src:'assets/img/kerdle-home.webp',web:'https://github.com/its-deema/Kerdle-Game/assets/119051799/8459e845-1c88-47d7-800c-74388803820f',en:'Home page',ar:'الصفحة الرئيسية'},
  {project:'kerdle',src:'assets/img/kerdle-game.webp',web:'https://github.com/its-deema/Kerdle-Game/assets/119051799/b4560b23-7f09-4e0c-9feb-1bc4fee94722',en:'Game page',ar:'صفحة اللعب'}
];

var CONTENT={
 en:{
  name:'Deema Alnasser', initials:'DA', title:'Software Engineer',
  h1:'<span class="w">Welcome to</span><br><span class="w"><em>Deema\'s</em></span> <span class="w">desktop</span>',
  intro:"I'm Deema, a software engineer who builds reliable backend systems and AI-powered products, from the API to the last pixel.",
  about:[
    "AI product engineer at Ntg Clarity, where I build Codeduc, an AI-powered platform that automates codebase understanding and documentation.",
    "Before that, at Masdr, I built and maintained Java and Spring Boot services for enterprise systems, including the Mudad Payroll Management System.",
    "I hold a B.S. in Information Technology from Qassim University, build AI side projects for fun, and bring a product management and UI/UX background to everything I ship."
  ],
  facts:[['Now','Ntg Clarity'],['Focus','Software engineering'],['Languages','Arabic · English']],
  now:[{k:'Building',v:'An AI project in Arabic, powered by RAG.'},
       {k:'Learning',v:'How AI finds the right information and uses it.'},
       {k:'Also learning',v:'.NET, building web APIs with C# and ASP.NET Core.'}],
  trash:[{f:'works_on_my_machine.sh',n:'Replaced with Docker'},{f:'docs_coming_soon.md',n:'Codeduc wrote them'},{f:'final_v2_REAL_final.fig',n:'There was a v3'}],
  experience:[
    {role:'AI Product Engineer',org:'Ntg Clarity',date:'May 2026 – Present',
     points:['Developed Codeduc, an AI-powered code analysis platform built with Python, FastAPI, Celery, PostgreSQL, Docker and Ollama to automate codebase understanding and documentation.',
             'Integrated and evaluated Qwen LLMs for multi-language code analysis, error detection and automated documentation, with asynchronous processing and real-time task tracking.']},
    {role:'Software Engineer Intern',org:'Masdr',date:'Jul 2025 – Jan 2026',
     points:['Built and maintained Java / Spring Boot REST APIs for enterprise systems, including the Mudad Payroll Management System.',
             'Managed APIs on Apigee with end-to-end request tracing across frontend, gateway and backend.',
             'Refactored legacy backend code without breaking dependencies, improving response times.',
             'Monitored and validated deployments through Jenkins CI/CD, backed by unit and regression tests.',
             'Integrated services with Angular using resolvers and caching to cut redundant API calls.',
             'Diagnosed a critical L1 production issue end to end and delivered the hotfix with senior engineers.']},
    {role:'Product Manager Trainee',org:'Masar Program · SANI, supported by Misk',date:'Nov 2024',
     points:['Product management track covering RICE, PRDs and user stories, with case studies on Jahez and Haraj.']},
    {role:'Cybersecurity Trainee',org:'National Cybersecurity Authority & SITE',date:'Jul 2024',
     points:['Three-week camp on network security, vulnerability detection and ethical hacking, with hands-on CTF challenges.']}
  ],
  education:{degree:'B.S. Information Technology',school:'Qassim University',date:'2020 – 2025'},
  projects:[
    {name:'Nafas',kind:'AI mood journaling app',date:'Dec 2025',color:'lav',
     desc:'Tracks emotional patterns through chat, with LLaMA 3.2 running locally and MongoDB for storage.',tags:['LLaMA 3.2','MongoDB','Local AI']},
    {name:'Tooth Truth',kind:'Dental disease classification · graduation project',date:'Apr 2025',color:'sky',url:'https://github.com/its-deema/ToothTruth-Dental-Disease-Classification',
     desc:'Compared 5 ML models on 10,580 panoramic X-rays across 93 classes. Worked with dental specialists to fix label inconsistencies by restructuring them into a parent–child hierarchy, and led all technical work.',tags:['Python','Machine learning','Medical imaging']},
    {name:'Task Manager API',kind:'REST API · learning .NET',date:'In progress',color:'sky',url:'https://github.com/its-deema/TaskManager',
     desc:'A task management API built to learn .NET the way real projects use it: controllers, services and DTOs, request validation, async down to the database, and EF Core migrations.',tags:['ASP.NET Core','C#','EF Core','SQLite']},
    {name:'Khabeer',kind:'AI accounting assistant · SOCPA Hackathon',date:'Oct 2024',color:'sage',
     desc:'Bilingual (English / Arabic) assistant that guides foreign investors in Saudi Arabia, built on the OpenAI API and answering only from SOCPA sources.',tags:['OpenAI API','Python','Bilingual']},
    {name:'Giftly',kind:'Gift recommendation app · UI/UX',date:'Dec 2024',color:'peach',
     desc:'Designed the UI/UX and an interactive Figma prototype that recommends gifts by age, interests, occasion and budget, and helped shape the business model.',tags:['Figma','UX research','Prototyping']},
    {name:'Kerdle',kind:'Word-guessing game',date:'Aug 2023',color:'lav',url:'https://github.com/its-deema/Kerdle-Game',
     desc:'Players throw paper balls at a keyboard to guess the hidden word. I programmed the drag-and-drop mechanics, color feedback and per-level word checking.',tags:['Construct 3','Game logic']}
  ],
  skills:[
    {name:'Languages',dot:'eng',items:['Java','Python','TypeScript','C#','HTML']},
    {name:'Frameworks',dot:'eng',items:['Spring Boot','FastAPI','.NET','Angular']},
    {name:'AI',dot:'design',items:['Qwen','LLaMA','Ollama','OpenAI API']},
    {name:'API & DevOps',dot:'design',items:['Apigee','Swagger','Jenkins CI/CD','Docker','Celery']},
    {name:'Data',dot:'people',items:['PostgreSQL','MongoDB']},
    {name:'Tools',dot:'people',items:['Git','Postman','DBeaver','Splunk','Figma']}
  ],
  certs:[
    {name:'Linear Algebra for Machine Learning and Data Science',org:'DeepLearning.AI',date:'Oct 2023'},
    {name:'Data Collection and Processing with Python',org:'University of Michigan',date:'Oct 2023'},
    {name:'NCA Cybersecurity Bootcamp',org:'National Cybersecurity Authority & SITE',date:'Jul 2024'},
    {name:'Product Management',org:'Masar by SANI',date:'2024'}
  ],
  writing:[
    {title:"Who said it's just a beginner programming course?",date:'Sep 5, 2023',url:'https://deemaalnasser.com/ar/'},
    {title:'Sidequest AI bootcamp experience',date:'May 23, 2023',url:'https://deemaalnasser.com/ar/2023/05/30/%d9%85%d8%b9%d8%b3%d9%83%d8%b1-sidequest-ai/'},
    {title:'Why I LOVE using Replit!',date:'May 10, 2023',url:'https://deemaalnasser.com/ar/2023/05/10/replit-website/'}
  ]
 },

 ar:{
  name:'ديما الناصر', initials:'د', title:'مهندسة برمجيات',
  h1:'<span class="w">أهلاً بك في</span><br><span class="w">سطح مكتب</span> <span class="w"><em>ديــما</em></span>',
  intro:'أنا ديما، مهندسة برمجيات أبني أنظمة خلفية موثوقة ومنتجات تعمل بالذكاء الاصطناعي.',
  about:[
    'مهندسة منتجات ذكاء اصطناعي في Ntg Clarity، أبني فيها Codeduc، منصة تحليل كود بالذكاء الاصطناعي تؤتمت فهم المشاريع البرمجية وتوثيقها.',
    'وقبلها في مصدر، بنيت وطوّرت خدمات بلغة Java وإطار Spring Boot لأنظمة مؤسسية، منها نظام مُدد لإدارة الرواتب.',
    'حاصلة على بكالوريوس تقنية المعلومات من جامعة القصيم، أبني مشاريع جانبية بالذكاء الاصطناعي، وأستفيد من خلفيتي في إدارة المنتجات وتصميم تجربة المستخدم في كل ما أطلقه.'
  ],
  facts:[['حالياً','Ntg Clarity'],['التركيز','هندسة البرمجيات'],['اللغات','العربية · الإنجليزية']],
  now:[{k:'أبني',v:'مشروع ذكاء اصطناعي بالعربي، يشتغل بتقنية ⁦RAG⁩'},
       {k:'أتعلّم',v:'كيف يوصل الذكاء الاصطناعي للمعلومة الصح ويستخدمها.'},
       {k:'وأتعلّم بعد',v:'تطوير واجهات برمجية بمنصة ⁦.NET⁩ ولغة ⁦C#⁩ وإطار ⁦ASP.NET Core⁩.'}],
  trash:[{f:'works_on_my_machine.sh',n:'استُبدل بـ Docker'},{f:'docs_coming_soon.md',n:'كتبها ⁦Codeduc⁩'},{f:'final_v2_REAL_final.fig',n:'كان فيه نسخة ثالثة'}],
  experience:[
    {role:'مهندسة منتجات ذكاء اصطناعي',org:'Ntg Clarity',date:'مايو 2026 – الآن',
     points:['تطوير Codeduc، منصة تحليل كود بالذكاء الاصطناعي مبنية بـ Python و FastAPI و Celery و PostgreSQL و Docker و Ollama لأتمتة فهم المشاريع البرمجية وتوثيقها.',
             'دمج نماذج Qwen وتقييمها لتحليل الكود بعدة لغات واكتشاف الأخطاء والتوثيق الآلي، مع معالجة غير متزامنة وتتبّع لحظي للمهام.']},
    {role:'مهندسة برمجيات متدربة',org:'مصدر',date:'يوليو 2025 – يناير 2026',
     points:['بناء وتطوير واجهات REST بلغة Java وإطار Spring Boot لأنظمة مؤسسية، منها نظام مُدد لإدارة الرواتب.',
             'إدارة الواجهات عبر Apigee مع تتبّع كامل للطلبات بين الواجهة الأمامية والبوابة والخلفية.',
             'إعادة هيكلة كود قديم مع الحفاظ على الاعتماديات، ما حسّن الأداء وزمن الاستجابة.',
             'متابعة عمليات النشر والتحقق منها عبر Jenkins CI/CD، مع اختبارات وحدة واختبارات انحدار.',
             'ربط الخدمات بواجهات Angular باستخدام resolvers والتخزين المؤقت لتقليل الطلبات المكررة.',
             'تشخيص مشكلة إنتاج حرجة من المستوى L1 وإطلاق الإصلاح العاجل بالتعاون مع مهندسين أقدم.']},
    {role:'متدربة إدارة منتجات',org:'برنامج مسار · صانع بدعم من مسك',date:'نوفمبر 2024',
     points:['مسار إدارة المنتجات: إطار RICE، ووثائق PRD، وقصص المستخدم، مع دراسات حالة على جاهز وحراج.']},
    {role:'متدربة أمن سيبراني',org:'الهيئة الوطنية للأمن السيبراني و SITE',date:'يوليو 2024',
     points:['معسكر لثلاثة أسابيع في أمن الشبكات واكتشاف الثغرات والاختراق الأخلاقي، مع تحديات CTF عملية.']}
  ],
  education:{degree:'بكالوريوس تقنية المعلومات',school:'جامعة القصيم',date:'2020 – 2025'},
  projects:[
    {name:'نَفَس',kind:'تطبيق يوميات المزاج بالذكاء الاصطناعي',date:'ديسمبر 2025',color:'lav',
     desc:'يتتبّع أنماط المشاعر عبر المحادثة، باستخدام LLaMA 3.2 محلياً وقاعدة MongoDB للتخزين.',tags:['LLaMA 3.2','MongoDB','ذكاء اصطناعي محلي']},
    {name:'Tooth Truth',kind:'تصنيف أمراض الأسنان · مشروع التخرج',date:'أبريل 2025',color:'sky',url:'https://github.com/its-deema/ToothTruth-Dental-Disease-Classification',
     desc:'مقارنة 5 نماذج تعلم آلة على 10,580 صورة أشعة بانورامية ضمن 93 فئة. عالجنا عدم اتساق التصنيفات مع أطباء الأسنان بإعادة هيكلتها في تسلسل هرمي، وقدتُ كل الجوانب التقنية.',tags:['Python','تعلم الآلة','الصور الطبية']},
    {name:'Task Manager API',kind:'واجهة REST · تعلّم ⁦.NET⁩',date:'قيد التطوير',color:'sky',url:'https://github.com/its-deema/TaskManager',
     desc:'واجهة برمجية لإدارة المهام بنيتها لأتعلّم ⁦.NET⁩ بالطريقة المستخدمة في المشاريع الحقيقية: طبقات Controllers وServices وDTOs، والتحقق من الطلبات، وعمليات غير متزامنة حتى قاعدة البيانات، وترحيلات EF Core.',tags:['ASP.NET Core','C#','EF Core','SQLite']},
    {name:'خبير',kind:'مساعد محاسبي ذكي · هاكاثون سوكبا',date:'أكتوبر 2024',color:'sage',
     desc:'مساعد ثنائي اللغة يرشد المستثمرين الأجانب في السعودية، مبني على OpenAI API ويجيب من مصادر سوكبا فقط.',tags:['OpenAI API','Python','ثنائي اللغة']},
    {name:'Giftly',kind:'تطبيق اقتراح الهدايا · UI/UX',date:'ديسمبر 2024',color:'peach',
     desc:'تصميم تجربة وواجهة المستخدم ونموذج تفاعلي على Figma يقترح الهدايا حسب العمر والاهتمامات والمناسبة والميزانية، والمساهمة في نموذج العمل.',tags:['Figma','بحث المستخدم','نماذج أولية']},
    {name:'Kerdle',kind:'لعبة تخمين الكلمات',date:'أغسطس 2023',color:'lav',url:'https://github.com/its-deema/Kerdle-Game',
     desc:'يرمي اللاعب كرات ورقية على لوحة المفاتيح لتخمين الكلمة المخفية. برمجتُ آلية السحب والإفلات وتغيّر الألوان والتحقق من الكلمات لكل مستوى.',tags:['Construct 3','منطق الألعاب']}
  ],
  skills:[
    {name:'لغات البرمجة',dot:'eng',items:['Java','Python','TypeScript','C#','HTML']},
    {name:'أطر العمل',dot:'eng',items:['Spring Boot','FastAPI','.NET','Angular']},
    {name:'الذكاء الاصطناعي',dot:'design',items:['Qwen','LLaMA','Ollama','OpenAI API']},
    {name:'الواجهات و DevOps',dot:'design',items:['Apigee','Swagger','Jenkins CI/CD','Docker','Celery']},
    {name:'البيانات',dot:'people',items:['PostgreSQL','MongoDB']},
    {name:'الأدوات',dot:'people',items:['Git','Postman','DBeaver','Splunk','Figma']}
  ],
  certs:[
    {name:'الجبر الخطي لتعلم الآلة وعلم البيانات',org:'DeepLearning.AI',date:'أكتوبر 2023'},
    {name:'جمع البيانات ومعالجتها باستخدام Python',org:'جامعة ميشيغان',date:'أكتوبر 2023'},
    {name:'معسكر الأمن السيبراني',org:'الهيئة الوطنية للأمن السيبراني و SITE',date:'يوليو 2024'},
    {name:'إدارة المنتجات',org:'مسار من صانع',date:'2024'}
  ],
  writing:[
    {title:'مين قال دورة برمجية للمبتدئين؟',date:'5 سبتمبر 2023',url:'https://deemaalnasser.com/ar/'},
    {title:'تجربتي في معسكر Sidequest AI',date:'23 مايو 2023',url:'https://deemaalnasser.com/ar/2023/05/30/%d9%85%d8%b9%d8%b3%d9%83%d8%b1-sidequest-ai/'},
    {title:'ليش أحب استخدام Replit!',date:'10 مايو 2023',url:'https://deemaalnasser.com/ar/2023/05/10/replit-website/'}
  ]
 }
};

var UI={
 en:{about:'About',experience:'Experience',projects:'Projects',skills:'Terminal',writing:'Writing',contact:'Contact',resume:'Certificates',resumeFile:'Certificates',
  skillsWin:'Terminal — zsh',terminal:'Terminal',noteTitle:'Currently',photos:'Photos',all:'All',noPhotos:'Photos are on their way.',library:'Library',allPhotos:'All Photos',photosWord:'photos',spaceHint:'Click or press Space to preview',trash:'Trash',emptyTrash:'Empty Trash',trashEmpty:'Trash is empty',trashCount:' items',
  tHello:'Welcome! Type help to see what you can do here.',tHelp:{help:'show this list',whoami:'who is Deema',now:'what I am up to',skills:'my tech stack',ls:'list apps',open:'open an app, e.g. open projects',lang:'switch to Arabic',theme:'light or dark',clear:'clear the screen'},
  tOpening:'Opening',tNotFound:'command not found',tTry:'Try help.',tSudo:'Permission granted. Opening contact so you can say hi.',
education:'Education',certs:'Certifications',highlight:'Highlight',
  openResume:'Open résumé (PDF)',open2:'Open to software engineering roles, collaborations, and interesting problems.',
  copy:'Copy email',copied:'Copied',locale:'en-US',langBtn:'ع'},
 ar:{about:'نبذة',experience:'الخبرات',projects:'المشاريع',skills:'الطرفية',writing:'الكتابات',contact:'تواصل',resume:'الشهادات',resumeFile:'الشهادات',
  skillsWin:'الطرفية — zsh',terminal:'الطرفية',noteTitle:'حالياً',photos:'الصور',all:'الكل',noPhotos:'الصور في الطريق.',library:'المكتبة',allPhotos:'كل الصور',photosWord:'صور',spaceHint:'اضغط أو استخدم المسافة للمعاينة',trash:'سلة المهملات',emptyTrash:'إفراغ السلة',trashEmpty:'السلة فارغة',trashCount:' عناصر',
  tHello:'أهلاً! اكتب help لتشوف وش تقدر تسوي هنا.',tHelp:{help:'عرض هذه القائمة',whoami:'من هي ديما',now:'وش أشتغل عليه حالياً',skills:'التقنيات التي أستخدمها',ls:'عرض التطبيقات',open:'فتح تطبيق، مثل open projects',lang:'التبديل إلى الإنجليزية',theme:'فاتح أو داكن',clear:'مسح الشاشة'},
  tOpening:'جارٍ فتح',tNotFound:'الأمر غير موجود',tTry:'جرّب help.',tSudo:'تم منح الصلاحية. نفتح لك صفحة التواصل عشان تسلّم.',
education:'التعليم',certs:'الشهادات',highlight:'إنجاز',
  openResume:'فتح السيرة الذاتية (PDF)',open2:'متاحة لفرص العمل والتعاون في هندسة البرمجيات.',
  copy:'نسخ البريد',copied:'تم النسخ',locale:'ar-u-ca-gregory-nu-latn',langBtn:'EN'}
};
