import React from 'react'
import { GraduationCap, NotebookText, Users } from "lucide-react"
import { NavLink } from 'react-router'

const Sidebar = () => {
    const navItems = [
        { label: "Students", path: "/students", icon: Users },
        { label: "Grades", path: "/grades", icon: NotebookText },
    ];

    return (
        <aside className="fixed inset-y-0 left-0 z-30 flex w-50 flex-col bg-[#192338]">
            {/* Logo */}
            <div className="flex h-16 items-center gap-2.5 border-b border-[#31487A]/30 px-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#31487A]">
                    <GraduationCap className="h-4.5 w-4.5 text-white" />
                </div>
                <span className="text-base font-semibold tracking-wide text-white"> SDMS</span>
            </div>
            {/* Navigation */}
            <nav className="flex-1 px-3 py-4">
                <ul className="flex flex-col gap-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                `block w-full px-3 py-2 rounded-md text-sm transition-colors ${
                                    isActive
                                    ? "bg-[#31487A] text-white"
                                    : "text-white/70 hover:text-white hover:bg-[#31487A]/10"
                                }`
                                }
                            >
                                <Icon className="inline-block h-4 w-4 mr-2" />
                                {item.label}
                            </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            {/* Footer */}
            <div className="border-t border-[#31487A]/30 px-5 py-4">
                <p className="text-xs text-[#8FB3E2]/50">
                Student Data Management
                </p>
            </div>
        </aside>
    )
}

export default Sidebar