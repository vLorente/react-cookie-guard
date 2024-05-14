export const languages = {
  en: 'English',
  fr: 'Français',
};

export const defaultLang = 'en';

const supportedLanguages = ["en", "es"] as const;
export type SupportedLanguages = typeof supportedLanguages[number];

interface I18nKeys {
 mainText: string,
 learnMore: string,
 accept: string,
 reject: string,
 moreOptions: string,
}

export const ui: Record<SupportedLanguages, I18nKeys> = {
  en: {
		mainText: "We use cookies to ensure you get the best experience on our website.",
		learnMore: "Learn More",
		accept: "Accept",
		reject: "Reject",
		moreOptions: "More Options"
  },
	es: {
		mainText: "Usamos cookies para garantizar que obtengas la mejor experiencia en nuestro sitio web.",
		learnMore: "Saber Más",
		accept: "Aceptar",
		reject: "Rechazar",
		moreOptions: "Más Opciones"
	}
} as const;
