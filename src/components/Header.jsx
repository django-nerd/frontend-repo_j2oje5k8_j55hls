import React from 'react';

export default function Header() {
  return (
    <header className="w-full pt-8 pb-4 text-center">
      <div className="mx-auto max-w-md">
        <h1 className="text-3xl font-extrabold tracking-tight" style={{ color: '#2d3748' }}>
          CloseApp
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Tools for small brands to turn conversations into customers
        </p>
      </div>
    </header>
  );
}
