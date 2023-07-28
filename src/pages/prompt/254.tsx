import React from "react";
import PromptPage from "../_components/PromptPage";
import { AuthProvider } from "@site/src/pages/_components/AuthContext";

const prompt = {
  "zh": {
    "title": "品牌脑暴助手",
    "prompt": "For this task, we require two main parts:\n\n1. **Case Collection** - Utilize your vast training data and provide a selection of well-known brand names and slogans. The results should be evidence-based and be formatted in a visually appealing manner. The information will be used in the context of the project: [A Brief Background].\n\n2. **Proposal Generation** - Based on the project background, brainstorm and generate a series of proposals for new brand names and slogans. The brand names should be a maximum of 5 characters long, and the slogans should be a maximum of 12 characters long. Ensure that they are easy to recognize and remember, catchy, and not difficult to pronounce. Please provide 5 proposals.",
    "description": "本提示词共分为两段（【】内的参数可根据需要自由修改）：1.收集案例 现在需要你帮助我进行头脑风暴，全程使用【中文】回答我，并且注意回答的格式美观性。请根据【简述背景】这个项目背景，尽可能收集有据可依的知名品牌名称和 slogan 的案例。2.提供方案请你根据我的项目背景进行发散和联想，给出【品牌】和【slogan】，尽量简短易识别，朗朗上口，不拗口，有记忆点，品牌名称不超过【5】个字，slogan 不超过【12】个字，给我提供【5】个方案。",
    "remark": "参考知名品牌的名称和口号，制作自己的品牌方案。来自 @b3ue 的投稿。"
  },
  "en": {
    "title": "Brand brainstorming",
    "prompt": "For this task, we require two main parts:\n\n1. **Case Collection** - Utilize your vast training data and provide a selection of well-known brand names and slogans. The results should be evidence-based and be formatted in a visually appealing manner. The information will be used in the context of the project: [A Brief Background].\n\n2. **Proposal Generation** - Based on the project background, brainstorm and generate a series of proposals for new brand names and slogans. The brand names should be a maximum of 5 characters long, and the slogans should be a maximum of 12 characters long. Ensure that they are easy to recognize and remember, catchy, and not difficult to pronounce. Please provide 5 proposals.",
    "remark": "Create a unique brand strategy by drawing inspiration from renowned brand names and slogans. Contributed by @b3ue."
  },
  "ja": {
    "title": "ブランドブレインストームアシスタント",
    "prompt": "For this task, we require two main parts:\n\n1. **Case Collection** - Utilize your vast training data and provide a selection of well-known brand names and slogans. The results should be evidence-based and be formatted in a visually appealing manner. The information will be used in the context of the project: [A Brief Background].\n\n2. **Proposal Generation** - Based on the project background, brainstorm and generate a series of proposals for new brand names and slogans. The brand names should be a maximum of 5 characters long, and the slogans should be a maximum of 12 characters long. Ensure that they are easy to recognize and remember, catchy, and not difficult to pronounce. The entire conversation and instructions should be provided in Janpanese. Please provide 5 proposals.",
    "description": "このプロンプトは 2 つの段落に分かれています（[ ] 内のパラメータは必要に応じて自由に変更できます）：1.事例を集める 今、私はあなたにブレインストーミングを手伝ってもらい、全体を通して【中国語】で私に答えてもらい、あなたの回答の美的形式に注意を払う必要があります。プロジェクトの背景を踏まえて、有名なブランド名やスローガンの事例をできるだけ多く集めてください。2.5] の選択肢を提示してください。",
    "remark": "有名ブランドの名前やスローガンを参考に、自分だけのブランディングスキームを作ろう。寄稿：@b3ue さん"
  },
  "ko": {
    "title": "브랜드 브레인스토밍 도우미",
    "prompt": "For this task, we require two main parts:\n\n1. **Case Collection** - Utilize your vast training data and provide a selection of well-known brand names and slogans. The results should be evidence-based and be formatted in a visually appealing manner. The information will be used in the context of the project: [A Brief Background].\n\n2. **Proposal Generation** - Based on the project background, brainstorm and generate a series of proposals for new brand names and slogans. The brand names should be a maximum of 5 characters long, and the slogans should be a maximum of 12 characters long. Ensure that they are easy to recognize and remember, catchy, and not difficult to pronounce. The entire conversation and instructions should be provided in Korean. Please provide 5 proposals.",
    "description": "이 프롬프트는 두 단락으로 나뉩니다 (필요에 따라 [ ] 안의 매개변수는 자유롭게 수정 가능). 1. 사례 수집 이제 브레인스토밍을 도와주시고 전체적으로 [중국어] 로 답변해 주셔야 하며, 답변의 미적 형식에 유의해 주세요. 프로젝트의 배경에 따라 잘 알려진 브랜드 이름과 슬로건의 예를 가능한 한 많이 수집하십시오. 5 가지 옵션을 제공해주세요.",
    "remark": "잘 알려진 브랜드의 이름과 슬로건을 참고하여 나만의 브랜딩 체계를 만들어 보세요. b3ue 의 기여."
  },
  "es": {
    "title": "Branded Brainstorm Asistente",
    "prompt": "For this task, we require two main parts:\n\n1. **Case Collection** - Utilize your vast training data and provide a selection of well-known brand names and slogans. The results should be evidence-based and be formatted in a visually appealing manner. The information will be used in the context of the project: [A Brief Background].\n\n2. **Proposal Generation** - Based on the project background, brainstorm and generate a series of proposals for new brand names and slogans. The brand names should be a maximum of 5 characters long, and the slogans should be a maximum of 12 characters long. Ensure that they are easy to recognize and remember, catchy, and not difficult to pronounce. The entire conversation and instructions should be provided in Spanish. Please provide 5 proposals.",
    "description": "Este prompt está dividido en dos apartados (los parámetros en [ ] pueden modificarse libremente según las necesidades): 1. Recopilar casos Ahora necesito que me ayudes a hacer una lluvia de ideas, utiliza [chino] para responderme en todo el proceso, y presta atención al formato de la respuesta. Por favor, recopile casos de nombres de marcas famosas y eslóganes en la medida de lo posible de acuerdo con los antecedentes del proyecto de [breve reseña]. 2. Proporcione programas Por favor, disperse y asocie de acuerdo con los antecedentes de mi proyecto, proporcióneme [marca] y [eslogan], intente que sean lo más breves posible, fáciles de identificar, pegadizos, no trabalenguas, con puntos de memoria, nombre de marca no más de [5] palabras, eslogan no más de [12] palabras, proporcióneme [12] palabras. El nombre de la marca no debe tener más de [5] palabras y el eslogan no debe tener más de [12] palabras, proporcióneme [5] opciones.",
    "remark": "Crea tu propio programa de branding con referencia a los nombres y eslóganes de marcas conocidas. Contribución de @b3ue."
  },
  "fr": {
    "title": "Assistant Brainstorming de marque",
    "prompt": "For this task, we require two main parts:\n\n1. **Case Collection** - Utilize your vast training data and provide a selection of well-known brand names and slogans. The results should be evidence-based and be formatted in a visually appealing manner. The information will be used in the context of the project: [A Brief Background].\n\n2. **Proposal Generation** - Based on the project background, brainstorm and generate a series of proposals for new brand names and slogans. The brand names should be a maximum of 5 characters long, and the slogans should be a maximum of 12 characters long. Ensure that they are easy to recognize and remember, catchy, and not difficult to pronounce. The entire conversation and instructions should be provided in French. Please provide 5 proposals.",
    "description": "Cette question est divisée en deux paragraphes (les paramètres dans [ ] peuvent être librement modifiés en fonction des besoins) : 1. Recueillir des cas J'ai maintenant besoin que vous m'aidiez à faire un brainstorming, utilisez le [chinois] pour me répondre tout au long du processus, et faites attention au format de la réponse. Veuillez rassembler des cas de noms de marques et de slogans célèbres autant que possible en fonction du contexte du projet de [bref contexte]. 2. fournir des programmes Veuillez disperser et associer en fonction du contexte de mon projet, donnez-moi [marque] et [slogan], essayez d'être aussi court que possible, facile à identifier, accrocheur, sans langue de bois, avec des points de mémoire, le nom de la marque ne doit pas dépasser [5] mots, le slogan ne doit pas dépasser [12] mots, fournissez-moi [12] mots. Le nom de la marque ne doit pas dépasser [5] mots et le slogan ne doit pas dépasser [12] mots.",
    "remark": "Créez votre propre programme de branding en vous référant aux noms et slogans de marques connues. Contribution de @b3ue."
  },
  "de": {
    "title": "Branded Brainstorm Assistant",
    "prompt": "For this task, we require two main parts:\n\n1. **Case Collection** - Utilize your vast training data and provide a selection of well-known brand names and slogans. The results should be evidence-based and be formatted in a visually appealing manner. The information will be used in the context of the project: [A Brief Background].\n\n2. **Proposal Generation** - Based on the project background, brainstorm and generate a series of proposals for new brand names and slogans. The brand names should be a maximum of 5 characters long, and the slogans should be a maximum of 12 characters long. Ensure that they are easy to recognize and remember, catchy, and not difficult to pronounce. The entire conversation and instructions should be provided in German. Please provide 5 proposals.",
    "description": "Diese Aufforderung ist in zwei Abschnitte unterteilt (die Parameter in [ ] können je nach Bedarf frei geändert werden): 1. Fälle sammeln Jetzt müssen Sie mir beim Brainstorming helfen, verwenden Sie [Chinesisch], um mir im gesamten Prozess zu antworten, und achten Sie auf das Format der Antwort. Bitte sammeln Sie so viele Fälle von berühmten Markennamen und Slogans wie möglich, entsprechend dem Projekthintergrund von [kurzer Hintergrund]. 2. Programme bereitstellen Bitte verteilen und assoziieren Sie entsprechend meinem Projekthintergrund, geben Sie mir [Marke] und [Slogan], versuchen Sie, so kurz wie möglich zu sein, leicht zu identifizieren, eingängig, nicht zungenbrecherisch, mit Erinnerungspunkten, Markenname nicht mehr als [5] Wörter, Slogan nicht mehr als [12] Wörter, geben Sie mir [12] Wörter. Der Markenname sollte nicht mehr als [5] Wörter und der Slogan nicht mehr als [12] Wörter umfassen, geben Sie mir [5] Optionen an.",
    "remark": "Erstellen Sie Ihr eigenes Branding-Programm mit Bezug auf die Namen und Slogans bekannter Marken. Beitrag von @b3ue."
  },
  "it": {
    "title": "Assistente Brainstorm con marchio",
    "prompt": "For this task, we require two main parts:\n\n1. **Case Collection** - Utilize your vast training data and provide a selection of well-known brand names and slogans. The results should be evidence-based and be formatted in a visually appealing manner. The information will be used in the context of the project: [A Brief Background].\n\n2. **Proposal Generation** - Based on the project background, brainstorm and generate a series of proposals for new brand names and slogans. The brand names should be a maximum of 5 characters long, and the slogans should be a maximum of 12 characters long. Ensure that they are easy to recognize and remember, catchy, and not difficult to pronounce. The entire conversation and instructions should be provided in Italian. Please provide 5 proposals.",
    "description": "Questo prompt è diviso in due paragrafi (i parametri in [ ] possono essere modificati liberamente in base alle esigenze): 1. Raccogliere casi Ora ho bisogno che mi aiutiate a fare brainstorming, usate [cinese] per rispondermi nell'intero processo e fate attenzione al formato della risposta. Raccogliete il più possibile casi di nomi di marche e slogan famosi in base al background del progetto di [breve background]. 2. Fornite i programmi Per favore, disperdetevi e associatevi in base al mio background del progetto, datemi [marca] e [slogan], cercando di essere il più brevi possibile, facili da identificare, accattivanti, non scioglilingua, con punti di memoria, il nome della marca non più di [5] parole, lo slogan non più di [12] parole, fornitemi [12] parole. Il nome del marchio non deve essere più di [5] parole e lo slogan non deve essere più di [12] parole, fornitemi [5] opzioni.",
    "remark": "Create il vostro programma di branding facendo riferimento ai nomi e agli slogan di marchi famosi. Contributo di @b3ue."
  },
  "ru": {
    "title": "Фирменный помощник для мозгового штурма",
    "prompt": "For this task, we require two main parts:\n\n1. **Case Collection** - Utilize your vast training data and provide a selection of well-known brand names and slogans. The results should be evidence-based and be formatted in a visually appealing manner. The information will be used in the context of the project: [A Brief Background].\n\n2. **Proposal Generation** - Based on the project background, brainstorm and generate a series of proposals for new brand names and slogans. The brand names should be a maximum of 5 characters long, and the slogans should be a maximum of 12 characters long. Ensure that they are easy to recognize and remember, catchy, and not difficult to pronounce. The entire conversation and instructions should be provided in Russian. Please provide 5 proposals.",
    "description": "Данный запрос разделен на два пункта (параметры в [ ] могут быть свободно изменены в зависимости от потребностей): 1. Собрать примеры Теперь мне нужно, чтобы вы помогли мне провести мозговой штурм, используйте [китайский язык], чтобы ответить мне в процессе всего процесса, и обратите внимание на формат ответа. Пожалуйста, соберите как можно больше примеров известных названий брендов и слоганов в соответствии с предысторией проекта [краткая предыстория]. 2. Предоставьте программы Пожалуйста, рассредоточьте и объедините в соответствии с предысторией проекта, дайте мне [бренд] и [слоган], старайтесь, чтобы они были как можно короче, легко идентифицировались, запоминались, не вертелись на языке, с точками памяти, название бренда не более [5] слов, слоган не более [12] слов, предоставьте мне [12] слов. Название бренда должно состоять не более чем из [5] слов, слоган - не более чем из [12] слов, предоставьте мне [5] вариантов.",
    "remark": "Создайте собственную программу брендинга, используя названия и слоганы известных брендов. Материал от @b3ue."
  },
  "pt": {
    "title": "Assistente de Brainstorming de Marca",
    "prompt": "For this task, we require two main parts:\n\n1. **Case Collection** - Utilize your vast training data and provide a selection of well-known brand names and slogans. The results should be evidence-based and be formatted in a visually appealing manner. The information will be used in the context of the project: [A Brief Background].\n\n2. **Proposal Generation** - Based on the project background, brainstorm and generate a series of proposals for new brand names and slogans. The brand names should be a maximum of 5 characters long, and the slogans should be a maximum of 12 characters long. Ensure that they are easy to recognize and remember, catchy, and not difficult to pronounce. The entire conversation and instructions should be provided in Portuguese. Please provide 5 proposals.",
    "description": "Esta pergunta está dividida em dois parágrafos (os parâmetros em [ ] podem ser livremente modificados de acordo com as necessidades): 1. Recolher casos Agora preciso que me ajude a fazer um brainstorming, use [chinês] para me responder em todo o processo e preste atenção ao formato da resposta. Por favor, recolha casos de marcas e slogans famosos, tanto quanto possível, de acordo com o contexto do projeto de [breve contexto]. 2. Fornecer programas Por favor, disperse e associe de acordo com o contexto do meu projeto, dê-me [marca] e [slogan], tente ser o mais curto possível, fácil de identificar, cativante, sem trava-línguas, com pontos de memória, nome da marca não mais de [5] palavras, slogan não mais de [12] palavras, forneça-me [12] palavras. O nome da marca não deve ter mais de [5] palavras e o slogan não deve ter mais de [12] palavras, indique-me [5] opções.",
    "remark": "Cria o teu próprio programa de branding com referência aos nomes e slogans de marcas conhecidas. Contribuição de @b3ue."
  },
  "hi": {
    "title": "ब्रांड मंथन सहायक",
    "prompt": "For this task, we require two main parts:\n\n1. **Case Collection** - Utilize your vast training data and provide a selection of well-known brand names and slogans. The results should be evidence-based and be formatted in a visually appealing manner. The information will be used in the context of the project: [A Brief Background].\n\n2. **Proposal Generation** - Based on the project background, brainstorm and generate a series of proposals for new brand names and slogans. The brand names should be a maximum of 5 characters long, and the slogans should be a maximum of 12 characters long. Ensure that they are easy to recognize and remember, catchy, and not difficult to pronounce. The entire conversation and instructions should be provided in Hindi. Please provide 5 proposals.",
    "description": "इस अनुस्मारक को दो खंडों में विभाजित किया गया है ([] में मापदंडों को जरूरतों के अनुसार स्वतंत्र रूप से संशोधित किया जा सकता है): 1. मामलों को एकत्रित करना अब मुझे आपकी मदद की ज़रूरत है, विचार-मंथन करने में, पूरी प्रक्रिया के दौरान मुझे [चीनी] में उत्तर देने में, और सौंदर्यशास्त्र पर ध्यान देने में। उत्तर के प्रारूप का. परियोजना की पृष्ठभूमि [संक्षिप्त विवरण] के अनुसार, कृपया प्रसिद्ध ब्रांड नामों और नारों के यथासंभव साक्ष्य-आधारित मामले एकत्र करें। 2. एक योजना प्रदान करें, कृपया मेरे प्रोजेक्ट पृष्ठभूमि के अनुसार अलग-अलग और संबद्ध करें, [ब्रांड] और [नारा] दें, छोटा और पहचानने में आसान, आकर्षक, अजीब न हो, स्मृति बिंदु रखें, और ब्रांड नाम अधिक न हो [5] शब्द, नारा [12] शब्दों से अधिक नहीं है, और मुझे [5] समाधान प्रदान करें।",
    "remark": "प्रसिद्ध ब्रांडों के नाम और नारों का हवाला देकर अपनी खुद की ब्रांडिंग योजना बनाएं। @b3ue से योगदान."
  },
  "ar": {
    "title": "مساعد العصف الذهني للعلامة التجارية",
    "prompt": "For this task, we require two main parts:\n\n1. **Case Collection** - Utilize your vast training data and provide a selection of well-known brand names and slogans. The results should be evidence-based and be formatted in a visually appealing manner. The information will be used in the context of the project: [A Brief Background].\n\n2. **Proposal Generation** - Based on the project background, brainstorm and generate a series of proposals for new brand names and slogans. The brand names should be a maximum of 5 characters long, and the slogans should be a maximum of 12 characters long. Ensure that they are easy to recognize and remember, catchy, and not difficult to pronounce. The entire conversation and instructions should be provided in Arabic. Please provide 5 proposals.",
    "description": "تنقسم هذه الكلمة السريعة إلى قسمين (يمكن تعديل المعلمات في [] بحرية وفقًا للاحتياجات): 1. تجميع الحالات الآن أحتاج منك مساعدتي في تبادل الأفكار والإجابة بـ [الصينية] طوال العملية ، والاهتمام جماليات تنسيق الإجابة. وفقًا لخلفية المشروع [وصف موجز] ، يرجى جمع أكبر قدر ممكن من الحالات القائمة على الأدلة للأسماء التجارية والشعارات المعروفة. 2. لتقديم خطة ، يرجى التباعد والمشاركة وفقًا لخلفية مشروعي ، وإعطاء [العلامة التجارية] و [الشعار] ، وحاول أن تكون قصيرًا وسهل التحديد ، وجذابًا ، وليس محرجًا ، ولديك نقاط ذاكرة ، والاسم التجاري ليس كذلك يتجاوز [5] كلمات ، لا يتعدى الشعار [12] كلمة ، ويزودني بـ [5] حلول.",
    "remark": "قم بإنشاء مخطط العلامة التجارية الخاص بك من خلال الرجوع إلى أسماء وشعارات العلامات التجارية المعروفة. مساهمة من @ b3ue."
  },
  "bn": {
    "title": "ব্র্যান্ড ব্রেনস্টর্ম সহকারী",
    "prompt": "For this task, we require two main parts:\n\n1. **Case Collection** - Utilize your vast training data and provide a selection of well-known brand names and slogans. The results should be evidence-based and be formatted in a visually appealing manner. The information will be used in the context of the project: [A Brief Background].\n\n2. **Proposal Generation** - Based on the project background, brainstorm and generate a series of proposals for new brand names and slogans. The brand names should be a maximum of 5 characters long, and the slogans should be a maximum of 12 characters long. Ensure that they are easy to recognize and remember, catchy, and not difficult to pronounce. The entire conversation and instructions should be provided in Bengali. Please provide 5 proposals.",
    "description": "এই অনুস্মারকটিকে দুটি বিভাগে বিভক্ত করা হয়েছে (প্রয়োজন অনুসারে []-এ পরামিতিগুলি অবাধে পরিবর্তন করা যেতে পারে): 1. কেস সংগ্রহ করা এখন আমার আপনাকে সাহায্য করতে হবে আমাকে চিন্তাভাবনা করতে, পুরো প্রক্রিয়া জুড়ে [চীনা] ভাষায় উত্তর দিতে এবং নান্দনিকতার দিকে মনোযোগ দিতে হবে উত্তরের বিন্যাসের। প্রকল্পের পটভূমি অনুসারে [সংক্ষিপ্ত বিবরণ], অনুগ্রহ করে সুপরিচিত ব্র্যান্ডের নাম এবং স্লোগানের যতটা সম্ভব প্রমাণ-ভিত্তিক মামলা সংগ্রহ করুন। 2. একটি পরিকল্পনা প্রদান করুন, অনুগ্রহ করে আমার প্রজেক্ট ব্যাকগ্রাউন্ড অনুযায়ী বিচ্ছিন্ন করুন এবং যুক্ত করুন, [ব্র্যান্ড] এবং [স্লোগান] দিন, সংক্ষিপ্ত এবং সহজে সনাক্ত করার চেষ্টা করুন, আকর্ষণীয়, বিশ্রী নয়, মেমরি পয়েন্ট আছে এবং ব্র্যান্ডের নামটি অতিক্রম করবেন না [5] শব্দ, স্লোগানটি [12] শব্দের বেশি হয় না এবং আমাকে [5] সমাধান প্রদান করে।",
    "remark": "সুপরিচিত ব্র্যান্ডের নাম এবং স্লোগান উল্লেখ করে আপনার নিজস্ব ব্র্যান্ডিং স্কিম তৈরি করুন। @b3ue থেকে অবদান।"
  },
  "website": null,
  "tags": [
    "contribute",
    "company"
  ],
  "id": 254,
  "weight": 387
};

function PromptDetail() {
  return <AuthProvider><PromptPage prompt={prompt} /></AuthProvider>;
}

export default PromptDetail;
