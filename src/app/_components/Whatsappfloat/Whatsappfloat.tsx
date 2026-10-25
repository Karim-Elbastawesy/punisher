import { getWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "../icons/icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with PUNISHER on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-black/90 px-0 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white opacity-0 shadow-lg shadow-black/40 transition-all duration-300 group-hover:max-w-[220px] group-hover:px-5 group-hover:opacity-100 sm:block">
        Chat with us on WhatsApp
      </span>

      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-black shadow-lg shadow-black/50 transition-transform duration-300 group-hover:scale-105">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50" />
        <WhatsAppIcon className="relative h-7 w-7 text-white" />
      </span>
    </a>
  );
}