import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-5 text-center">
      <p className="text-sm font-semibold tracking-widest uppercase text-[#B5956E] mb-3">
        Error 404
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-[#242424] mb-4">
        Página no encontrada
      </h1>
      <p className="text-[#6B7280] max-w-md mb-8">
        Lo sentimos, la página que buscas no existe o fue movida.
        Explora nuestros productos o contáctanos por WhatsApp.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#242424] text-white font-semibold text-sm hover:bg-[#333] transition-colors"
        >
          Ir al inicio
        </Link>
        <a
          href="https://wa.me/523314257226"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#B5956E] text-white font-semibold text-sm hover:brightness-95 transition-all"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
