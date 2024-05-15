import type { SupportedLanguages } from "./i18n/ui";

export interface CookieGuardBannerProps {
	lang?: SupportedLanguages,
	configCookies?: string,
	learnMore?: string,
	handleAccept?: () => void,
	handleReject?: () => void
}
