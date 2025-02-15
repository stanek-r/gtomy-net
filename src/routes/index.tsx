import { createFileRoute } from '@tanstack/react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <>
      <section className="hero text-center relative block" style={{ backgroundImage: 'url(/imgs/banner.jpg)' }}>
        <div className="hero-overlay absolute bg-opacity-60"></div>
        <div className="hero-content relative py-16 text-neutral-content">
          <h1 className="text-7xl font-bold">GTomy</h1>
        </div>
      </section>
      <section className="text-center space-y-4">
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold mb-4">O mě</h2>
          <p className="text-lg">
            Ahoj, jsem GTomy a toto je můj web. Jsem programátor a tento web je místem, kde budu sdílet své projekty.
          </p>
        </div>
      </section>
      <div className="divider"></div>
      <section className="text-center">
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold">Projekty</h2>
          <p className="text-lg">Zde jsou odkazy na některé z mých projektů, na kterých pracuji/pracoval.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <a href="https://mythicraft.net" className="shadow-lg rounded-lg overflow-hidden hover:opacity-75">
            <LazyLoadImage src="/imgs/mythicraft.jpg" alt="Mythicraft banner" className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-lg underline">Mythicraft</p>
            </div>
          </a>
          <a href="https://galleryeet.net" className="shadow-lg rounded-lg overflow-hidden hover:opacity-75">
            <LazyLoadImage src="/imgs/galleryeet.webp" alt="GallerYeet banner" className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-lg underline">GallerYeet</p>
            </div>
          </a>
        </div>
      </section>
      <div className="divider"></div>
      <section className="text-center space-y-8">
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold">Streamy a videa</h2>
          <p className="text-lg">
            často streamuji postup vývoje a testování. Pokud by tě zajímalo, v jakém stavu server je a jaké jsou
            současné plány, najdeš je na mém Twitchi/Youtubu.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <a href="https://www.twitch.tv/gtomyasek" className="btn btn-lg">
            Twitch
          </a>
          <a href="https://youtube.com/gtomy" className="btn btn-lg">
            Youtube
          </a>
        </div>
      </section>
    </>
  );
}
