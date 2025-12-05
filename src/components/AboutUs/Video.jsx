export default function Video() {
    return (
        <>
            {/* Mobile layout (keeps previous implementation) */}
            <section className="md:hidden relative w-full max-w-[414px] h-[477px] mx-auto bg-white">
                <div
                    className="absolute"
                    style={{
                        width: '307px',
                        height: '316px',
                        left: 'calc(50% - 307px/2 + 0.5px)',
                        top: '81px',
                    }}
                >
                    <div className="relative w-full h-full bg-white rounded-[20px] overflow-hidden">
                        <div
                            className="absolute inset-0 bg-center bg-cover"
                            style={{ backgroundImage: "url('/images/video-thumb.svg')" }}
                        />

                        <div
                            className="absolute inset-0"
                            style={{
                                background: 'linear-gradient(180deg, rgba(0,0,0,0) 14.58%, rgba(56,56,56,0.84) 100%)',
                            }}
                        />

                        <button
                            aria-label="Play video"
                            className="absolute flex items-center justify-center"
                            style={{
                                width: '56.95px',
                                height: '56.95px',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                background: '#23A6F0',
                                borderRadius: '45.2613px',
                                border: 'none',
                                padding: '0',
                            }}
                        >
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                <path d="M1 1.5L10 7L1 12.5V1.5Z" fill="#FFFFFF" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Desktop layout */}
            <section className="hidden md:block w-full h-[764px] bg-white">
                <div className="relative mx-auto" style={{ width: '1050px', height: '764px' }}>
                    <div
                        className="absolute bg-white rounded-[20px] overflow-hidden"
                        style={{ width: '989px', height: '540px', left: '31px', top: '112px' }}
                    >
                        <div
                            className="absolute inset-0 bg-center bg-cover"
                            style={{ backgroundImage: "url('/images/video-thumb.svg')" }}
                        />

                        <div
                            className="absolute inset-0"
                            style={{
                                background: 'linear-gradient(180deg, rgba(0,0,0,0) 14.58%, rgba(56,56,56,0.84) 100%)',
                            }}
                        />

                        <button
                            aria-label="Play video"
                            className="absolute flex items-center justify-center"
                            style={{
                                width: '92.6px',
                                height: '92.6px',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                background: '#23A6F0',
                                borderRadius: '73.6px',
                                border: 'none',
                                padding: '0',
                            }}
                        >
                            <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                <path d="M2 1.5L17 11.5L2 21.5V1.5Z" fill="#FFFFFF" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}