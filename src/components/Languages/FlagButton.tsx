import React from "react";

interface FlagButtonProps {
  lang: { image: string; letterCode: string; languageFull: string };
  handleChangeLanguage: (letterCode: string) => void;
  toggleNav: () => void;
}

export const FlagButton: React.FC<FlagButtonProps> = props => {
  const {
    lang: { image, letterCode, languageFull },
    handleChangeLanguage,
    toggleNav
  } = props;

  return (
    <div
      className="langFlag"
      onClick={() => {
        handleChangeLanguage(letterCode);
        toggleNav();
      }}>
      <img src={image} alt={languageFull} title={languageFull} />
    </div>
  );
};
