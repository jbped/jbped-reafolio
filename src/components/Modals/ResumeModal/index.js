import React from 'react';
import '../modal.scss';

export default function ResumeModal({ onClose }) {

    return (
        <div className="modalBackdrop">
            <div className="modalContainer p-4">
                <div className="modalHeader transparent mb-3">
                    <h2 className="modalTitle primary-title me-3 mb-0 text-uppercase">Jake Pedigo's Resume</h2>
                    <button type="button" className="close-btn transparent" onClick={onClose}><i className="bi bi-x close-btn-ico transparent"></i></button>
                </div>
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vSgOsOvvGSN2vD1f6FGggfM_BBIYet2s0RNIxyNg3CeKilHYc8TdwuNFgQ/pub?embedded=true" title="Jake Pedigo's Resume" style={{width: "100%", height: "80vh"}}></iframe>
            </div>
        </div>

    );
};