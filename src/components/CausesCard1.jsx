function CausesCard1({ cause }) {
  const Icon = cause.icon;
  
  const handleDonate = () => {
    const paytmURL = `https://m.paytm.me/HWCT`;
    window.open(paytmURL, "_blank", "noopener,noreferrer");
  };

  return (
    <article className="p-4 rounded-lg shadow-sm cursor-default flex flex-col justify-between bg-main-bg-200">
      <div className="flex flex-col items-center gap-4">
        <div style={{color: cause.icClr}} className="p-4 aspect-square rounded-full bg-main-bg-600/70">
          <Icon size={28} />
        </div>
        <h3 className="font-bold text-lg">{cause.category}</h3>
      </div>

      <ul className="mt-4 space-y-2 list-decimal list-inside">
        {cause.items.map((item) => (
          <li key={item.id} className="gap-3 text-sm">
            {item.label}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="px-3 py-1 my-3 bg-main-bg-600 text-main-bg-50 cursor-pointer rounded-xl font-semibold transition-all duration-300"
        onClick={handleDonate}
      >
        Donate
      </button>
    </article>
  );
}

export default CausesCard1;
