export default function App() {
  return (
    <div className="max-w-full mx-auto flex flex-col gap-4 px-4 py-8 flex-1 w-[1280px]">
      <section className="hero text-center relative block" style={{ backgroundImage: 'url(/imgs/banner.jpg)' }}>
        <div className="hero-overlay absolute bg-opacity-60"></div>
        <div className="hero-content relative py-16 text-neutral-content">
          <span className="text-7xl font-bold">GTomy</span>
        </div>
      </section>
    </div>
  );
}
