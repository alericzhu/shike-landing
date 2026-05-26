const dict = {
      zh: {
        'nav.product':'产品说明','nav.workflow':'工作流程','nav.structure':'问卷结构','nav.result':'示例结果','nav.about':'产品说明','nav.notes':'工作流程','nav.contact':'联系','nav.example':'示例','nav.cta':'体验问卷',
        'visual.kicker':'Visual references','visual.title':'让客户先看见感觉，再描述需求。','visual.text':'很多空间偏好很难靠文字说清。用图片、场景和生活问题一起收集，能更早看出客户真正关心的东西。','visual.l1':'设计工作台','visual.l2':'参考图板','visual.l3':'摘要报告','home.eyebrow':'室内设计需求调研系统','home.title':'把客户模糊的表达，整理成设计师能判断的信息。','home.lead':'Shike 是一个用于室内设计前期沟通的轻量工具，帮助设计师在项目开始前看清生活习惯、空间偏好、审美参考与沟通重点。','home.demo':'查看示例','home.workflow':'了解使用方式 →','home.cardTitle':'Design Survey 设计问卷','home.status':'示例流程','home.q1':'你的家庭通常如何度过周末在家的时间？','home.a1':'做饭、陪孩子、整理收纳，偶尔有朋友来家里吃饭。','home.q2':'哪些图片更接近你理想中的居住氛围？','home.q3':'工作日是否经常在家做饭？','home.insightKicker':'整理结果','home.insightText':'偏好温暖克制；重点关注厨房动线、公共区收纳和“不要太冷”的视觉边界。',
        'notes.kicker':'Product notes','notes.title':'它解决的是前期沟通里的信息混乱。','notes.desc':'Shike 不试图替代设计师判断，而是把客户分散在聊天、图片和口头表达里的信号，提前整理成更容易讨论的材料。','notes.item1Title':'图片参考比风格名称更有效','notes.item1Text':'很多客户并不能准确描述自己的审美，但通常能快速判断“像不像自己想要的感觉”。','notes.item2Title':'居住习惯比风格更重要','notes.item2Text':'做饭频率、收纳方式、作息习惯与家庭关系，往往比风格本身更影响空间布局。','notes.item3Title':'提交后生成需求摘要','notes.item3Text':'客户填写完成后，系统会整理生活习惯、审美偏好、空间重点与沟通注意事项，方便设计师快速进入项目判断。',
        'signal.kicker':'From answer to judgment','signal.title':'Shike 重点不是多问几题，而是把回答翻译成设计判断。','signal.desc':'客户常说的是感受，设计师需要判断的是空间策略。这个工具把两者之间的那一步提前整理出来。','signal.s1Title':'客户表达','signal.s1Text':'“想要温馨一点，但不要太乱，也不想看起来像样板间。”','signal.s2Title':'系统整理','signal.s2Text':'偏好温暖克制的氛围，重视收纳、材质触感和公共区的放松感。','signal.s3Title':'设计沟通','signal.s3Text':'下一次沟通优先确认生活动线、常用物品数量和对“温暖”的视觉边界。',
        'questionnaire.kicker':'Survey structure','questionnaire.title':'两套问卷，对应不同深度的设计沟通。','questionnaire.desc':'真实项目里，客户不一定一开始就愿意填写很长的表。Shike 更适合用轻量版先建立判断，再在项目启动前进入完整版。','questionnaire.lightMeta':'Light / 约 15 题','questionnaire.lightTitle':'快速摸底','questionnaire.lightText':'收集户型、面积、预算、家庭成员、风格倾向和主要痛点，适合初次沟通或微信转发。','questionnaire.fullMeta':'Full / 约 62 题','questionnaire.fullTitle':'完整需求调研','questionnaire.fullText':'覆盖家庭结构、客餐厅、厨房、卫生间、卧室、服务预期等模块，适合方案启动前。','questionnaire.resultMeta':'Result / 设计师视角','questionnaire.resultTitle':'摘要整理','questionnaire.resultText':'把客户回答整理为需求摘要、画像标签、空间偏好和沟通建议，而不是只留下原始答案。',
        'aboutHome.kicker':'Boundary','aboutHome.title':'适合小范围、可信任地使用。','aboutHome.p1':'Shike 是一个用于室内设计前期沟通的需求整理工具。它不是替代设计师判断，而是帮助把客户的生活习惯、空间偏好、审美参考和项目预期提前整理出来。','aboutHome.p2':'很多项目前期信息会散落在微信聊天、语音、图片和临时笔记里。Shike 试图让这些信息在开始设计前变得更清晰、更容易回看。','aboutHome.a1':'适合初次沟通、签约前调研、方案启动前的信息整理。','aboutHome.a2':'公开页面只展示示例，不连接真实项目数据。',
        'workflow.title':'一个更安静的设计沟通流程。','workflow.desc':'先把需求整理清楚，再进入设计判断。','workflow.s1Title':'发送问卷','workflow.s1Text':'在正式沟通前，通过轻量链接收集基础信息与空间习惯。','workflow.s2Title':'整理偏好','workflow.s2Text':'通过图片与问题收集客户的审美倾向与生活方式。','workflow.s3Title':'生成摘要','workflow.s3Text':'提交后生成一份设计师视角的需求摘要，帮助回看重点信息。','workflow.s4Title':'开始设计','workflow.s4Text':'减少重复沟通，让前期方向从一开始就更接近真实需求。',
        'quote.text':'大部分客户其实并不知道自己真正喜欢什么。好的需求调研系统，能在设计开始前，把生活习惯与空间偏好提前显现出来。','quote.meta':'来自真实室内设计前期沟通场景。',
        'cta.kicker':'Example','cta.title':'先看一个完整结果，再体验问卷流程。','cta.text':'公开页面只展示示例数据。真实项目是否接入后台、如何处理客户信息，可以在后续产品阶段再决定。','cta.result':'查看示例结果','cta.demo':'体验示例问卷 →',
        'demo.kicker':'Demo','demo.title':'示例问卷','demo.lead':'这是一个只用于展示体验的轻量问卷，不连接真实项目，也不会写入真实后台。','demo.asideTitle':'住宅设计需求问卷示例','demo.asideText':'这不是完整 62 题版本，而是用于展示产品感的轻量流程。重点在于收集生活方式、空间优先级和审美判断。','demo.note1':'约 5 分钟','demo.note2':'包含图片偏好','demo.note3':'提交后生成摘要','demo.module1':'项目基础','demo.module2':'居住习惯','demo.module3':'审美偏好','demo.module4':'重点问题','demo.f1':'项目阶段','demo.f1o1':'初步了解','demo.f1o2':'准备启动设计','demo.f1o3':'已有平面方案','demo.f2':'家庭成员和居住状态','demo.f2p':'例如：两位成年人、一位小朋友，偶尔有老人短住。','demo.f3':'平时最常在家发生的活动？','demo.f3p':'例如：做饭、看书、陪孩子、朋友聚餐、在家办公……','demo.f4':'你希望家带来的感受是什么？','demo.f4o1':'安静放松','demo.f4o2':'明亮开阔','demo.f4o3':'温暖有包裹感','demo.f4o4':'整洁高效','demo.f5':'哪些空间最需要优先改善？','demo.f5o1':'客厅与公共区','demo.f5o2':'厨房与餐厅','demo.f5o3':'主卧与衣物收纳','demo.f5o4':'儿童房 / 书房','demo.f6':'哪些图片更接近你理想中的居住氛围？','demo.f6o1':'安静自然','demo.f6o2':'温暖包裹','demo.f6o3':'明亮开阔','demo.f6o4':'克制整洁','demo.f7':'你明确不喜欢什么？','demo.f7p':'例如：太冷、太复杂、过度装饰、开放柜太多……','demo.f8':'厨房和收纳的使用习惯','demo.f8p':'例如：工作日常做饭；小电器较多；希望台面尽量清爽。','demo.f9':'目前最想解决的问题？','demo.f9p':'例如：收纳不够、采光不好、动线不顺、房间利用率低……','demo.submit':'提交示例','demo.success':'示例提交成功。真实数据没有被保存。','demo.summaryTitle':'示例需求摘要','demo.summaryText':'客户偏向安静、温暖、克制整洁的居住氛围；厨房、收纳和公共区体验是优先关注点；审美判断更依赖图片氛围而非风格名称。下一次沟通建议先确认家庭成员日常活动频率、厨房使用强度和“不喜欢”的视觉边界。','demo.viewResult':'查看完整结果 →',
        'result.kicker':'Demo result','result.title':'需求摘要','result.lead':'以下为示例问卷生成的整理结果，用于展示产品形态，不连接真实项目数据。','result.asideTitle':'住宅项目 A','result.asideText':'客户回答已被整理为设计师可快速浏览的摘要、标签、空间优先级和沟通提示。','result.metaStage':'阶段：准备启动设计','result.metaType':'类型：三居住宅','result.metaSource':'来源：轻量示例问卷','result.summaryKicker':'Summary','result.summaryTitle':'需求摘要','result.status':'已整理','result.summaryText':'客户希望家呈现安静、温暖、克制整洁的状态。家庭日常包含做饭、陪伴孩子和偶尔在家办公，因此公共区、厨房餐厅和主卧收纳需要优先判断。客户明确排斥过冷、过度装饰和过多外露杂物，审美判断更依赖图片氛围而不是固定风格名称。','result.profileKicker':'Profile','result.profileTitle':'客户画像标签','result.tag1':'偏好安静感','result.tag2':'重视收纳效率','result.tag3':'高频下厨','result.tag4':'家庭活动密集','result.tag5':'视觉判断型','result.preferenceKicker':'Space preference','result.preferenceTitle':'空间偏好','result.pref1Label':'客厅','result.pref1Text':'低干扰、适合陪伴孩子、阅读和短时会客','result.pref2Label':'厨房','result.pref2Text':'重视操作台面、小电器收纳和清洁便利','result.pref3Label':'卧室','result.pref3Text':'柔和材质、遮光、减少外露杂物','result.pref4Label':'整体氛围','result.pref4Text':'温暖克制，避免过冷和过度装饰','result.adviceKicker':'Communication','result.adviceTitle':'沟通建议','result.advice1':'先用图片确认“温暖但不厚重”的边界，避免直接进入风格标签争论。','result.advice2':'重点追问厨房使用频率、采购方式、常用小电器数量和台面清爽程度。','result.advice3':'在平面方案阶段优先解释公共区收纳逻辑、厨房动线和主卧衣物收纳取舍。',
        'aboutPage.kicker':'About','aboutPage.title':'关于 Shike','aboutPage.lead':'Shike 是一组围绕设计沟通、需求整理和项目记录的小工具。','aboutPage.h1':'使用方式','aboutPage.p1':'设计师在项目开始前发送问卷链接，客户在手机上填写生活习惯、空间偏好、审美参考与项目预期。设计师再根据这些记录进行前期判断。','aboutPage.h2':'它适合谁','aboutPage.p2':'适合独立设计师、小型设计工作室，以及希望把前期沟通流程标准化的团队。','aboutPage.h3':'它不是什么','aboutPage.p3':'它不是替代设计师判断的系统，也不是公开客户信息的平台。它只是帮助把早期沟通信息整理得更清楚，并在需要时辅助生成设计师视角的需求摘要。',
        'privacy.kicker':'Privacy','privacy.title':'隐私说明','privacy.p1':'通过 Shike 收集的信息，仅用于需求整理、项目沟通和设计前期判断。','privacy.l1':'不公开展示客户提交内容。','privacy.l2':'不出售客户数据。','privacy.l3':'不建议提交身份证、银行卡、密码等敏感信息。','privacy.l4':'如需删除或更正信息，可以通过 contact@shike.app 联系。',
        'terms.kicker':'Terms','terms.title':'使用条款','terms.p1':'Shike 按现状提供，用于辅助设计前期沟通与需求整理。','terms.l1':'使用者应自行确认提交内容的准确性。','terms.l2':'请勿提交身份证、银行卡、密码等敏感信息。','terms.l3':'示例页面仅用于展示，不代表真实项目数据。','terms.l4':'如有问题，请联系 contact@shike.app。',
        'footer.tagline':'用于设计沟通的独立工具。','footer.about':'关于','footer.privacy':'隐私','footer.terms':'条款'
      },
      en: {
        'nav.product':'Product','nav.workflow':'Workflow','nav.structure':'Survey structure','nav.result':'Example result','nav.about':'Product','nav.notes':'Workflow','nav.contact':'Contact','nav.example':'Example','nav.cta':'Try survey',
        'visual.kicker':'Visual references','visual.title':'Let clients see the feeling before describing the requirement.','visual.text':'Many spatial preferences are hard to explain with words alone. Images, scenes and lifestyle questions reveal what clients truly care about earlier.','visual.l1':'design worktable','visual.l2':'reference board','visual.l3':'summary report','home.eyebrow':'Interior design intake system','home.title':'Turn vague client language into information designers can judge.','home.lead':'Shike is a lightweight tool for early interior design conversations. It helps designers clarify lifestyle habits, spatial preferences, visual references and communication priorities before a project starts.','home.demo':'View example','home.workflow':'About the workflow →','home.cardTitle':'Design Survey','home.status':'example flow','home.q1':'How does your family usually spend weekends at home?','home.a1':'Cooking, childcare and tidying storage, with occasional friends over for dinner.','home.q2':'Which references feel closest to your ideal atmosphere?','home.q3':'Do you cook frequently during weekdays?','home.insightKicker':'Organized result','home.insightText':'Prefers warm restraint; key signals are kitchen circulation, shared-area storage and the visual boundary of “not too cold”.',
        'notes.kicker':'Product notes','notes.title':'It reduces information clutter before design starts.','notes.desc':'Shike does not replace design judgment. It turns scattered chat messages, image references and verbal preferences into material that is easier to discuss.','notes.item1Title':'Images work better than style labels','notes.item1Text':'Many clients cannot describe their taste precisely, but they can quickly judge whether an image feels right.','notes.item2Title':'Habits matter more than style','notes.item2Text':'Cooking frequency, storage habits, routines and family relationships often shape the layout more than visual style.','notes.item3Title':'Requirement summary after submission','notes.item3Text':'After a client submits, the system organizes lifestyle habits, visual preferences, spatial priorities and communication notes so designers can enter the project faster.',
        'signal.kicker':'From answer to judgment','signal.title':'Shike is not about asking more questions. It translates answers into design judgment.','signal.desc':'Clients often describe feelings. Designers need spatial strategy. Shike organizes the step between those two things.','signal.s1Title':'Client language','signal.s1Text':'“I want it to feel warmer, but not messy, and not like a showroom.”','signal.s2Title':'Organized signal','signal.s2Text':'Prefers a warm but restrained atmosphere, with attention to storage, material touch and relaxed shared areas.','signal.s3Title':'Design conversation','signal.s3Text':'Next, clarify daily circulation, the amount of everyday items and the visual boundary of “warmth”.',
        'questionnaire.kicker':'Survey structure','questionnaire.title':'Two survey depths for different design conversations.','questionnaire.desc':'In real projects, clients may not want to fill in a long form at the first touchpoint. Shike works better as a light intake first, then a fuller survey before design starts.','questionnaire.lightMeta':'Light / about 15 questions','questionnaire.lightTitle':'Quick intake','questionnaire.lightText':'Collects home type, area, budget, household members, style direction and pain points for first conversations or mobile sharing.','questionnaire.fullMeta':'Full / about 62 questions','questionnaire.fullTitle':'Full requirement survey','questionnaire.fullText':'Covers household structure, living-dining, kitchen, bathroom, bedroom and service expectations before project kickoff.','questionnaire.resultMeta':'Result / designer view','questionnaire.resultTitle':'Summary organization','questionnaire.resultText':'Turns answers into a summary, client tags, spatial preferences and communication notes instead of leaving only raw responses.',
        'aboutHome.kicker':'Boundary','aboutHome.title':'Built for small, trusted usage.','aboutHome.p1':'Shike is an intake tool for early interior design conversations. It does not replace a designer’s judgment; it helps collect lifestyle habits, spatial preferences, visual references and project expectations before design starts.','aboutHome.p2':'Early project information often gets scattered across chats, voice messages, images and notes. Shike helps make those signals clearer and easier to review.','aboutHome.a1':'Useful for first conversations, pre-contract research and project kickoff preparation.','aboutHome.a2':'The public site only shows examples and does not connect to real project data.',
        'workflow.title':'A calmer way to start projects.','workflow.desc':'Organize requirements first, then move into design decisions.','workflow.s1Title':'Send survey','workflow.s1Text':'Share a lightweight link before the first meeting to collect basic information and spatial habits.','workflow.s2Title':'Collect preferences','workflow.s2Text':'Use images and questions to collect visual preferences and lifestyle patterns.','workflow.s3Title':'Generate summary','workflow.s3Text':'After submission, generate a designer-facing requirement summary to review key signals.','workflow.s4Title':'Start aligned','workflow.s4Text':'Reduce repeated communication and begin with clearer expectations.',
        'quote.text':'Most clients don’t actually know how to describe their style preferences. Good intake systems help surface habits and emotional patterns before design even starts.','quote.meta':'Based on real early-stage interior design conversations.',
        'cta.kicker':'Example','cta.title':'Review a full result, then try the survey flow.','cta.text':'The public site only contains example data. Backend connection and client information handling can be decided in the next product phase.','cta.result':'View example result','cta.demo':'Try example survey →',
        'demo.kicker':'Demo','demo.title':'Example survey','demo.lead':'This lightweight survey is only for demonstration. It does not connect to real projects or write to a production backend.','demo.asideTitle':'Residential design intake example','demo.asideText':'This is not the full 62-question version. It shows the product shape: lifestyle, spatial priorities and visual judgment.','demo.note1':'About 5 minutes','demo.note2':'Includes image preference','demo.note3':'Generates a summary','demo.module1':'Project basics','demo.module2':'Living habits','demo.module3':'Visual preference','demo.module4':'Key issues','demo.f1':'Project stage','demo.f1o1':'Initial conversation','demo.f1o2':'Ready to start design','demo.f1o3':'Already has a layout plan','demo.f2':'Household members and living status','demo.f2p':'For example: two adults, one child, grandparents occasionally stay over.','demo.f3':'What activities happen most often at home?','demo.f3p':'For example: cooking, reading, childcare, hosting friends, working from home…','demo.f4':'What feeling do you want your home to bring?','demo.f4o1':'Calm and relaxing','demo.f4o2':'Bright and open','demo.f4o3':'Warm and enveloping','demo.f4o4':'Clean and efficient','demo.f5':'Which spaces need priority improvement?','demo.f5o1':'Living and shared area','demo.f5o2':'Kitchen and dining','demo.f5o3':'Main bedroom and wardrobe','demo.f5o4':'Kids room / study','demo.f6':'Which images feel closest to your ideal atmosphere?','demo.f6o1':'Calm and natural','demo.f6o2':'Warm and enveloping','demo.f6o3':'Bright and open','demo.f6o4':'Restrained and tidy','demo.f7':'What do you clearly dislike?','demo.f7p':'For example: too cold, too complex, excessive decoration, too many open shelves…','demo.f8':'Kitchen and storage habits','demo.f8p':'For example: frequent weekday cooking; many small appliances; prefer clear countertops.','demo.f9':'What problem do you most want to solve?','demo.f9p':'For example: not enough storage, poor lighting, awkward circulation, low room efficiency…','demo.submit':'Submit example','demo.success':'Example submitted. No real data was saved.','demo.summaryTitle':'Sample requirement summary','demo.summaryText':'The client prefers a calm, warm, restrained and tidy atmosphere; kitchen, storage and shared-area experience are priority signals; visual judgment relies more on images than style labels. Next, confirm household activity frequency, kitchen intensity and the visual boundary of dislikes.','demo.viewResult':'View full result →',
        'result.kicker':'Demo result','result.title':'Requirement summary','result.lead':'This is an example result generated from the demo survey. It shows the product shape without connecting to real project data.','result.asideTitle':'Residential project A','result.asideText':'Client answers have been organized into a designer-friendly summary, tags, spatial priorities and communication notes.','result.metaStage':'Stage: ready to start design','result.metaType':'Type: three-bedroom home','result.metaSource':'Source: lightweight example survey','result.summaryKicker':'Summary','result.summaryTitle':'Requirement summary','result.status':'organized','result.summaryText':'The client wants the home to feel calm, warm, restrained and tidy. Daily life includes cooking, childcare and occasional work from home, so shared areas, kitchen-dining and bedroom storage need early judgment. The client dislikes coldness, excessive decoration and exposed clutter, and judges references by atmosphere more than fixed style labels.','result.profileKicker':'Profile','result.profileTitle':'Client profile tags','result.tag1':'Calm-oriented','result.tag2':'Storage-focused','result.tag3':'Frequent cooking','result.tag4':'Active family routine','result.tag5':'Visual decision maker','result.preferenceKicker':'Space preference','result.preferenceTitle':'Space preference','result.pref1Label':'Living room','result.pref1Text':'Low-interruption, suited for childcare, reading and light hosting','result.pref2Label':'Kitchen','result.pref2Text':'Values worktop space, small-appliance storage and easy cleaning','result.pref3Label':'Bedroom','result.pref3Text':'Soft materials, good shading and fewer exposed items','result.pref4Label':'Overall mood','result.pref4Text':'Warm and restrained, avoiding coldness and excess decoration','result.adviceKicker':'Communication','result.adviceTitle':'Communication advice','result.advice1':'Use images first to define “warm but not heavy” before discussing style labels.','result.advice2':'Ask about cooking frequency, grocery habits, small appliances and countertop expectations.','result.advice3':'During layout review, explain shared-area storage, kitchen circulation and wardrobe tradeoffs early.',
        'aboutPage.kicker':'About','aboutPage.title':'About Shike','aboutPage.lead':'Shike is a set of small tools for design conversations, requirement intake and project records.','aboutPage.h1':'How it works','aboutPage.p1':'Before a project starts, designers send a survey link. Clients fill in lifestyle habits, spatial preferences, visual references and project expectations on mobile. Designers then review those records before making early decisions.','aboutPage.h2':'Who it is for','aboutPage.p2':'Independent designers, small studios and teams that want a clearer early communication workflow.','aboutPage.h3':'What it is not','aboutPage.p3':'It does not replace design judgment and it is not a public client-data platform. It simply helps organize early project signals and can optionally assist in generating designer-facing requirement summaries.',
        'privacy.kicker':'Privacy','privacy.title':'Privacy notice','privacy.p1':'Information collected through Shike is used only for requirement organization, project communication and early design review.','privacy.l1':'Client submissions are not publicly displayed.','privacy.l2':'Client data is not sold.','privacy.l3':'Please do not submit sensitive information such as ID numbers, bank cards or passwords.','privacy.l4':'To delete or correct information, contact contact@shike.app.',
        'terms.kicker':'Terms','terms.title':'Terms of use','terms.p1':'Shike is provided as-is to support early design communication and requirement organization.','terms.l1':'Users should verify the accuracy of submitted information.','terms.l2':'Do not submit sensitive information such as ID numbers, bank cards or passwords.','terms.l3':'Demo pages are for display only and do not represent real project data.','terms.l4':'For questions, contact contact@shike.app.',
        'footer.tagline':'Independent tools for design conversations.','footer.about':'About','footer.privacy':'Privacy','footer.terms':'Terms'
      }
    };

    const VALID_PATHS = ['/', '/demo', '/demo-result', '/about', '/privacy', '/terms'];
    let currentLang = safeStorageGet('shike-lang') || 'zh';

    function safeStorageGet(key){
      try { return window.localStorage ? localStorage.getItem(key) : null; }
      catch (_) { return null; }
    }

    function safeStorageSet(key, value){
      try { if(window.localStorage) localStorage.setItem(key, value); }
      catch (_) {}
    }

    function consumeRedirectPath(){
      try {
        if(!window.sessionStorage) return null;
        const value = sessionStorage.getItem('shike-redirect-path');
        sessionStorage.removeItem('shike-redirect-path');
        return value;
      } catch (_) {
        return null;
      }
    }

    function canUseHistory(){
      return Boolean(
        window.history &&
        typeof window.history.pushState === 'function' &&
        window.location &&
        window.location.protocol !== 'about:' &&
        document.location &&
        document.location.href !== 'about:blank'
      );
    }

    function safePushState(url){
      if(!canUseHistory()) return false;
      try {
        history.pushState({}, '', url);
        return true;
      } catch (error) {
        console.warn('Navigation state was not updated because this environment blocks history.pushState.', error);
        return false;
      }
    }

    function safeReplaceState(url){
      if(!canUseHistory()) return false;
      try {
        history.replaceState({}, '', url);
        return true;
      } catch (error) {
        return false;
      }
    }

    function safeScrollToTop(){
      try { window.scrollTo({top:0, behavior:'smooth'}); }
      catch (_) { try { window.scrollTo(0, 0); } catch (__) {} }
    }

    function applyLang(lang){
      currentLang = dict[lang] ? lang : 'zh';
      safeStorageSet('shike-lang', currentLang);
      document.body.dataset.lang = currentLang;
      document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
      document.title = currentLang === 'zh' ? 'Shike 识客 — 室内设计需求调研工具' : 'Shike — Interior Design Intake Tool';
      document.querySelectorAll('[data-i18n]').forEach(el=>{
        const key = el.getAttribute('data-i18n');
        if(dict[currentLang][key]) el.textContent = dict[currentLang][key];
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
        const key = el.getAttribute('data-i18n-placeholder');
        if(dict[currentLang][key]) el.setAttribute('placeholder', dict[currentLang][key]);
      });
    }

    function normalizePath(path){
      if(!path || path === '/index.html') return '/';
      return VALID_PATHS.includes(path) ? path : '/';
    }

    function getPageId(path){
      const clean = normalizePath(path);
      return clean === '/' ? 'page-home' : `page-${clean.slice(1)}`;
    }

    function showPage(path, options={}){
      const { push = true, scrollTop = true } = options;
      const clean = normalizePath(path);
      document.querySelectorAll('.page').forEach(page=>page.classList.remove('active'));
      const page = document.getElementById(getPageId(clean));
      if(page) page.classList.add('active');
      if(push) safePushState(clean);
      if(scrollTop) safeScrollToTop();
      applyLang(currentLang);
    }

    function scrollToAnchor(id, push=true){
      showPage('/', { push:false, scrollTop:false });
      if(push) safePushState('/#' + id);
      requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView({behavior:'smooth', block:'start'}));
    }

    function initEvents(){
      document.addEventListener('click', event=>{
        const route = event.target.closest('[data-route]');
        if(route){
          event.preventDefault();
          showPage(route.getAttribute('data-route'));
          return;
        }
        const anchor = event.target.closest('[data-anchor]');
        if(anchor){
          event.preventDefault();
          scrollToAnchor(anchor.getAttribute('data-anchor'));
        }
      });

      document.getElementById('langToggle')?.addEventListener('click',()=>applyLang(currentLang === 'zh' ? 'en' : 'zh'));

      document.getElementById('demoForm')?.addEventListener('submit', event=>{
        event.preventDefault();
        document.getElementById('demoSuccess')?.classList.add('show');
        const summary = document.getElementById('summaryCard');
        if(summary) summary.style.display = 'block';
      });

      window.addEventListener('popstate',()=>showPage(location.pathname, { push:false }));
    }

    function initApp(){
      initEvents();
      applyLang(currentLang);
      const redirectPath = consumeRedirectPath();
      if(redirectPath) safeReplaceState(redirectPath);
      showPage(normalizePath(location.pathname), { push:false, scrollTop:false });
      if(location.hash){
        const id = location.hash.replace('#','');
        setTimeout(()=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'}), 60);
      }
    }

    if(document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initApp);
    } else {
      initApp();
    }

