interface Translations {
  [key: string]: {
    [languageCode: string]: string;
  };
}

const translations: Translations = {
  // App Branding
  appName: {
    en: 'MSEFC',
    kn: 'ಎಂಎಸ್‌ಇಎಫ್‌ಸಿ',
    hi: 'एमएसईएफसी',
    ta: 'எம்எஸ்இஎஃப்சி',
    te: 'ఎంఎస్‌ఈఎఫ్‌సీ'
  },
  appSubtitle: {
    en: 'Karnataka Electricity Analytics',
    kn: 'ಕರ್ನಾಟಕ ವಿದ್ಯುತ್ ವಿಶ್ಲೇಷಣೆ',
    hi: 'कर्नाटक विद्युत विश्लेषण',
    ta: 'கர்நாடக மின்சார பகுப்பாய்வு',
    te: 'కర్ణాటక విద్యుత్ విశ్లేషణ'
  },
  
  // Navigation
  dashboard: {
    en: 'Dashboard',
    kn: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    hi: 'डैशबोर्ड',
    ta: 'டாஷ்போர்டு',
    te: 'డాష్‌బోర్డ్'
  },
  nearestOffice: {
    en: 'Nearest Office',
    kn: 'ಹತ್ತಿರದ ಕಚೇರಿ',
    hi: 'निकटतम कार्यालय',
    ta: 'அருகிலுள்ள அலுவலகம்',
    te: 'సమీప కార్యాలయం'
  },
  complaintTracker: {
    en: 'Complaint Tracker',
    kn: 'ದೂರು ಟ್ರ್ಯಾಕರ್',
    hi: 'शिकायत ट्रैकर',
    ta: 'புகார் கண்காணிப்பு',
    te: 'ఫిర్యాదు ట్రాకర్'
  },
  viewBill: {
    en: 'View Bill',
    kn: 'ಬಿಲ್ ನೋಡಿ',
    hi: 'बिल देखें',
    ta: 'பில் பார்க்க',
    te: 'బిల్లు చూడండి'
  },
  payBill: {
    en: 'Pay Bill',
    kn: 'ಬಿಲ್ ಪಾವತಿ',
    hi: 'बिल भुगतान',
    ta: 'பில் செலுத்த',
    te: 'బిల్లు చెల్లించండి'
  },
  meterReading: {
    en: 'Meter Reading',
    kn: 'ಮೀಟರ್ ರೀಡಿಂಗ್',
    hi: 'मीटर रीडिंग',
    ta: 'மீட்டர் வாசிப்பு',
    te: 'మీటర్ రీడింగ్'
  },
  documentVault: {
    en: 'Document Vault',
    kn: 'ದಾಖಲೆ ಭಂಡಾರ',
    hi: 'दस्तावेज़ तिजोरी',
    ta: 'ஆவண பெட்டகம்',
    te: 'పత్రాల ఖజానా'
  },
  solarPumpStatus: {
    en: 'Solar Pump Status',
    kn: 'ಸೌರ ಪಂಪ್ ಸ್ಥಿತಿ',
    hi: 'सोलर पंप स्थिति',
    ta: 'சூரிய பம்ப் நிலை',
    te: 'సోలార్ పంప్ స్థితి'
  },
  usefulLinks: {
    en: 'Useful Links',
    kn: 'ಉಪಯುಕ್ತ ಲಿಂಕ್‌ಗಳು',
    hi: 'उपयोगी लिंक',
    ta: 'பயனுள்ள இணைப்புகள்',
    te: 'ఉపయోగకరమైన లింకులు'
  },
  aboutUs: {
    en: 'About Us',
    kn: 'ನಮ್ಮ ಬಗ್ಗೆ',
    hi: 'हमारे बारे में',
    ta: 'எங்களைப் பற்றி',
    te: 'మా గురించి'
  },
  settings: {
    en: 'Settings',
    kn: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
    hi: 'सेटिंग्स',
    ta: 'அமைப்புகள்',
    te: 'సెట్టింగులు'
  },
  logout: {
    en: 'Logout',
    kn: 'ಲಾಗ್‌ಔಟ್',
    hi: 'लॉगआउट',
    ta: 'வெளியேறு',
    te: 'లాగ్అవుట్'
  },

  // Common Terms
  welcome: {
    en: 'Welcome',
    kn: 'ಸ್ವಾಗತ',
    hi: 'स्वागत',
    ta: 'வரவேற்கிறோம்',
    te: 'స్వాగతం'
  },
  currentBill: {
    en: 'Current Bill',
    kn: 'ಪ್ರಸ್ತುತ ಬಿಲ್',
    hi: 'वर्तमान बिल',
    ta: 'தற்போதைய பில்',
    te: 'ప్రస్తుత బిల్లు'
  },
  unitsConsumed: {
    en: 'Units Consumed',
    kn: 'ಬಳಸಿದ ಯೂನಿಟ್‌ಗಳು',
    hi: 'उपयोग की गई इकाइयाँ',
    ta: 'பயன்படுத்திய அலகுகள்',
    te: 'వినియోగించిన యూనిట్లు'
  },
  powerTheftAlerts: {
    en: 'Power Theft Alerts',
    kn: 'ವಿದ್ಯುತ್ ಕಳ್ಳತನ ಎಚ್ಚರಿಕೆಗಳು',
    hi: 'बिजली चोरी अलर्ट',
    ta: 'மின்சார திருட்டு எச்சரிக்கைகள்',
    te: 'విద్యుత్ దొంగతనం హెచ్చరికలు'
  },
  resolutionRate: {
    en: 'Resolution Rate',
    kn: 'ಪರಿಹಾರ ದರ',
    hi: 'समाधान दर',
    ta: 'தீர்வு விகிதம்',
    te: 'పరిష్కార రేటు'
  },
  revenueRecovered: {
    en: 'Revenue Recovered',
    kn: 'ಆದಾಯ ಮರುಪಡೆಯಲಾಗಿದೆ',
    hi: 'राजस्व वसूल',
    ta: 'வருவாய் மீட்டெடுப்பு',
    te: 'రాబడి వసూలు'
  },
  realTimeData: {
    en: 'Real-time Data',
    kn: 'ನೈಜ-ಸಮಯ ಡೇಟಾ',
    hi: 'रियल-टाइम डेटा',
    ta: 'நிகழ்நேர தரவு',
    te: 'రియల్-టైమ్ డేటా'
  },
  export: {
    en: 'Export',
    kn: 'ರಫ್ತು',
    hi: 'निर्यात',
    ta: 'ஏற்றுமதி',
    te: 'ఎగుమతి'
  },
  forecast: {
    en: 'Forecast',
    kn: 'ಮುನ್ಸೂಚನೆ',
    hi: 'पूर्वानुमान',
    ta: 'முன்னறிவிப்பு',
    te: 'అంచనా'
  },
  training: {
    en: 'Training',
    kn: 'ತರಬೇತಿ',
    hi: 'प्रशिक्षण',
    ta: 'பயிற்சி',
    te: 'శిక్షణ'
  },
  modules: {
    en: 'Modules',
    kn: 'ಮಾಡ್ಯೂಲ್‌ಗಳು',
    hi: 'मॉड्यूल',
    ta: 'தொகுதிகள்',
    te: 'మాడ్యూల్స్'
  },
  completed: {
    en: 'Completed',
    kn: 'ಪೂರ್ಣಗೊಂಡಿದೆ',
    hi: 'पूर्ण',
    ta: 'முடிந்தது',
    te: 'పూర్తయింది'
  },
  progress: {
    en: 'Progress',
    kn: 'ಪ್ರಗತಿ',
    hi: 'प्रगति',
    ta: 'முன்னேற்றம்',
    te: 'పురోగతి'
  },
  save: {
    en: 'Save',
    kn: 'ಉಳಿಸಿ',
    hi: 'सेव',
    ta: 'சேமி',
    te: 'సేవ్'
  },
  startTraining: {
    en: 'Start Training',
    kn: 'ತರಬೇತಿ ಪ್ರಾರಂಭಿಸಿ',
    hi: 'प्रशिक्षण शुरू करें',
    ta: 'பயிற்சி தொடங்கு',
    te: 'శిక్షణ ప్రారంభించండి'
  },
  typeMessage: {
    en: 'Type your message...',
    kn: 'ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ...',
    hi: 'अपना संदेश टाइप करें...',
    ta: 'உங்கள் செய்தியை தட்டச்சு செய்யுங்கள்...',
    te: 'మీ సందేశాన్ని టైప్ చేయండి...'
  }
};

export const getTranslation = (key: string, language: string): string => {
  return translations[key]?.[language] || translations[key]?.['en'] || key;
};