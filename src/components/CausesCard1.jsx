
function CausesCard1({ cause }) {
  const Icon = cause.icon;

  const handleDonate = () => {
    const paytmURL = `https://m.paytm.me/HWCT`;
    window.open(paytmURL, "_blank", "noopener,noreferrer");
  };

  return (
    <article className="group relative flex flex-col justify-between h-full p-6 rounded-2xl bg-main-bg-600 border border-white/5 transition-all duration-300 hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1 overflow-hidden">
      
      <div 
        className="absolute top-0 left-0 w-full h-1 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundColor: cause.icClr }}
      ></div>

      <div className="flex flex-col grow">
        <div className="flex items-center gap-4 mb-6">
          <div 
            className="p-3 rounded-xl bg-main-bg-700 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
            style={{ color: cause.icClr }} 
          >
            <Icon size={28} />
          </div>
          <h3 className="font-bold text-xl text-main-text leading-tight">
            {cause.category}
          </h3>
        </div>

        <ul className="space-y-3 mb-6 grow">
          {cause.items.map((item) => {
            const parts = item.label.split(':');
            
            return (
              <li key={item.id} className="flex items-start gap-3 text-sm text-main-text/80 leading-relaxed">
                <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                <span>
                  {parts[0]}
                  {parts.length > 1 && (
                    <span className="font-bold text-primary-400">
                      :{parts[1]}
                    </span>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Button */}
      <button
        type="button"
        className="w-full py-3 mt-auto rounded-xl font-bold bg-primary-500 text-main-bg-900 transition-all duration-300 hover:bg-primary-400 hover:shadow-lg hover:shadow-primary-500/20 active:scale-95"
        onClick={handleDonate}
      >
        Donate Now
      </button>
    </article>
  );
}

export default CausesCard1;