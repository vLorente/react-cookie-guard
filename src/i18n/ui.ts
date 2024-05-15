export const languages = {
  en: 'English',
  fr: 'Français',
};

export const defaultLang = 'en';

const supportedLanguages = ["en", "es"] as const;
export type SupportedLanguages = typeof supportedLanguages[number];

interface I18nKeys {
 mainText: string,
 accept: string,
 reject: string,
 learnMore: string,
 configCookies: string,
}

export const ui: Record<SupportedLanguages, I18nKeys> = {
  en: {
		mainText: "We use cookies to ensure you get the best experience on our website.",
		accept: "Accept",
		reject: "Reject",
		learnMore: "Learn More",
		configCookies: "Manage cookies"
  },
	es: {
		mainText: "Usamos cookies para garantizar que obtengas la mejor experiencia en nuestro sitio web.",
		accept: "Aceptar",
		reject: "Rechazar",
		learnMore: "Saber Más",
		configCookies: "Configurar cookies"
	}
} as const;
