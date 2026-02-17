
import Image from "next/image";

const WhatsAppButton = () => (
    <a
        href="https://wa.me/919958800961"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
        style={{ background: 'var(--color-primary-500)', color: 'white' }}
        aria-label="Chat on WhatsApp"
    >
       <Image src="/whatsapp.png" alt="WhatsApp" width={50} height={50} />
    </a>
);

export default WhatsAppButton;
