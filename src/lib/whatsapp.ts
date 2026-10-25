export const WHATSAPP_NUMBER = "201001234567";

export function getWhatsAppLink(message?: string) {
  const defaultMessage = "Hi PUNISHER, I'm interested in joining the gym.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message ?? defaultMessage
  )}`;
}