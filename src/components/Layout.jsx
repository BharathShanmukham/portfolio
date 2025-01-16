// src/components/Layout.jsx
export default function Layout({ children }) {
    return (
      <div className="bg-black text-white font-inter">
        <div className="max-w-7xl mx-auto px-4">{children}</div>
      </div>
    );
  }
  