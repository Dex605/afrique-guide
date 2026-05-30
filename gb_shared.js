// ═══════════════════════════════════════════════
// GLOBAL BRANDS — SHARED UTILITIES
// ═══════════════════════════════════════════════

// ── LANGUAGES ──
const GB_LANGUAGES = {
  en: {
    name:'English', flag:'🇬🇧', dir:'ltr',
    t: {
      home:'Home', rateBrands:'Rate Brands', wallet:'Wallet', signOut:'Sign Out',
      myProfile:'My Profile', accountSettings:'Account Settings', language:'Language',
      notifications:'Notifications', helpSupport:'Help / Support', contactUs:'Contact Us',
      aboutUs:'About Us', termsOfService:'Terms of Service', privacyPolicy:'Privacy Policy',
      logOut:'Log Out', startRating:'Start Rating →', balance:'Balance',
      welcomeBack:'Welcome Back', goodMorning:'Good morning', goodAfternoon:'Good afternoon',
      goodEvening:'Good evening', brandsRated:'Brands Rated', totalEarned:'Total Earned',
      welcomeBonus:'Welcome Bonus', todayRound:"Today's Round", searchBrands:'Search brands...',
      readMore:'Read More →', foundedIn:'Founded', ratedBy:'Rated by', peopleWorldwide:'people worldwide',
      selectStars:'Select Stars to Submit', submitRating:'Submit Rating', chat:'Live Chat',
      inviteCode:'Invite Code', deposit:'Deposit', withdraw:'Withdraw', history:'History',
      pendingDeposit:'Pending Deposit', pendingWithdrawal:'Pending Withdrawal', accountBalance:'Account Balance',
      saveChanges:'Save Changes', cancel:'Cancel', send:'Send', typeMessage:'Type a message...',
      customerCare:'Customer Care', online:'Online', offline:'Offline',
    }
  },
  sw: {
    name:'Kiswahili', flag:'🇰🇪', dir:'ltr',
    t: {
      home:'Nyumbani', rateBrands:'Pima Biashara', wallet:'Mkoba', signOut:'Toka',
      myProfile:'Wasifu Wangu', accountSettings:'Mipangilio ya Akaunti', language:'Lugha',
      notifications:'Arifa', helpSupport:'Msaada', contactUs:'Wasiliana Nasi',
      aboutUs:'Kuhusu Sisi', termsOfService:'Masharti ya Huduma', privacyPolicy:'Sera ya Faragha',
      logOut:'Toka', startRating:'Anza Kupima →', balance:'Salio',
      welcomeBack:'Karibu Tena', goodMorning:'Habari za asubuhi', goodAfternoon:'Habari za mchana',
      goodEvening:'Habari za jioni', brandsRated:'Biashara Zilizopimwa', totalEarned:'Jumla Iliyopatikana',
      welcomeBonus:'Bonasi ya Karibu', todayRound:'Raundi ya Leo', searchBrands:'Tafuta biashara...',
      readMore:'Soma Zaidi →', foundedIn:'Ilianzishwa', ratedBy:'Imepimwa na', peopleWorldwide:'watu duniani kote',
      selectStars:'Chagua Nyota Kuwasilisha', submitRating:'Wasilisha Tathmini', chat:'Mazungumzo',
      inviteCode:'Nambari ya Mwaliko', deposit:'Weka Pesa', withdraw:'Toa Pesa', history:'Historia',
      pendingDeposit:'Amana Inayosubiri', pendingWithdrawal:'Kutoa Kunaosubiri', accountBalance:'Salio la Akaunti',
      saveChanges:'Hifadhi Mabadiliko', cancel:'Ghairi', send:'Tuma', typeMessage:'Andika ujumbe...',
      customerCare:'Huduma kwa Wateja', online:'Mtandaoni', offline:'Nje ya Mtandao',
    }
  },
  fr: {
    name:'Français', flag:'🇫🇷', dir:'ltr',
    t: {
      home:'Accueil', rateBrands:'Évaluer les Marques', wallet:'Portefeuille', signOut:'Déconnexion',
      myProfile:'Mon Profil', accountSettings:'Paramètres du Compte', language:'Langue',
      notifications:'Notifications', helpSupport:'Aide / Support', contactUs:'Nous Contacter',
      aboutUs:'À Propos', termsOfService:"Conditions d'Utilisation", privacyPolicy:'Politique de Confidentialité',
      logOut:'Se Déconnecter', startRating:'Commencer →', balance:'Solde',
      welcomeBack:'Bon Retour', goodMorning:'Bonjour', goodAfternoon:'Bon après-midi',
      goodEvening:'Bonsoir', brandsRated:'Marques Évaluées', totalEarned:'Total Gagné',
      welcomeBonus:'Bonus de Bienvenue', todayRound:"Tour d'Aujourd'hui", searchBrands:'Rechercher...',
      readMore:'Lire la Suite →', foundedIn:'Fondée', ratedBy:'Évalué par', peopleWorldwide:'personnes dans le monde',
      selectStars:'Sélectionnez des Étoiles', submitRating:'Soumettre', chat:'Chat en Direct',
      inviteCode:"Code d'Invitation", deposit:'Déposer', withdraw:'Retirer', history:'Historique',
      pendingDeposit:'Dépôt en Attente', pendingWithdrawal:'Retrait en Attente', accountBalance:'Solde du Compte',
      saveChanges:'Enregistrer', cancel:'Annuler', send:'Envoyer', typeMessage:'Tapez un message...',
      customerCare:'Service Client', online:'En ligne', offline:'Hors ligne',
    }
  },
  es: {
    name:'Español', flag:'🇪🇸', dir:'ltr',
    t: {
      home:'Inicio', rateBrands:'Calificar Marcas', wallet:'Billetera', signOut:'Cerrar Sesión',
      myProfile:'Mi Perfil', accountSettings:'Configuración', language:'Idioma',
      notifications:'Notificaciones', helpSupport:'Ayuda / Soporte', contactUs:'Contáctenos',
      aboutUs:'Sobre Nosotros', termsOfService:'Términos de Servicio', privacyPolicy:'Política de Privacidad',
      logOut:'Cerrar Sesión', startRating:'Empezar →', balance:'Saldo',
      welcomeBack:'Bienvenido de Vuelta', goodMorning:'Buenos días', goodAfternoon:'Buenas tardes',
      goodEvening:'Buenas noches', brandsRated:'Marcas Calificadas', totalEarned:'Total Ganado',
      welcomeBonus:'Bono de Bienvenida', todayRound:'Ronda de Hoy', searchBrands:'Buscar marcas...',
      readMore:'Leer Más →', foundedIn:'Fundada', ratedBy:'Calificado por', peopleWorldwide:'personas en todo el mundo',
      selectStars:'Seleccionar Estrellas', submitRating:'Enviar', chat:'Chat en Vivo',
      inviteCode:'Código de Invitación', deposit:'Depositar', withdraw:'Retirar', history:'Historial',
      pendingDeposit:'Depósito Pendiente', pendingWithdrawal:'Retiro Pendiente', accountBalance:'Saldo de Cuenta',
      saveChanges:'Guardar', cancel:'Cancelar', send:'Enviar', typeMessage:'Escribe un mensaje...',
      customerCare:'Atención al Cliente', online:'En línea', offline:'Desconectado',
    }
  },
  ar: {
    name:'العربية', flag:'🇸🇦', dir:'rtl',
    t: {
      home:'الرئيسية', rateBrands:'تقييم العلامات', wallet:'المحفظة', signOut:'تسجيل الخروج',
      myProfile:'ملفي الشخصي', accountSettings:'إعدادات الحساب', language:'اللغة',
      notifications:'الإشعارات', helpSupport:'المساعدة', contactUs:'اتصل بنا',
      aboutUs:'معلومات عنا', termsOfService:'شروط الخدمة', privacyPolicy:'سياسة الخصوصية',
      logOut:'تسجيل الخروج', startRating:'ابدأ التقييم →', balance:'الرصيد',
      welcomeBack:'مرحباً بعودتك', goodMorning:'صباح الخير', goodAfternoon:'مساء الخير',
      goodEvening:'مساء النور', brandsRated:'العلامات المقيّمة', totalEarned:'إجمالي الأرباح',
      welcomeBonus:'مكافأة الترحيب', todayRound:'جولة اليوم', searchBrands:'بحث...',
      readMore:'اقرأ المزيد →', foundedIn:'تأسست', ratedBy:'مقيّم من', peopleWorldwide:'شخص حول العالم',
      selectStars:'اختر النجوم للإرسال', submitRating:'إرسال', chat:'الدردشة المباشرة',
      inviteCode:'رمز الدعوة', deposit:'إيداع', withdraw:'سحب', history:'السجل',
      pendingDeposit:'إيداع معلق', pendingWithdrawal:'سحب معلق', accountBalance:'رصيد الحساب',
      saveChanges:'حفظ', cancel:'إلغاء', send:'إرسال', typeMessage:'اكتب رسالة...',
      customerCare:'خدمة العملاء', online:'متصل', offline:'غير متصل',
    }
  },
  pl: {
    name:'Polski', flag:'🇵🇱', dir:'ltr',
    t: {
      home:'Strona Główna', rateBrands:'Oceniaj Marki', wallet:'Portfel', signOut:'Wyloguj',
      myProfile:'Mój Profil', accountSettings:'Ustawienia Konta', language:'Język',
      notifications:'Powiadomienia', helpSupport:'Pomoc / Wsparcie', contactUs:'Skontaktuj się',
      aboutUs:'O Nas', termsOfService:'Warunki Usługi', privacyPolicy:'Polityka Prywatności',
      logOut:'Wyloguj się', startRating:'Zacznij Oceniać →', balance:'Saldo',
      welcomeBack:'Witaj z Powrotem', goodMorning:'Dzień dobry', goodAfternoon:'Dzień dobry',
      goodEvening:'Dobry wieczór', brandsRated:'Ocenione Marki', totalEarned:'Łączne Zarobki',
      welcomeBonus:'Bonus Powitalny', todayRound:'Dzisiejsza Runda', searchBrands:'Szukaj marek...',
      readMore:'Czytaj Więcej →', foundedIn:'Założona', ratedBy:'Ocenione przez', peopleWorldwide:'osób na świecie',
      selectStars:'Wybierz Gwiazdki', submitRating:'Prześlij', chat:'Czat na Żywo',
      inviteCode:'Kod Zaproszenia', deposit:'Wpłata', withdraw:'Wypłata', history:'Historia',
      pendingDeposit:'Oczekująca Wpłata', pendingWithdrawal:'Oczekująca Wypłata', accountBalance:'Saldo Konta',
      saveChanges:'Zapisz', cancel:'Anuluj', send:'Wyślij', typeMessage:'Napisz wiadomość...',
      customerCare:'Obsługa Klienta', online:'Online', offline:'Offline',
    }
  },
  pt: {
    name:'Português', flag:'🇵🇹', dir:'ltr',
    t: {
      home:'Início', rateBrands:'Avaliar Marcas', wallet:'Carteira', signOut:'Sair',
      myProfile:'Meu Perfil', accountSettings:'Configurações', language:'Idioma',
      notifications:'Notificações', helpSupport:'Ajuda / Suporte', contactUs:'Contate-nos',
      aboutUs:'Sobre Nós', termsOfService:'Termos de Serviço', privacyPolicy:'Política de Privacidade',
      logOut:'Sair', startRating:'Começar →', balance:'Saldo',
      welcomeBack:'Bem-vindo de Volta', goodMorning:'Bom dia', goodAfternoon:'Boa tarde',
      goodEvening:'Boa noite', brandsRated:'Marcas Avaliadas', totalEarned:'Total Ganho',
      welcomeBonus:'Bônus de Boas-Vindas', todayRound:'Rodada de Hoje', searchBrands:'Buscar marcas...',
      readMore:'Ler Mais →', foundedIn:'Fundada', ratedBy:'Avaliado por', peopleWorldwide:'pessoas no mundo',
      selectStars:'Selecionar Estrelas', submitRating:'Enviar', chat:'Chat ao Vivo',
      inviteCode:'Código de Convite', deposit:'Depositar', withdraw:'Retirar', history:'Histórico',
      pendingDeposit:'Depósito Pendente', pendingWithdrawal:'Retirada Pendente', accountBalance:'Saldo da Conta',
      saveChanges:'Salvar', cancel:'Cancelar', send:'Enviar', typeMessage:'Digite uma mensagem...',
      customerCare:'Atendimento ao Cliente', online:'Online', offline:'Offline',
    }
  }
};

// Get current language
function gbLang(){return localStorage.getItem('gb_lang')||'en'}
function gbT(key){return (GB_LANGUAGES[gbLang()]||GB_LANGUAGES.en).t[key]||key}
function gbDir(){return (GB_LANGUAGES[gbLang()]||GB_LANGUAGES.en).dir}

// Apply language to document
function gbApplyLang(){
  document.documentElement.lang=gbLang();
  document.documentElement.dir=gbDir();
  document.querySelectorAll('[data-t]').forEach(el=>{
    const key=el.getAttribute('data-t');
    const attr=el.getAttribute('data-t-attr');
    if(attr)el.setAttribute(attr,gbT(key));
    else el.textContent=gbT(key);
  });
}

// Set language
function gbSetLang(code){
  localStorage.setItem('gb_lang',code);
  gbApplyLang();
}

// ── AVATAR — Emoji based on country ──
const COUNTRY_FLAGS = {
  'Kenya':'🇰🇪','Tanzania':'🇹🇿','Uganda':'🇺🇬','Nigeria':'🇳🇬','Ghana':'🇬🇭',
  'South Africa':'🇿🇦','Ethiopia':'🇪🇹','Rwanda':'🇷🇼','Egypt':'🇪🇬','Morocco':'🇲🇦',
  'Cameroon':'🇨🇲','Ivory Coast':'🇨🇮','Senegal':'🇸🇳','Zambia':'🇿🇲','Zimbabwe':'🇿🇼',
  'United Kingdom':'🇬🇧','Germany':'🇩🇪','France':'🇫🇷','Spain':'🇪🇸','Italy':'🇮🇹',
  'Netherlands':'🇳🇱','Portugal':'🇵🇹','Poland':'🇵🇱','Sweden':'🇸🇪','Norway':'🇳🇴',
  'United States':'🇺🇸','Canada':'🇨🇦','Australia':'🇦🇺','New Zealand':'🇳🇿',
  'India':'🇮🇳','Philippines':'🇵🇭','Brazil':'🇧🇷','Mexico':'🇲🇽','Argentina':'🇦🇷',
  'Japan':'🇯🇵','China':'🇨🇳','South Korea':'🇰🇷','Singapore':'🇸🇬','Malaysia':'🇲🇾',
  'Saudi Arabia':'🇸🇦','UAE':'🇦🇪','Turkey':'🇹🇷','Pakistan':'🇵🇰','Bangladesh':'🇧🇩',
};
// Country code to name map
const CODE_TO_COUNTRY = {
  KE:'Kenya',TZ:'Tanzania',UG:'Uganda',NG:'Nigeria',GH:'Ghana',ZA:'South Africa',
  ET:'Ethiopia',RW:'Rwanda',EG:'Egypt',MA:'Morocco',CM:'Cameroon',CI:'Ivory Coast',
  SN:'Senegal',ZM:'Zambia',ZW:'Zimbabwe',GB:'United Kingdom',DE:'Germany',FR:'France',
  ES:'Spain',IT:'Italy',NL:'Netherlands',PT:'Portugal',PL:'Poland',SE:'Sweden',NO:'Norway',
  US:'United States',CA:'Canada',AU:'Australia',NZ:'New Zealand',IN:'India',PH:'Philippines',
  BR:'Brazil',MX:'Mexico',AR:'Argentina',JP:'Japan',CN:'China',KR:'South Korea',
  SG:'Singapore',MY:'Malaysia',SA:'Saudi Arabia',AE:'UAE',TR:'Turkey',PK:'Pakistan',BD:'Bangladesh',
};
const BG_COLORS=['#1C69D4','#CC0000','#1A8C2E','#8B0000','#005BAA','#C9A84C','#9B1C1C','#1E5AA8','#2D6A2D','#6B2D8B'];

function gbGenAvatar(name, seed, country){
  // Resolve country to flag emoji
  const countryName = country ? (CODE_TO_COUNTRY[country] || country) : null;
  const flag = countryName ? (COUNTRY_FLAGS[countryName] || null) : null;
  const initials = name ? name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2) : 'GB';
  const bgColor = BG_COLORS[(seed||0) % BG_COLORS.length];
  const display = flag || initials;
  const fontSize = flag ? 28 : (initials.length > 1 ? 20 : 26);
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="${bgColor}"/><text x="32" y="40" font-size="${fontSize}" text-anchor="middle" dominant-baseline="middle" font-family="Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,sans-serif">${display}</text></svg>`;
  return {color:bgColor, initials, flag, svg:`data:image/svg+xml,${encodeURIComponent(svgContent)}`};
}
function gbAvatarSvg(initials, color){
  return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="${color}"/><text x="32" y="38" font-family="Arial Black,sans-serif" font-weight="900" font-size="${initials.length>1?20:26}" fill="white" text-anchor="middle" dominant-baseline="middle">${initials}</text></svg>`)}`;
}

// ── THEME (shared across all pages) ──
function gbApplyTheme(){
  const t = localStorage.getItem('gb_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', t);
  const btn = document.getElementById('themeBtn');
  if(btn) btn.textContent = t==='dark' ? '🌙' : '☀️';
}
function gbToggleTheme(){
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('gb_theme', next);
  gbApplyTheme();
}
// Auto-apply theme and language on every page load
document.addEventListener('DOMContentLoaded', ()=>{
  gbApplyTheme();
  gbApplyLang();
});

// ── INVITE CODE ──
function gbGenInviteCode(){
  const chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code='GB-';
  for(let i=0;i<6;i++) code+=chars[Math.floor(Math.random()*chars.length)];
  return code;
}

// ── CHAT ──
function gbGetChat(email){
  return JSON.parse(localStorage.getItem('gb_chat_'+email)||'[]');
}
function gbSaveChat(email,messages){
  localStorage.setItem('gb_chat_'+email,JSON.stringify(messages));
}
function gbSendMessage(email,text,sender){
  const msgs=gbGetChat(email);
  msgs.push({sender,text,time:new Date().toISOString(),read:sender==='care'});
  gbSaveChat(email,msgs);
  return msgs;
}
function gbGetAllChats(){
  const users=JSON.parse(localStorage.getItem('gb_users')||'[]');
  return users.map(u=>({
    email:u.email,name:u.name,avatar:u.avatar,
    messages:gbGetChat(u.email),
    unread:gbGetChat(u.email).filter(m=>m.sender==='user'&&!m.read).length
  })).filter(c=>c.messages.length>0);
}

// ── CURRENCY FORMAT ──
function gbFmt(n,user){
  const sym=user.symbol||'KES';
  const abs=Math.abs(n||0).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2});
  return (n<0?'-':'')+sym+' '+abs;
}
