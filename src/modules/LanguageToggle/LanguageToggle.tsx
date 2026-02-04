import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import "./LanguageToggle.scss";

const languages = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = i18n.language.startsWith("ru") ? "ru" : "en";
  const currentLabel = languages.find((l) => l.code === currentLang)?.label || "EN";

  const handleSelect = (code: string) => {
    const hash = location.hash;
    const targetPath = code === "ru" ? "/ru" : "/";
    navigate(targetPath + hash);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="LanguageToggle" ref={dropdownRef}>
      <button
        className="LanguageToggle__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {currentLabel}
        <span className={`LanguageToggle__arrow ${isOpen ? "open" : ""}`} />
      </button>
      {isOpen && (
        <div className="LanguageToggle__menu" role="listbox">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className={`LanguageToggle__item ${lang.code === currentLang ? "active" : ""}`}
              onClick={() => handleSelect(lang.code)}
              role="option"
              aria-selected={lang.code === currentLang}
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
