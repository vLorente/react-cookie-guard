import type { SupportedLanguages } from "./i18n/ui";

export interface CookieGuardBannerProps {
	learnMore: boolean,
	moreOptions: boolean,
	learnMorePage?: string,
	lang?: SupportedLanguages
}
