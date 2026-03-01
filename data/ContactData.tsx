import type { LucideIcon } from "lucide-react"
import { Mail, MapPin, Phone, Linkedin } from "lucide-react"

export interface ContactItem {
  icon: LucideIcon
  label: string
  value: string
  href?: string | null
}

export const ContactData: ContactItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: "clementine.budon@gmail.com",
    href: "mailto:clementine.budon@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+33 6 41 16 89 43",
    href: "tel:+33641168943",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Montpellier, France",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Clémentine Budon",
    href: "https://fr.linkedin.com/in/cl%C3%A9mentine-budon",
  },
]