// Inicializar EmailJS
(function () {
  emailjs.init("FjXr34lY4EcBWYXNn");
})();

function milissegundosParaAnos(milissegundos) {
  const milissegundosPorAno = 1000 * 60 * 60 * 24 * 365.25; // Aproximação do ano (incluindo anos bissextos)
  const anos = milissegundos / milissegundosPorAno;
  return anos;
}

const dateExperience = milissegundosParaAnos(
  new Date().getTime() - new Date("2022-01-01").getTime()
).toFixed(0);

// JSON com traduções
const translations = {
  en: {
    intro: `<i class="fas fa-handshake-angle"></i> Hello, I'm Arthur Medeiros`,
    about: `Web/Mobile Developer with over ${dateExperience} years of experience in software projects, mainly focused on Front-end technologies such as Angular, Flutter, and React. I hold a Bachelor’s degree in Information Systems from the Federal University of Rio Grande do Norte (UFRN). I am 27 years old and currently based in Caicó/RN, Brazil. In addition to front-end expertise, I have solid knowledge in agile methodologies, project and people management, as well as experience with back-end development. Currently, I am focused on further specializing in system development while also exploring the field of Artificial Intelligence (AI) to create innovative and intelligent solutions.`,
    "who-am-i-title": `<i class="fas fa-person-chalkboard"></i>Who am i`,
    "skills-title": `<i class="fas fa-tools"></i>Skills`,
    "experience-title": `<i class="fas fa-briefcase"></i> Experience`,
    "projects-title": `<i class="fas fa-rocket"></i>Projects`,
    "contact-title": `<i class="fas fa-contact-book"></i>Contact`,
    "contact-name": "Name",
    "contact-email": "Email",
    "contact-message": "Message",
    "contact-send": `Send <i class="fa fa-paper-plane"></i>`,
    copyright: "© 2025 Arthur Medeiros. All rights reserved.",
    "experience-developer":
      "Experience in developing Web/Mobile solutions, building intuitive applications and robust web platforms. Strong focus on clean code practices with the application of clean architecture and the Scrum methodology.",
    "experience-developer-title": "Full Stack Developer (2019 - Current)",
    "experience-graduation":
      "Graduated in Information Systems, much of the knowledge I possess comes from my academic journey, such as organization, methodologies, and passion for technology. I have been involved in extension projects, tutoring, and published an article in the 2023 edition of the Brazilian Conference - Springer, where I conducted case studies focused on data analysis, applying machine learning through the Python programming language.",
    "experience-graduation-title":
      "Bachelor’s Degree in Information Systems (2017-2024)",
    "experience-freelancer-title": "Full Stack Developer (2019 - Current)",
    "experience-freelancer":
      "I am a Full Stack Developer with nearly 5 years of experience in building web and mobile systems, working from conception to final product delivery. I have participated in projects across different sectors such as Textile, Healthcare, Events, and Fashion, always focusing on delivering scalable, secure solutions with an excellent user experience. My goal is to transform ideas into robust and functional systems, consistently delivering with quality and on time.",
    "detail-project": `See details <i class="fas fa-eye"></i>`,
    "link-project": `See project <i class="fab fa-github"></i>`,
    "no-version": `No version available to view images`,
    "select-version": `Select a version to view images`,
    "version-web": `Web Version <i class="fas fa-desktop"></i>`,
    "version-mobile": `Mobile Version <i class="fas fa-mobile-android"></i>`,
    // projects
    "project-behero-title": "Be-Hero",
    "project-behero-description":
      "Application developed for Web and Mobile during OmniStack Week 11 by RocketSeat with instructor Diego Fernandes. The system connects people willing to help with cases registered by NGOs, such as animal shelters, homeless support, and more. The Web version allows NGOs to register and manage their cases, while the Mobile app displays them so benefactors can reach out and become true heroes.",
    "project-behero-short":
      "A system that connects NGOs and their cases with people willing to help.",

    "project-ecoleta-title": "E-Coleta",
    "project-ecoleta-description":
      "Application developed for Web and Mobile during Next Level Week by RocketSeat with instructor Diego Fernandes. The system maps waste collection points in establishments, NGOs, or similar organizations, creating a bridge between collection points and people willing to contribute. The Web version allows collection points to be registered, while the Mobile app displays them so users can schedule and inform which items will be collected.",
    "project-ecoleta-short":
      "A system that maps waste collection points in different locations.",

    "project-proffy-title": "Proffy",
    "project-proffy-description":
      "Proffy is an online learning platform that connects teachers and students. The system allows teachers to register their classes and enables students to find and connect with educators, promoting learning in a simple and accessible way.",
    "project-proffy-short":
      "An online platform that connects teachers and students.",

    "project-eventmanager-title": "Event Manager",
    "project-eventmanager-description":
      "Event Manager is a system designed to manage different types of events, such as parties, shows, ceremonies, and celebrations. It allows companies or promoters to register their events, sell and manage tickets, send notifications based on location or participation history, and generate detailed reports for organizers.",
    "project-eventmanager-short":
      "A Web/Mobile system for event management and ticketing.",

    "project-expensivetracker-title": "Expensive Tracker",
    "project-expensivetracker-description":
      "Expensive Tracker is a personal finance management app that helps users track their finances in a simple and efficient way. It allows recording income and expenses, categorizing transactions, setting monthly budgets, viewing financial performance charts, receiving payment reminders, and syncing data across multiple devices.",
    "project-expensivetracker-short": "A personal finance management app.",

    "project-receipts-title": "Guide Receipts",
    "project-receipts-description":
      "Guide Receipts is an app that allows users to store and organize their favorite recipes easily and efficiently. It enables saving recipes, categorizing them, creating step-by-step instructions, and marking favorites for quick access.",
    "project-receipts-short": "An app to store and organize personal recipes.",

    "project-vitex-title": "ViTex",
    "project-vitex-description":
      "ViTex is a system that manages the entire textile production process and sales. It lets users register orders, track production from start to finish, and organize shipments. The system also supports multiple users, helping teams work together more efficiently. With simple inventory management for both production and warehouse, it improves material tracking and overall organization.",
    "project-vitex-short":
      "Web/Mobile system to manage textile production, sales, and shipments.",

    "project-vpass-title": "VPass",
    "project-vpass-description":
      "VPass is an access control system designed to make visitor management in corporate spaces safer, faster, and easier. It ensures security while simplifying entry processes.",
    "project-vpass-short":
      "Web/Mobile system for managing visitor access in corporate, industrial, and institutional spaces.",

    "project-woundcaresys-title": "WoundCareSys",
    "project-woundcaresys-description":
      "WoundCareSys is a digital solution that combines wound care monitoring with smart management tools. It helps clinics, healthcare professionals, and patients track healing progress, manage appointments, and collect clinical data, while also handling finances, inventory, and sales. It connects personalized care with efficient management.",
    "project-woundcaresys-short":
      "Web/Mobile system for wound care monitoring with smart management tools.",
  },
  pt: {
    intro: `<i class="fas fa-handshake-angle"></i> Olá, eu sou Arthur Medeiros`,
    about: `Desenvolvedor Web/Mobile com mais de ${dateExperience} anos de experiência em projetos de software, atuando principalmente no Front-end com tecnologias como Angular, Flutter e React. Sou bacharel em Sistemas de Informação pela Universidade Federal do Rio Grande do Norte (UFRN). Tenho 27 anos e resido em Caicó/RN. Além da experiência em front-end, possuo conhecimentos sólidos em metodologias ágeis, gestão de projetos e pessoas, além de prática com back-end. Atualmente, busco me especializar cada vez mais no desenvolvimento de sistemas e estou ingressando na área de Inteligência Artificial (IA), expandindo minha atuação para soluções inovadoras e inteligentes.`,
    "who-am-i-title": `<i class="fas fa-person-chalkboard"></i> Quem sou eu`,
    "skills-title": `<i class="fas fa-tools"></i>Habilidades`,
    "experience-title": `<i class="fas fa-briefcase"></i> Experiência`,
    "projects-title": `<i class="fas fa-rocket"></i>Projetos`,
    "contact-title": `<i class="fas fa-contact-book"></i>Contato`,
    "contact-name": "Nome",
    "contact-email": "Email",
    "contact-message": "Mensagem",
    "contact-send": `Enviar <i class="fa fa-paper-plane"></i>`,
    copyright: "© 2025 Arthur Medeiros. Todos os direitos reservados.",
    "experience-developer":
      "Atuação em desenvolvimento de soluções Web/Mobile, construindo aplicativos intuitivos e aplicações web robustas. Boas práticas de código com aplicação de clean architecture e metodologia scrum.",
    "experience-developer-title": "Full Stack Developer (2019 - Atual)",
    "experience-graduation":
      "Formado em sistemas de informação, todo o conhecimento que detenho vem boa parte da minha vivência acadêmica, como: organização, metodologias e paixão por tecnologia. Atuei em projetos de extensão, monitoria e publiquei um artigo na edição de 2023 do Brazilian Conference - Springer no qual apliquei estudos de caso com foco em análise de dados, utilizando aprendizado de máquina, por meio da linguagem de programação Python.",
    "experience-graduation-title":
      "Bracharelado em Sistemas de Informação (2017-2024)",
    "experience-freelancer-title": "Full Stack Developer (2019 - Atual)",
    "experience-freelancer":
      "Sou desenvolvedor Full Stack com quase 5 anos de experiência em criação de sistemas web e mobile, atuando desde a concepção até a entrega final do produto. Já trabalhei em projetos de diferentes segmentps, como Têxtil, Saúde, Eventos, Vestuário, sempre focando em entregar soluções escaláveis, seguras e com ótima experiência para o usuário. Meu foco é transformar ideias em sistemas robustos e funcionais, entregando sempre com qualidade e prazo.",
    "detail-project": `Ver detalhes <i class="fas fa-eye"></i>`,
    "link-project": `Acessar projeto <i class="fab fa-github"></i>`,
    "no-version": `Não há disponível uma versão para visualizar as imagens`,
    "select-version": `Selecione uma versão para visualizar as imagens`,
    "version-web": `Versão Web <i class="fas fa-desktop"></i>`,
    "version-mobile": `Versão Mobile <i class="fas fa-mobile-android"></i>`,
    // projetos
    "project-behero-title": "Be-Hero",
    "project-behero-description":
      "Aplicação desenvolvida para Web e Mobile durante a Semana OmniStack 11 da RocketSeat com o instrutor Diego Fernandes. O sistema conecta pessoas interessadas em ajudar com os casos cadastrados por ONGs, como abrigos de animais, apoio a pessoas em situação de rua, entre outros. A versão Web permite o cadastro de ONGs e seus casos, enquanto a versão Mobile exibe os casos para que os benfeitores possam entrar em contato e se tornar verdadeiros heróis.",
    "project-behero-short":
      "Sistema que conecta ONGs e seus casos a pessoas dispostas a ajudar.",

    "project-ecoleta-title": "E-Coleta",
    "project-ecoleta-description":
      "Aplicação desenvolvida para Web e Mobile durante a Next Level Week da RocketSeat com o instrutor Diego Fernandes. O sistema mapeia pontos de coleta de resíduos em estabelecimentos, ONGs ou organizações similares, criando uma ponte entre locais de coleta e pessoas interessadas em contribuir. A versão Web permite cadastrar os pontos de coleta e a versão Mobile exibe os pontos para que os usuários possam agendar ou indicar quais itens serão recolhidos.",
    "project-ecoleta-short":
      "Sistema que mapeia pontos de coleta de resíduos em diferentes locais.",

    "project-proffy-title": "Proffy",
    "project-proffy-description":
      "Proffy é uma plataforma de estudos online que conecta professores e alunos. O sistema permite o cadastro de professores e suas aulas, além de criar conexões entre estudantes e educadores, promovendo o aprendizado de forma simples e acessível.",
    "project-proffy-short":
      "Plataforma online que conecta professores e alunos.",

    "project-eventmanager-title": "Event Manager",
    "project-eventmanager-description":
      "O sistema Event Manager foi criado para o gerenciamento de eventos de diferentes tipos, como festas, espetáculos, solenidades ou comemorações. Ele possibilita o cadastro de eventos organizados por empresas ou promotores, venda e aquisição de ingressos, envio de notificações baseadas em localização ou histórico de participação e relatórios completos para os organizadores.",
    "project-eventmanager-short":
      "Sistema Web/Mobile para gerenciamento de eventos e aquisição de ingressos.",

    "project-expensivetracker-title": "Expensive Tracker",
    "project-expensivetracker-description":
      "Expensive Tracker é um aplicativo de controle financeiro pessoal que ajuda os usuários a gerenciar suas finanças de forma prática e eficiente. Permite registrar receitas e despesas, categorizar transações, definir orçamentos mensais, visualizar gráficos de desempenho financeiro, receber lembretes de pagamentos e sincronizar dados em múltiplos dispositivos.",
    "project-expensivetracker-short":
      "Aplicativo de gerenciamento financeiro pessoal.",

    "project-receipts-title": "Guide Receipts",
    "project-receipts-description":
      "Guide Receipts é um aplicativo para armazenar e organizar receitas pessoais de forma simples e prática. Ele permite salvar receitas, categorizá-las, definir instruções passo a passo e favoritar as melhores para acesso rápido.",
    "project-receipts-short":
      "Aplicativo para armazenar e organizar receitas pessoais.",

    "project-vitex-title": "ViTex",
    "project-vitex-description":
      "O ViTex atua como um sistema de controle de todo o processo de produção da área têxtil e também controle das suas vendas, permitindo que o usuário cadastre suas vendas/encomendas e faça o controle da produção desde o início até a finalização e montagem da expedição para o cliente. Tornar colaboradores (sistema multi usuários) com sentimento de pertença, uma vez que são inseridos nessa nova dinamicidade do processo. Além da gestão um controle de estoque, tanto de produção quanto de depósito, de forma simples e otimizada, busca uma melhor visão dos materiais consumidos e identificando-os para uma melhor gestão.",
    "project-vitex-short":
      "Sistema Web/Mobile que permite o controle de todo o processo de produção da área têxtil como também controle das suas vendas, expedições, etc.",

    "project-vpass-title": "VPass",
    "project-vpass-description":
      "O VPass é um sistema de controle de acesso de pessoas em ambientes, desenvolvido para garantir segurança, eficiência e praticidade na gestão de entradas de visitantes em ambientes corporativos.",
    "project-vpass-short":
      "Sistema Web/Mobile que permite o controle de acesso de pessoas como visitantes de ambientes corporativos, industriais e institucionais.",

    "project-woundcaresys-title": "WoundCareSys",
    "project-woundcaresys-description":
      "O WoundCareSys é uma solução digital integrada que une o acompanhamento clínico de feridas com uma retaguarda administrativa robusta. Voltado para clínicas, profissionais de saúde e pacientes, o sistema permite o monitoramento visual da cicatrização, gestão de agendamentos e coleta de dados clínicos, enquanto oferece ferramentas empresariais para controle financeiro, estoque e vendas. É a união entre cuidado personalizado e gestão eficiente.",
    "project-woundcaresys-short":
      "Um sistema Web/Mobile que une o acompanhamento clínico de feridas com uma retaguarda administrativa robusta.",
  },
};

// Função que traduz texto usando API externa
async function translateText(text, targetLang = "en") {
  try {
    const res = await fetch("https://translate.argosopentech.com/translate", {
      method: "POST",
      body: JSON.stringify({
        q: text,
        source: "pt",
        target: targetLang,
        format: "text",
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error("Erro ao traduzir");

    const data = await res.json();
    return data.translatedText;
  } catch (err) {
    console.error("Erro:", err);
    return text; // fallback: mantém texto original
  }
}

// Função que traduz automaticamente todos os elementos com data-i18n
async function autoTranslate(lang = "en") {
  const elements = document.querySelectorAll("[data-i18n]");

  for (let el of elements) {
    const original = el.dataset.original || el.innerText.trim();

    // Salva o texto original no dataset (caso ainda não tenha salvo)
    if (!el.dataset.original) {
      el.dataset.original = original;
    }

    // Se a língua é pt, só restaura
    if (lang === "pt") {
      el.innerText = el.dataset.original;
      continue;
    }

    // Tradução automática
    const translated = await translateText(original, lang);
    el.innerText = translated;
  }
}

// Função que aplica traduções
function translateHTMLElements(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!translations[lang][key]) return;

    // Converte  em <br> para preservar quebras de linha
    const formattedText = translations[lang][key].replace(/\n/g, "<br>");

    // Usa innerHTML para renderizar as quebras
    el.innerHTML = formattedText;
  });
}

// Detectar idioma do navegador
const userLang = navigator.language || navigator.userLanguage; // ex: 'en-US' ou 'pt-BR'
const initialLang = userLang.startsWith("en") ? "en" : "pt";
translateHTMLElements(initialLang);

// Botão manual
const langBtn = document.getElementById("lang-toggle");
let currentLang = initialLang;

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "pt" ? "en" : "pt";
  translateHTMLElements(currentLang);

  // Destrói a instância atual
  typed.destroy();

  // Cria uma nova instância com as strings do novo idioma
  typed = new Typed("#typed-container", {
    strings: typedStrings[currentLang],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: "|",
    contentType: "html",
  });
});

// Dark/Light mode

const toggleBtn = document.querySelector(".floating-btn-theme");
const icon = toggleBtn.querySelector("i");
// Detecta preferência do usuário
const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

function changeTheme() {
  if (document.body.classList.contains("dark")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

// Define o tema inicial
document.body.classList.toggle("dark", prefersDark);
changeTheme();

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  changeTheme();
});

// Formulário EmailJS
const form = document.querySelector(".contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector("textarea").value;
  if (!name || !email || !message) {
    alert("Preencha todos os campos!");
    return;
  }
  showLoader();

  emailjs
    .send(
      "service_bhhvg2p",
      "template_wrrzt0i",
      {
        name: name,
        email: email,
        message: message,
        title: "Olá, tenho interesse em entrar em contato com você!",
        time: new Date().toLocaleString("pt-BR", {
          timeZone: "America/Sao_Paulo",
        }),
      },
      "FjXr34lY4EcBWYXNn"
    )
    .then(
      () => {
        // showSnack("Mensagem enviada com sucesso!", {
        //   variant: "success",
        //   // duration: 0,
        //   // icon: `<i class="fab fa-check"></i>`,
        //   closeText: "X",
        //   position: { vertical: "top", horizontal: "end" },
        // });
        form.reset();
        hideLoader(true);
      },
      (error) => {
        // showSnack(error, {
        //   variant: "error",
        //   // duration: 0,
        //   // icon: `<i class="fab fa-check"></i>`,
        //   closeText: "X",
        //   position: { vertical: "top", horizontal: "end" },
        // });
        hideLoader(false, error);
      }
    );
});

// Typed.js - efeito de digitação
const typedStrings = {
  en: ['<h1><i class="fa-solid fa-mug-hot"></i> Welcome!</h1>'],
  pt: ['<h1><i class="fa-solid fa-mug-hot"></i> Seja muito bem-vindo!</h1>'],
};
var typed = new Typed("#typed-container", {
  strings: typedStrings[currentLang],
  typeSpeed: 60, // velocidade de digitação mais suave
  backSpeed: 30, // velocidade de deleção (opcional)
  startDelay: 500, // espera antes de começar
  smartBackspace: true, // apaga apenas o que mudou
  loop: true, // loop contínuo
  showCursor: true, // exibe o cursor
  cursorChar: "|", // caractere do cursor
  contentType: "html", // permite inserir HTML diretamente
});

// AOS - animação ao scroll
AOS.init({
  once: true, // anima uma vez ao entrar na viewport
  duration: 700, // velocidade base
  easing: "ease-out", // easing suave
});

// Swiper Auto
const swiperAuto = new Swiper(".swiperAuto", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 15, // rotação lateral
    stretch: 0, // espaçamento entre slides
    depth: 120, // profundidade 3D
    modifier: 1,
    slideShadows: true, // ativa sombras
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperManual = new Swiper(".swiperManual", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 15, // rotação lateral
    stretch: 0, // espaçamento entre slides
    depth: 120, // profundidade 3D
    modifier: 1,
    slideShadows: true, // ativa sombras
  },
  autoplay: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Fade-in adicional para elementos
const faders = document.querySelectorAll("section,.card,.project,.skill");
const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach((fader) => {
  fader.classList.add("fade-in");
  appearOnScroll.observe(fader);
});

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // anima só uma vez
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach((card) => observer.observe(card));

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const dialog = document.getElementById("projectDialog");
const dialogContent = document.getElementById("dialogContent");
const maximizeBtn = document.getElementById("maximizeBtn");

let maximized = false;

function closeDialog() {
  dialog.style.display = "none";
}

maximizeBtn.addEventListener("click", () => {
  maximized = !maximized;
  dialogContent.classList.toggle("maximized", maximized);
  maximizeBtn.innerHTML = maximized
    ? `<i class="fas fa-minimize"></i>`
    : `<i class="fas fa-up-right-from-square"></i>`; // troca ícone
});

let swiperDialogInstance = null; // guarda a instância do swiper do dialog
let currentDialogData = null;
let currentVersion = null;

function openDialog({
  title,
  description,
  techs,
  images,
  github,
  titleKey,
  descriptionKey,
}) {
  currentDialogData = { title, description, techs, images, github };

  document.getElementById("dialogTitle").innerText =
    translations[currentLang][titleKey];
  document.getElementById("dialogDescription").innerText =
    translations[currentLang][descriptionKey];
  if (github) document.getElementById("dialogLink").href = github;
  else document.getElementById("dialogLink").style.display = "none";

  // 🔹 Renderizar tecnologias
  const techsContainer = document.getElementById("dialogTechs");
  techsContainer.innerHTML = "";
  techs.forEach((t) => {
    const span = document.createElement("span");
    span.innerText = t;
    techsContainer.appendChild(span);
  });

  // Determina quais versões existem
  const hasWeb = images && images.web && images.web.length > 0;
  const hasApp = images && images.app && images.app.length > 0;

  const btnWeb = document.getElementById("btnWeb");
  const btnApp = document.getElementById("btnApp");
  const imagesContainer = document.getElementById("dialogImages");
  const swiperWrapper = imagesContainer.closest(".swiper");

  // Mostra/esconde botões dependendo do que existe
  btnWeb.style.display = hasWeb ? "inline-block" : "none";
  btnApp.style.display = hasApp ? "inline-block" : "none";

  // ❌ Não define versão inicial
  currentVersion = null;

  if (!hasApp && !hasWeb && (!images || Object.keys(images).length === 0)) {
    swiperWrapper.style.display = "flex";
    imagesContainer.innerHTML = `
    <div class="placeholder" data-i18n="no-version">
      <p>${translations[currentLang]["no-version"]}</p>
    </div>
  `;
  } else if ((!hasApp && hasWeb) || (hasApp && !hasWeb)) {
    // Se só tiver uma versão, seleciona ela automaticamente
    switchVersion(hasWeb ? "web" : "app");
    updateActiveButton();
  } else {
    // Mostra placeholder de pré-visualização
    showPlaceholder();
    // Ativa botão selecionado
    updateActiveButton();
  }

  // 🔹 Mostrar dialog
  document.getElementById("projectDialog").style.display = "flex";
}

/* 🔹 Mostrar placeholder neutro */
function showPlaceholder() {
  const imagesContainer = document.getElementById("dialogImages");
  const swiperWrapper = imagesContainer.closest(".swiper");

  swiperWrapper.style.display = "flex";
  imagesContainer.innerHTML = `
    <div class="placeholder" data-i18n="select-version">
      <p>${translations[currentLang]["select-version"]}</p>
    </div>
  `;
}

/* 🔹 Função que troca a versão (Web/App) */
function switchVersion(version) {
  if (!currentDialogData || !currentDialogData.images[version]) return;
  currentVersion = version;

  renderImages(currentDialogData.images[version]);

  updateActiveButton();
}

/* 🔹 Renderiza imagens */
function renderImages(images) {
  const imagesContainer = document.getElementById("dialogImages");
  const swiperWrapper = imagesContainer.closest(".swiper");

  if (!images || images.length === 0) {
    showPlaceholder();
    return;
  }

  swiperWrapper.style.display = "block"; // mostra slider
  imagesContainer.innerHTML = "";

  images.forEach((img) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `<img src="${img}" alt="${currentDialogData.title} screenshot" onclick="openPreview('${img}')"/>`;
    imagesContainer.appendChild(slide);
  });

  // Reinicializa Swiper
  if (window.dialogSwiper) {
    window.dialogSwiper.destroy(true, true);
  }
  window.dialogSwiper = new Swiper(".swiperAuto", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 15, // rotação lateral
      stretch: 0, // espaçamento entre slides
      depth: 120, // profundidade 3D
      modifier: 1,
      slideShadows: true, // ativa sombras
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

/* 🔹 Marca botão ativo */
function updateActiveButton() {
  document
    .querySelectorAll(".version-switch button")
    .forEach((btn) => btn.classList.remove("active"));
  if (currentVersion) {
    document
      .getElementById("btn" + capitalize(currentVersion))
      .classList.add("active");
  }
}

/* helper */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function closeDialog() {
  document.getElementById("projectDialog").style.display = "none";
}

const imagePreview = document.getElementById("imagePreview");
const previewImg = document.getElementById("previewImg");

function openPreview(imgElement) {
  previewImg.src = imgElement;
  imagePreview.style.display = "flex";
}

function closePreview() {
  imagePreview.style.display = "none";
  previewImg.classList.remove("zoomed");
}

let isZoomed = false;
let isDragging = false;
let startX,
  startY,
  currentX = 0,
  currentY = 0;
let currentScale = 1;
let initialDistance = null;

/* Clique / toque simples para alternar zoom */
previewImg.addEventListener("click", () => {
  if (currentScale > 1) {
    resetZoom();
  } else {
    setZoom(2); // zoom padrão no clique
  }
});

/* Funções utilitárias */
function setZoom(scale) {
  currentScale = scale;
  isZoomed = scale > 1;
  applyTransform();
}

function resetZoom() {
  currentScale = 1;
  currentX = 0;
  currentY = 0;
  isZoomed = false;
  previewImg.classList.remove("dragging");
  applyTransform();
}

function applyTransform() {
  previewImg.style.transform = `scale(${currentScale}) translate(${currentX}px, ${currentY}px)`;
}

/* --- DESKTOP (mouse drag) --- */
previewImg.addEventListener("mousedown", (e) => {
  if (!isZoomed) return;
  isDragging = true;
  startX = e.clientX - currentX;
  startY = e.clientY - currentY;
  previewImg.classList.add("dragging");
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging || !isZoomed) return;
  currentX = e.clientX - startX;
  currentY = e.clientY - startY;
  applyTransform();
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  previewImg.classList.remove("dragging");
});

/* --- MOBILE (touch drag + pinch) --- */
previewImg.addEventListener(
  "touchstart",
  (e) => {
    if (e.touches.length === 1 && isZoomed) {
      // arrastar com um dedo
      isDragging = true;
      const touch = e.touches[0];
      startX = touch.clientX - currentX;
      startY = touch.clientY - currentY;
      previewImg.classList.add("dragging");
    }

    if (e.touches.length === 2) {
      // pinch start
      initialDistance = getDistance(e.touches[0], e.touches[1]);
    }
  },
  { passive: true }
);

previewImg.addEventListener(
  "touchmove",
  (e) => {
    if (isDragging && e.touches.length === 1 && isZoomed) {
      const touch = e.touches[0];
      currentX = touch.clientX - startX;
      currentY = touch.clientY - startY;
      applyTransform();
    }

    if (e.touches.length === 2) {
      // pinch zoom
      const newDistance = getDistance(e.touches[0], e.touches[1]);
      if (initialDistance) {
        let scaleChange = newDistance / initialDistance;
        setZoom(Math.min(Math.max(currentScale * scaleChange, 1), 4)); // limita entre 1x e 4x
      }
      initialDistance = newDistance;
    }
  },
  { passive: true }
);

previewImg.addEventListener(
  "touchend",
  (e) => {
    isDragging = false;
    previewImg.classList.remove("dragging");

    if (e.touches.length < 2) {
      initialDistance = null;
    }
  },
  { passive: true }
);

/* Calcular distância entre dois dedos */
function getDistance(touch1, touch2) {
  const dx = touch2.clientX - touch1.clientX;
  const dy = touch2.clientY - touch1.clientY;
  return Math.sqrt(dx * dx + dy * dy);
}

const projects = [
  {
    name: "Be-Hero",
    description:
      "Um sistema Web/Mobile que fornece casos específicos de uma Organização Não Governamental (ONG), seja ela cuidadora de animais abandonados, pessoas em situação de rua, etc",
    descriptionShortKey: "project-behero-short",
    dialog: {
      titleKey: "project-behero-title",
      descriptionKey: "project-behero-description",
      title: "Be-Hero",
      description:
        "Aplicação desenvolvida para Web e Mobile na Semana OmniStack 11 oferecida pela RocketSeat com o instrutor Diego Fernandes. Trata-se de um sistema que fornece casos específicos de uma Organização Não Governamental (ONG), seja ela cuidadora de animais abandonados, pessoas em situação de rua, etc. O objetivo da aplicação é fornecer uma ponte de acesso entre as ONGs e seus casos com pessoas que querem contribuir na solução do problema. A aplicação Web tem como finalidade cadastrar as ONGs e seus casos, enquanto que a aplicação Mobile exibirá os casos para os benfeitores que poderão entrar em contato com as ONGs para serem os heróis do dia daquele que necessita.",
      techs: ["Node", "React", "React Native", "Expo"],
      images: {
        web: [
          "assets/be_hero/web/inicial.jpeg",
          "assets/be_hero/web/workspace.jpeg",
          "assets/be_hero/web/cadastro.jpeg",
          "assets/be_hero/web/cadastro2.jpeg",
        ],
        app: [
          "assets/be_hero/mobile/workspace.jpeg",
          "assets/be_hero/mobile/details.jpeg",
        ],
      },
      github: "https://github.com/arthurmdros/be-hero",
    },
    image: "assets/be_hero/web/inicial.jpeg",
  },
  {
    name: "ViTex",
    description:
      "Sistema Web/Mobile que permite o controle de todo o processo de produção da área têxtil e também controle das suas vendas, permitindo que o usuário cadastre suas vendas/encomendas e faça o controle da produção desde o início até a finalização e montagem da expedição para o cliente.",
    descriptionShortKey: "project-vitex-short",
    dialog: {
      titleKey: "project-vitex-title",
      descriptionKey: "project-vitex-description",
      title: "ViTex",
      description:
        "O ViTex atua como um sistema de controle de todo o processo de produção da área têxtil e também controle das suas vendas, permitindo que o usuário cadastre suas vendas/encomendas e faça o controle da produção desde o início até a finalização e montagem da expedição para o cliente. Tornar colaboradores (sistema multi usuários) com sentimento de pertença, uma vez que são inseridos nessa nova dinamicidade do processo. Além da gestão um controle de estoque, tanto de produção quanto de depósito, de forma simples e otimizada, busca uma melhor visão dos materiais consumidos e identificando-os para uma melhor gestão.",
      images: {
        web: ["assets/vitex/web/inicial.png"],
        app: ["assets/vitex/mobile/inicial.png"],
      },
      techs: ["Angular", "Flutter"],
    },
    image: "assets/vitex/web/inicial.png",
  },
  {
    name: "E-Coleta",
    description:
      "It is a system Web/Mobile that keeps waste collection points, whether in an establishment, NGOs (Non-Governmental Organizations) and etc.",
    descriptionShortKey: "project-ecoleta-short",
    dialog: {
      titleKey: "project-ecoleta-title",
      descriptionKey: "project-ecoleta-description",
      title: "E-Coleta",
      description:
        "Application developed for Web and Mobile platform in the Next Level Week Offered by RocketSeat with instructor Diego Fernandes. It is a system that keeps waste collection points, whether in an establishment, NGOs (Non-Governmental Organizations) and etc. The purpose of the application is to provide an access bridge between these establishment with people who want to contribute to the solution of the problem. The Web version is responsible for registering the collection points and the Mobile version display points so people can get in touch and inform the establishment which items will be collected.",
      techs: ["Node", "React", "React Native", "Expo"],
      images: {
        web: [
          "assets/e_coleta/web/inicial.jpeg",
          "assets/e_coleta/web/cadastro.jpeg",
        ],
        app: [
          "assets/e_coleta/mobile/inicial.jpeg",
          "assets/e_coleta/mobile/workspace.jpeg",
          "assets/e_coleta/mobile/cadastro.jpeg",
        ],
      },
      github: "https://github.com/arthurmdros/e-coleta",
    },
    image: "assets/e_coleta/web/inicial.jpeg",
  },
  {
    name: "VPass",
    description:
      "Sistema Web/Mobile que permite o controle de acesso de pessoas em ambientes, desenvolvido para garantir segurança, eficiência e praticidade na gestão de entradas de visitantes em ambientes corporativos, industriais e institucionais.",
    descriptionShortKey: "project-vpass-short",
    dialog: {
      titleKey: "project-vpass-title",
      descriptionKey: "project-vpass-description",
      title: "VPass",
      description:
        "O VPass é um sistema de controle de acesso de pessoas em ambientes, desenvolvido para garantir segurança, eficiência e praticidade na gestão de entradas de visitantes em ambientes corporativos, industriais e institucionais. Seu principal objetivo é automatizar o controle de fluxo de pessoas, reduzir riscos de acessos indevidos e otimizar processos operacionais.",
      images: {
        web: ["assets/vpass/web/inicial.png"],
      },
      techs: ["Angular"],
    },
    image: "assets/vpass/web/inicial.png",
  },
  {
    name: "Proffy",
    description: "Um sistema Web de uma plataforma de estudos online.",
    descriptionShortKey: "project-proffy-short",
    dialog: {
      titleKey: "project-proffy-title",
      descriptionKey: "project-proffy-description",
      title: "Proffy",
      description:
        "O sistema irá atuar como uma plataforma de estudos online. Apresenta as seguintes funcionalidaes: o cadastro de professores e de suas aulas, criação de conexão entre alunos e professores.",
      techs: ["Node", "React"],
      images: {
        web: [
          "assets/proffy/inicial.jpeg",
          "assets/proffy/workspace.jpeg",
          "assets/proffy/cadastro.jpeg",
        ],
      },
      github: "https://github.com/arthurmdros/proffy-web",
    },
    image: "assets/proffy/inicial.jpeg",
  },
  {
    name: "WoundCareSys",
    description:
      "Um sistema Web/Mobile que une o acompanhamento clínico de feridas com uma retaguarda administrativa robusta.",
    descriptionShortKey: "project-woundcaresys-short",
    dialog: {
      titleKey: "project-woundcaresys-title",
      descriptionKey: "project-woundcaresys-description",
      title: "WoundCareSys",
      description:
        "O WoundCareSys é uma solução digital integrada que une o acompanhamento clínico de feridas com uma retaguarda administrativa robusta. Voltado para clínicas, profissionais de saúde e pacientes, o sistema permite o monitoramento visual da cicatrização, gestão de agendamentos e coleta de dados clínicos, enquanto oferece ferramentas empresariais para controle financeiro, estoque e vendas. É a união entre cuidado personalizado e gestão eficiente.",
      images: {
        web: ["assets/woundcaresys/web/inicial.png"],
        app: ["assets/woundcaresys/mobile/inicial.png"],
      },
      techs: ["Angular", "Flutter"],
    },
    image: "assets/woundcaresys/web/inicial.png",
  },
  {
    name: "Event Manager",
    description:
      "Um sistema Web/Mobile que atua como um gerenciador de eventos para promotores de eventos, empresas, etc.",
    descriptionShortKey: "project-eventmanager-short",
    dialog: {
      titleKey: "project-eventmanager-title",
      descriptionKey: "project-eventmanager-description",
      title: "Event Manager",
      description:
        "O sistema EventManager terá o cadastro de eventos (festa, espetáculo, comemoração, solenidade etc.) organizado por especialistas, com objetivos institucionais, comunitários ou promocionais. Também contará com as funcionalidades de aquisição de ingressos para os eventos cadastrados, notificação de eventos por meio de localização ou histórico de eventos e exibirá os relatórios dos eventos para os seus organizadores.",
      techs: ["Node", "React", "React Native", "Expo"],
      images: {
        web: [
          "assets/event_manager/web/login.jpeg",
          "assets/event_manager/web/workspace.jpeg",
          "assets/event_manager/web/tela1.jpeg",
          "assets/event_manager/web/tela2.jpeg",
          "assets/event_manager/web/tela3.jpeg",
          "assets/event_manager/web/tela4.jpeg",
          "assets/event_manager/web/tela5.jpeg",
          "assets/event_manager/web/tela6.jpeg",
          "assets/event_manager/web/tela7.jpeg",
          "assets/event_manager/web/tela8.jpeg",
          "assets/event_manager/web/tela9.jpeg",
          "assets/event_manager/web/tela10.jpeg",
          "assets/event_manager/web/tela11.jpeg",
          "assets/event_manager/web/tela12.jpeg",
          "assets/event_manager/web/tela13.jpeg",
        ],
        app: [
          "assets/event_manager/mobile/workspace.jpeg",
          "assets/event_manager/mobile/tela1.jpeg",
          "assets/event_manager/mobile/tela2.jpeg",
          "assets/event_manager/mobile/tela3.jpeg",
          "assets/event_manager/mobile/tela4.jpeg",
          "assets/event_manager/mobile/tela5.jpeg",
          "assets/event_manager/mobile/tela6.jpeg",
          "assets/event_manager/mobile/tela7.jpeg",
        ],
      },
      github: "https://github.com/arthurmdros/event-manager",
    },
    image: "assets/event_manager/web/login.jpeg",
  },
  {
    name: "Expensive Tracker",
    description:
      "Um aplicativo que atua como um gerenciador financeiro pessoal.",
    descriptionShortKey: "project-expensivetracker-short",
    dialog: {
      titleKey: "project-expensivetracker-title",
      descriptionKey: "project-expensivetracker-description",
      title: "Expensive Tracker",
      description:
        "O aplicativo Expensive Tracker é um gerenciador financeiro pessoal que permite aos usuários controlar suas finanças de maneira simples e eficiente. Com ele, é possível registrar receitas e despesas, categorizar transações, definir orçamentos mensais e visualizar gráficos de desempenho financeiro. O aplicativo também oferece lembretes para pagamentos futuros e sincronização com múltiplos dispositivos, garantindo que os usuários tenham acesso às suas informações financeiras a qualquer momento e em qualquer lugar.",
      techs: ["Flutter"],
      images: {
        app: [
          "assets/expensive_tracker/inicial.png",
          "assets/expensive_tracker/workspace.png",
          "assets/expensive_tracker/cadastro.png",
        ],
      },
      github: "https://github.com/arthurmdros/expensive_tracker",
    },
    image: "assets/expensive_tracker/inicial.png",
  },
  {
    name: "Guide receipts",
    description: "Um aplicativo que atua como um livro de receitas pessoal.",
    descriptionShortKey: "project-receipts-short",
    dialog: {
      titleKey: "project-receipts-title",
      descriptionKey: "project-receipts-description",
      title: "Guide receipts",
      description:
        "O aplicativo Guide receipts é uma biblioteca que permite aos usuários armazenar suas receitas favoritas de maneira simples e eficiente. Com ele, é possível salvar suas receitas, categorizar, definir passo-a-passo e favoritar as melhores.",
      techs: ["Flutter"],
      images: {
        app: [
          "assets/guide_receipts/inicial.png",
          "assets/guide_receipts/tela1.png",
          "assets/guide_receipts/tela2.png",
          "assets/guide_receipts/tela3.png",
          "assets/guide_receipts/tela4.png",
          "assets/guide_receipts/tela5.png",
        ],
      },
      github: "https://github.com/arthurmdros/receipts",
    },
    image: "assets/guide_receipts/inicial.png",
  },
];

const wrapper = document.getElementById("projectsWrapper");

projects.forEach((p) => {
  wrapper.innerHTML += `
    <div class="swiper-slide">
      <div class="center-card">
        <div class="project-card">
          <h3 class="m-3">${p.name}</h3>
          <div class="section-project">
            <p data-i18n=${p.descriptionShortKey}>
              ${translations[currentLang][p.descriptionShortKey]}
            </p>
            <button data-i18n="detail-project" onclick='openDialog(${JSON.stringify(
              p.dialog
            )})' class="mb-3 btn btn-sm">
              Ver detalhes <i class="fas fa-eye"></i>
            </button>
            <img src="${p.image}" alt="${p.name} Screenshot" />
          </div>
        </div>
      </div>
    </div>
  `;
});

// Snackbar
/**
 * Snackbar estilo MatSnackBar
 * @param {string} message - Texto principal (pode conter HTML leve, se quiser).
 * @param {object} options
 *  - variant: 'success' | 'error' | 'warning' | 'info' (default: 'info')
 *  - duration: ms (default: 4000). Use 0 para não fechar automaticamente.
 *  - actionText: string (ex: 'Desfazer')
 *  - onAction: function (callback do botão)
 *  - closeText: string (ex: 'Fechar') – mostra X botão textual
 *  - icon: string (qualquer HTML de ícone, ex: '<i class="fas fa-check-circle"></i>')
 *  - position: { vertical: 'top'|'bottom', horizontal: 'start'|'center'|'end' }
 */
(function () {
  const container = document.getElementById("snackbar-container");
  const queue = [];
  let showing = false;

  // Ícones Font Awesome
  function defaultIcon(variant) {
    const map = {
      success: '<i class="fas fa-check-circle"></i>',
      error: '<i class="fas fa-times-circle"></i>',
      warning: '<i class="fas fa-exclamation-triangle"></i>',
      info: '<i class="fas fa-info-circle"></i>',
    };
    return map[variant] || '<i class="fas fa-info-circle"></i>';
  }

  // Controle de posição
  function setPosition({ vertical = "bottom", horizontal = "center" } = {}) {
    container.className = "";
    container.classList.add(vertical, horizontal);
  }

  window.showSnack = function (message, options = {}) {
    queue.push({ message, options });
    if (!showing) processQueue();
  };

  async function processQueue() {
    if (queue.length === 0) return;
    showing = true;

    const { message, options } = queue.shift();
    const {
      variant = "info",
      duration = 4000,
      actionText,
      onAction,
      closeText,
      icon,
      position,
    } = options;

    if (position) setPosition(position);

    const el = document.createElement("div");
    el.className = `snackbar snackbar--${variant}`;
    el.innerHTML = `
      <div class="snackbar__message">
        <span class="snackbar__icon">${icon || defaultIcon(variant)}</span>
        <span>${message}</span>
      </div>
      <div class="snackbar__actions">
        ${
          actionText
            ? `<button class="snackbar__btn snackbar__action">${actionText}</button>`
            : ""
        }
        <button class="snackbar__btn snackbar__close">${
          closeText || '<i class="fas fa-times"></i>'
        }</button>
      </div>
    `;

    container.appendChild(el);
    requestAnimationFrame(() => el.classList.add("show"));

    let timer = null;
    if (duration > 0) {
      timer = setTimeout(() => dismiss(), duration);
    }

    const btnAction = el.querySelector(".snackbar__action");
    const btnClose = el.querySelector(".snackbar__close");

    function dismiss() {
      clearTimeout(timer);
      el.classList.remove("show");
      setTimeout(() => {
        el.remove();
        showing = false;
        processQueue();
      }, 250);
    }

    btnClose.addEventListener("click", dismiss);
    btnAction?.addEventListener("click", () => {
      onAction && onAction();
      dismiss();
    });

    document.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Escape") dismiss();
      },
      { once: true }
    );
  }
})();

// Loader
function showLoader() {
  const loader = document.getElementById("lazy-loader");
  const progress = document.getElementById("loader-progress");
  const msg = document.getElementById("loader-msg");
  const title = document.getElementById("loader-title");
  const icons = document.querySelectorAll(".loader-icon");

  loader.style.display = "flex";
  icons.forEach((i) => (i.style.display = "none"));
  progress.style.width = "0%";
  msg.innerText = "Aguarde, processando seu pedido...";
  title.innerText = "Enviando e-mail...";

  // Simulação de progresso interativo
  let width = 0;
  window.loaderInterval = setInterval(() => {
    if (width < 90) {
      // nunca enche 100% até resposta
      width += Math.random() * 10;
      progress.style.width = width + "%";
    }
  }, 400);
}

function hideLoader(
  success = true,
  errorMsg = "Ocorreu um erro ao enviar o e-mail."
) {
  const progress = document.getElementById("loader-progress");
  const msg = document.getElementById("loader-msg");
  const title = document.getElementById("loader-title");
  const loader = document.getElementById("lazy-loader");
  const successIcon = document.querySelector(".loader-icon.success");
  const errorIcon = document.querySelector(".loader-icon.error");

  clearInterval(window.loaderInterval);

  progress.style.width = "100%";
  if (success) {
    msg.innerText = "E-mail enviado com sucesso!";
    title.innerText = "Concluído ✅";
    successIcon.style.display = "block";
  } else {
    msg.innerText = errorMsg || "Falha ao enviar o e-mail.";
    title.innerText = "Erro ❌";
    errorIcon.style.display = "block";
  }

  // Fecha automático depois de 2.5s
  setTimeout(() => {
    loader.style.display = "none";
  }, 2500);
}

const btn = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
const navbar = document.querySelector("nav");

btn.addEventListener("click", () => {
  links.classList.toggle("show");
});

// Fechar ao clicar em qualquer link
links.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    links.classList.remove("show");
  });
});

// fecha ao clicar fora do navbar
document.addEventListener("click", (e) => {
  if (
    links.classList.contains("show") &&
    !navbar.contains(e.target) // se clicou fora do nav inteiro
  ) {
    links.classList.remove("show");
  }
});
