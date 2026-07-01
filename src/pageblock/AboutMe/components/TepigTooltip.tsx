import React from "react";

type Props = {
  children: React.ReactNode;
};

export const TepigTooltip = ({ children }: Props) => {
  return (
    <span className="relative inline-block group cursor-pointer text-accent-orange font-bold">
      {children}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 z-50 drop-shadow-2xl">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/498.png"
          alt="Tepig"
          width={120}
          height={120}
          className="max-w-[100px] sm:max-w-[120px] drop-shadow-md origin-bottom animate-bounce"
          style={{ animationDuration: '2s' }}
        />
      </span>
    </span>
  );
};
