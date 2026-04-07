import { useState } from "react";

function CausesCard({ cause }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedAmt, setSelectedAmt] = useState(null);

  const Icon = cause.icon;
  const color = cause.icClr;

  const iconContainerStyle = {
    color: isHovered ? "#f3f4f6" : color,
    backgroundColor: isHovered ? "rgba(255,255,255,0.2)" : "#f3f4f6",
    padding: "12px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    transition: "all 0.3s ease",
  };

  const cardStyle = {
    backgroundColor: isHovered ? color : "white",
    color: isHovered ? "#f3f4f6" : "inherit",
    transition: "all 0.3s 0.2s ease",
  };

  const btn = {
    backgroundColor: isHovered ? "rgba(43, 40, 40, 0.4)" : "#5a5a5a",
    color: "white",
  };

  const handleChange = (e) => {
    if (e.target.type === "radio") {
      const amount = e.target.dataset.amt;
      setSelectedAmt(amount);
    }
  };

  const handleDonate = () => {
    if (!selectedAmt) {
      alert("Please select amount.");
      return;
    }

    const yourUpiId = "YOUR_NGO_UPI_ID@paytm"; 
    const payeeName = "HWCT India";

    // This is the universal UPI deep link format
    const upiLink = `upi://pay?pa=${yourUpiId}&pn=${encodeURIComponent(payeeName)}&am=${selectedAmt}&cu=INR`;

    window.open(paytmURL, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      className="p-4 rounded-lg shadow-sm cursor-default flex flex-col justify-between"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center gap-4">
        <div style={iconContainerStyle}>
          <Icon size={24} />
        </div>
        <h3 className="font-bold text-lg">{cause.category}</h3>
      </div>

      <div className="mt-4 space-y-3" onChange={handleChange}>
        {cause.items.map((item) => (
          <div key={item.id} className="radio flex items-start gap-3 text-sm">
            <input
              type="radio"
              name={cause.category}
              id={item.id}
              data-amt={item.amt}
              className="mt-1 cursor-pointer"
              style={{ accentColor: color }}
            />
            <label htmlFor={item.id} className="cursor-pointer leading-tight">
              {item.label}
            </label>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="px-3 py-1 my-3 rounded-xl font-semibold transition-all duration-300"
        style={btn}
        onClick={handleDonate}
      >
        Donate {selectedAmt && ` - ₹${selectedAmt}`}
      </button>
    </article>
  );
}

export default CausesCard;
