// src\components\SocialIcons.tsx
import React from 'react';

const socialLinks = [
    {
        id: "github",
        icon: "fa-brands fa-github",
        url: "https://github.com/Irehan"
    },
    {
        id: "linkedin",
        icon: "fa-brands fa-linkedin-in",
        url: "https://www.linkedin.com/in/ali-rehan-haider/"
    },
    {
        id: "codepen",
        icon: "fa-brands fa-codepen",
        url: "https://codepen.io/Irehan"
    },
    {
        id: "instagram",
        icon: "fa-brands fa-instagram",
        url: "https://www.instagram.com/ali_rehan_haider/"
    },
];

const SocialIcons: React.FC = () => {
    return (
        <div className="flex space-x-5 justify-center items-center mt-8">
            {socialLinks.map(link => (
                <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8892b0] hover:text-[#64ffda] transition-transform transform hover:scale-110"
                    aria-label={`Visit my ${link.id} profile`}
                >
                    <i className={`${link.icon} text-2xl`}></i>
                </a>
            ))}
        </div>
    );
};

export default SocialIcons;