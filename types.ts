import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Program {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface ContactInfo {
  label: string;
  value: string;
  href?: string;
  icon: ReactNode;
}