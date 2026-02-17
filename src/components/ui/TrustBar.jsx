import React from 'react'

export default function TrustBar() {
    return (
        <div className="bg-[var(--color-bg)]">
            <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-0">
                <div className="text-sm text-[var(--color-text-medium)]">Trusted by <strong className="text-[var(--color-text-dark)]">5000+</strong> Patients</div>
                <div className="flex items-center gap-6 text-sm text-[var(--color-text-medium)]">
                    <div className="flex items-center gap-2">🏥 <span>Top Hospitals</span></div>
                    <div className="flex items-center gap-2">🤖 <span>AI Powered Matching</span></div>
                </div>
                <div className="text-sm text-[var(--color-text-medium)]">24/7 Multilingual Support</div>
            </div>
        </div>
    )
}
