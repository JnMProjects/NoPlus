"use client"

import React, { useEffect, useState } from 'react';
import { cn } from './twm';

const ThemeProvider: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme');
            let calculatedTheme = storedTheme ? (storedTheme as 'light' | 'dark') : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            localStorage.setItem('theme', calculatedTheme);
            return calculatedTheme;
        } else {
            return 'dark';
        }
    });

    useEffect(() => {
        function handleStorageChange() {
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme) {
                setTheme(storedTheme as 'light' | 'dark');
            }
        }

        window.addEventListener('storage', handleStorageChange);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <></>
    );
};

export default ThemeProvider;

export function toggleTheme() {
    const storedTheme = localStorage.getItem('theme');
    const newTheme = storedTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
}

const ThemeToggleCircle = React.forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement>>(({ className, ...props }, ref) => (
    <button
        ref={ref}
        className={cn("w-6 h-6 rounded-full bg-l-acc dark:bg-d-acc", className)}
        onClick={() => toggleTheme()}
        {...props}
    />
));
ThemeToggleCircle.displayName = "ThemeToggleCircle";

export { ThemeToggleCircle }