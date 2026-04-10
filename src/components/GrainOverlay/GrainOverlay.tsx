export const GrainOverlay = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-100 h-full w-full overflow-hidden">
      {/* 1. Виньетка */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.5)_150%)] mix-blend-multiply" />

      {/* 2. Шум */}
      <div className="absolute inset-0 opacity-[0.14] mix-blend-overlay">
        <svg className="h-full w-full">
          <filter id="cinematicNoise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="3" /* октавы для более органичного, нерегулярного пленочного шума */
              stitchTiles="stitch"
            >
              <animate
                attributeName="seed"
                from="0"
                to="10"
                dur="1s"
                repeatCount="indefinite"
              />
            </feTurbulence>

            {/* Полностью обесцветить, чтобы удалить цифровой радужный шум */}
            <feColorMatrix type="saturate" values="0" />

            {/* Увеличить контраст для более четкого вида пленки */}
            <feComponentTransfer>
              <feFuncR type="linear" slope="1.5" intercept="-0.2" />
              <feFuncG type="linear" slope="1.5" intercept="-0.2" />
              <feFuncB type="linear" slope="1.5" intercept="-0.2" />
            </feComponentTransfer>
          </filter>

          <rect width="100%" height="100%" filter="url(#cinematicNoise)" />
        </svg>
      </div>
    </div>
  );
};