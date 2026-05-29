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

// ── AVATAR ──
const GB_AVATAR_COLORS=[
  '#C9A84C','#E05252','#5271E0','#52C972','#9B52E0',
  '#E08252','#52C9C9','#E052C9','#7EC952','#5290E0'
];
function gbGenAvatar(name,seed){
  const idx=seed%GB_AVATAR_COLORS.length;
  const color=GB_AVATAR_COLORS[idx];
  const initials=name?name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2):'GB';
  return {color,initials,svg:gbAvatarSvg(initials,color)};
}
function gbAvatarSvg(initials,color){
  return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="${color}"/><text x="32" y="38" font-family="Arial Black,sans-serif" font-weight="900" font-size="${initials.length>1?20:26}" fill="white" text-anchor="middle" dominant-baseline="middle">${initials}</text></svg>`)}`;
}

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
