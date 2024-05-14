import React, { useState } from "react"
import { CookieGuardBannerProps } from "../../types"
import classes from "./CookieGuardBanner.module.css"

const CookieGuardBanner = (props: CookieGuardBannerProps) => {
	const [accepted, setAccepted] = useState(false)

	// Función para manejar la aceptación de cookies
	const handleAcceptCookies = () => {
		// Aquí podrías implementar la lógica para guardar la aceptación de cookies (por ejemplo, mediante localStorage)
		setAccepted(true)
	}

	// Función para manejar el rechazo de cookies
	const handleRejectCookies = () => {
		// Aquí podrías implementar la lógica para rechazar las cookies
		// Por ejemplo, puedes mostrar un mensaje indicando que algunas características del sitio no estarán disponibles sin cookies
		alert(
			"Algunas características del sitio pueden no estar disponibles sin cookies."
		)
	}

	// Si el usuario ya ha aceptado las cookies, no mostramos el banner
	if (accepted) {
		return null
	}

	return (
		<div className="cookie-guard-banner">
			<p>We use cookies to ensure you get the best experience on our website.</p>
			<div className="cookie-buttons">
				<button onClick={handleAcceptCookies} className="accept-cookies">
					Accept
				</button>
				<button onClick={handleRejectCookies} className="reject-cookies">
					Reject
				</button>
			</div>
		</div>
	)
}

export default CookieGuardBanner
