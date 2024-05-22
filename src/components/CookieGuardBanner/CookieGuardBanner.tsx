import React, { useState } from "react"
import classes from "./CookieGuardBanner.css"
import { CookieGuardBannerProps } from "../../types"
import { useTranslations } from "../../i18n/utils"
import { COOKIES_STATE } from "../../constants"
import { currentPage } from "../../utils/url-utils"

const CookieGuardBanner = (props: CookieGuardBannerProps) => {
	const { 
		lang = "en",
		configCookies,
		learnMore,
		handleAccept = () => {},
		handleReject = () => {}
	} = props
	const t = useTranslations(lang)

	// Initialization
	const value = window.localStorage.getItem(COOKIES_STATE)
	const [accepted, setAccepted] = useState(() => {
		if (value && value === "1") return true
		return false
	})

	const handleAcceptCookies = () => {
		localStorage.setItem(COOKIES_STATE, "1")
		setAccepted(true)
		handleAccept()
	}
	
	const handleRejectCookies = () => {
		localStorage.setItem(COOKIES_STATE, "0")
		setAccepted(false)
		handleReject()
	}

	// If have current value of consent state in localStorage dont show banner
	// or, page is configCookies or learnMore
	const currentPageUrl = currentPage()
	if (value || currentPageUrl === configCookies || currentPageUrl === learnMore) {
		return null
	}

	return (
		<div id="cookiePanel" className="cookie-panel">
			<div className="panel-content">
				<p>{t("mainText")} { learnMore && <a href={learnMore} className="link">{t("learnMore")}</a> }</p>
				<div className="cookie-buttons">
					{ configCookies && <a className="link" href={configCookies}>{t("configCookies")}</a> }
					<button
						id="rejectCookies"
						onClick={handleRejectCookies}
						className="reject-cookies"
					>
						{t("reject")}
					</button>
					<button
						id="acceptCookies"
						onClick={handleAcceptCookies}
						className="accept-cookies"
					>
						{t("accept")}
					</button>
				</div>
			</div>
		</div>
	)
}

export default CookieGuardBanner
