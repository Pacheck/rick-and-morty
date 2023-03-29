import React, { ReactNode } from "react";
import Link from 'next/link';

type LayoutProps = { children: ReactNode };

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <main className="flex flex-col">
            <nav className="py-4 px-6">
                <ul className="flex gap-8">
                    <Link href='/' className="text-primary hover:text-secondary transition-colors cursor-pointer">Lista</Link>
                </ul>
            </nav>
            {children}
        </main>
    )
};

export default Layout;