import React from 'react';
import { NavItem, Program, ValueItem, ContactInfo } from './types';
import { 
  Scale, 
  Users, 
  BookOpen, 
  Landmark, 
  MapPin, 
  Phone, 
  Mail, 
  HeartHandshake
} from 'lucide-react';

export const APP_NAME = "Friends for Justice";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Impact', href: '/impact' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Contact', href: '/contact' },
];

export const PROGRAMS: Program[] = [
  {
    title: "Access to Justice",
    description: "Supporting community members to understand and access justice through legal awareness, referrals, and community-based justice initiatives.",
    icon: <Scale className="w-8 h-8 text-teal-600" />
  },
  {
    title: "Human Rights Awareness",
    description: "Conducting human rights education forums to empower individuals with knowledge of their constitutional rights and responsibilities.",
    icon: <BookOpen className="w-8 h-8 text-teal-600" />
  },
  {
    title: "Community Legal Empowerment",
    description: "Working with community paralegals and local leaders to strengthen grassroots responses to injustice and resolve disputes amicably.",
    icon: <Users className="w-8 h-8 text-teal-600" />
  },
  {
    title: "Civic Education & Governance",
    description: "Promoting citizen participation, transparency, and accountability in governance processes at both community and county levels.",
    icon: <Landmark className="w-8 h-8 text-teal-600" />
  }
];

export const VALUES: ValueItem[] = [
  { title: "Justice", description: "Ensuring fair treatment for all." },
  { title: "Integrity", description: "Operating with honesty and transparency." },
  { title: "Community Participation", description: "Involving the people we serve in decision making." },
  { title: "Accountability", description: "Being responsible for our actions and resources." },
  { title: "Respect for Human Rights", description: "Upholding the dignity of every individual." },
];

export const CONTACT_INFO: ContactInfo[] = [
  {
    label: "Office Location",
    value: "Kilifi County, Kenya",
    icon: <MapPin className="w-5 h-5 text-teal-100" />
  },
  {
    label: "Email",
    value: "info@friendsforjustice.org",
    href: "mailto:info@friendsforjustice.org",
    icon: <Mail className="w-5 h-5 text-teal-100" />
  },
  {
    label: "Phone",
    value: "+254 700 000 000",
    href: "tel:+254700000000",
    icon: <Phone className="w-5 h-5 text-teal-100" />
  }
];