import React from "react";
type NavLink = {
  label: string;
  href: string;
};
interface LayoutProps {
  children: React.ReactNode;
  navLinks: NavLink[];
  logo: React.ReactNode;
}
export default function Layout({ children, navLinks, logo }: LayoutProps) {
  return <main>{children}</main>;
}
