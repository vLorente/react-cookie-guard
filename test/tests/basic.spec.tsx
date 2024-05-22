import { describe, it, expect, vi, afterEach, beforeEach} from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { CookieGuardBanner } from 'react-cookie-guard'

const policyRef = "policy"
const learnMoreRef = "terms"
const COOKIES_STATE = "cookies_consent_state"

describe("Basic functionality tests", () => {
    const handleRejectMock = vi.fn()
    const handleAcceptMock = vi.fn()

    beforeEach(() => {
        localStorage.clear()
        document.body.innerHTML = ""
    })

    afterEach(() => {
        vi.restoreAllMocks()
        cleanup()
    })

    it("Should render cookies manage banner", () => {
        render(<CookieGuardBanner />)
        const buttons = screen.getAllByRole("button")
        expect(buttons).toHaveLength(2)
        const text = screen.getByRole("paragraph")
        expect(text).toBeInTheDocument()
    })

    it("Should be render LearnMore anchor when pass learnMore prop", () => {
        render(<CookieGuardBanner learnMore={learnMoreRef}/>)

        const link = screen.getByText("Learn More")
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', learnMoreRef)
    })

    it("Should be render Manage cookies anchor when pass configCookies prop", () => {
        render(<CookieGuardBanner configCookies={policyRef}/>)

        const link = screen.getByText("Manage cookies")
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', policyRef)
    })

    it("Should not render Learn More anchor when learnMore prop is not passed", () => {
        render(<CookieGuardBanner />)

        const learnMoreLink = screen.queryByText("Learn More")
        expect(learnMoreLink).not.toBeInTheDocument()
    })

    it("Should not render Manage cookies anchor when configCookies prop is not passed", () => {
        render(<CookieGuardBanner />)

        const learnMoreLink = screen.queryByText("Manage cookies")
        expect(learnMoreLink).not.toBeInTheDocument()
    })

    it("Should be in english by default", () => {
        render(<CookieGuardBanner />)
        const acceptButton = screen.getByText("Accept")
        const rejectButton = screen.getByText("Reject")
        const mainText = screen.getByText("We use cookies to ensure you get the best experience on our website.")

        expect(acceptButton).toBeInTheDocument()
        expect(rejectButton).toBeInTheDocument()
        expect(mainText).toBeInTheDocument()
    })

    it("Should be charge spanish language when lang = es", () => {
        render(<CookieGuardBanner  lang="es"/>)
        const acceptButton = screen.getByText("Aceptar")
        const rejectButton = screen.getByText("Rechazar")
        const mainText = screen.getByText("Usamos cookies para garantizar que obtengas la mejor experiencia en nuestro sitio web.")

        expect(acceptButton).toBeInTheDocument()
        expect(rejectButton).toBeInTheDocument()
        expect(mainText).toBeInTheDocument()
    })

    it("Should charge english language when lang = en", () => {
        render(<CookieGuardBanner  lang="en"/>)
        const acceptButton = screen.getByText("Accept")
        const rejectButton = screen.getByText("Reject")
        const mainText = screen.getByText("We use cookies to ensure you get the best experience on our website.")

        expect(acceptButton).toBeInTheDocument()
        expect(rejectButton).toBeInTheDocument()
        expect(mainText).toBeInTheDocument()
    })

    it("Should call the handleAccept function.", async () => {
        render(<CookieGuardBanner handleAccept={handleAcceptMock}/>)
        const acceptButton = screen.getByText("Accept")

        if (acceptButton) {
            fireEvent.click(acceptButton)
            expect(handleAcceptMock).toHaveBeenCalledTimes(1)
        } else {
            throw new Error("The 'Accept' button was not found.")
        }
    })
    
    it("Should call the handleReject function.", async () => {
        render(<CookieGuardBanner handleReject={handleRejectMock}/>)
        const rejectButton = screen.getByText("Reject")

        if (rejectButton) {
            fireEvent.click(rejectButton)
            expect(handleRejectMock).toHaveBeenCalledTimes(1)
        } else {
            throw new Error("The 'Reject' button was not found.")
        }
    })

    it("Should update the localStorage when cookies are accept", () => {
        render(<CookieGuardBanner handleAccept={handleAcceptMock}/>)
        const acceptButton = screen.getByText("Accept")

        fireEvent.click(acceptButton)
        
        expect(handleAcceptMock).toHaveBeenCalledTimes(1)
        expect(localStorage.getItem(COOKIES_STATE)).toBe("1")
    })

    it("Should update localStorage when cookies are rejected", () => {
        render(<CookieGuardBanner handleReject={handleRejectMock}/>)
        const rejectButton = screen.getByText("Reject")

        fireEvent.click(rejectButton)
        
        expect(handleRejectMock).toHaveBeenCalledTimes(1)
        expect(localStorage.getItem(COOKIES_STATE)).toBe("0")
    })
})