"use client"

const KKLogo = ({ white = false }) => {
  return (
    <img
      src="/assets/img/logo/kk-logo.png"
      alt="Koffee Kuento"
      style={{
        width: '120px',
        height: '120px',
        objectFit: 'contain',
        display: 'block',
        filter: white ? 'drop-shadow(0 2px 6px rgba(0,0,0,0.35))' : 'none',
      }}
    />
  );
};

export default KKLogo;
