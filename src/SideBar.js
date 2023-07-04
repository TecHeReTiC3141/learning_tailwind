import React from 'react';

function SideBarIcon({icon, tooltip='tooltip'}) {
    return (
        <div>
            <div className="sidebar-icon group">
                {icon}
                <div className="sidebar-tooltip group-hover:scale-100">
                    {tooltip}
                </div>
            </div>


        </div>

    )
}

export default function SideBar() {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col
                        bg-gray-100 text-gray-900 shadow
                        dark: bg-gray-900 dark:text-white">
            <SideBarIcon icon="A" />
            <SideBarIcon icon="B" />
            <SideBarIcon icon="C" />
            <SideBarIcon icon="D" />
            <SideBarIcon icon="E" />
        </div>
    );
}

