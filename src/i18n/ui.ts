export const languages = {
  en: 'English',
  fr: 'Français',
};

export const defaultLang = 'en';

enum I18nKey {
	mainText = 'mainText',
	learnMore = 'learnMore',
	accept = 'accept',
	reject = 'reject'
}

const supportedLanguages = ["en", "es"] as const;
type SupportedLanguages = typeof supportedLanguages[number];

interface I18nKeys {
 mainText: string,
 learnMore: string,
 accept: string,
 reject: string
}

export const ui: Record<SupportedLanguages, I18nKeys> = {
  en: {
		mainText: "We use cookies to ensure you get the best experience on our website.",
		learnMore: "Learn More",
		accept: "Accept",
		reject: "Reject"
  },
	es: {
		mainText: "Usamos cookies para garantizar que obtengas la mejor experiencia en nuestro sitio web.",
		learnMore: "Saber Más",
		accept: "Aceptar",
		reject: "Rechazar"
	}
} as const;
