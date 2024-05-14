import React, { useState } from "react"
import classes from "./CookieGuardBanner.css"
import { CookieGuardBannerProps } from "../../types"
import { useTranslations } from "../../i18n/utils"
import { COOKIES_STATE } from "../../constants"

const CookieGuardBanner = (props: CookieGuardBannerProps) => {
	const { 
		lang = "es",
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
		// TODO
		alert(
			"Algunas características del sitio pueden no estar disponibles sin cookies."
		)
		handleReject()
	}

	// If have current value of consent state in localStorage dont show banner
	if (value) {
		return null
	}

	return (
		<div id="cookiePanel" className="cookie-panel">
			<div className="panel-content">
				<p>{t("mainText")}</p>
				<div className="cookie-buttons">
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
