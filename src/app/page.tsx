import { getTestTableData } from '@/lib/requests';
import { DbElement } from '@/components/DbElement';
import { InsertComponent } from '@/components/InsertComponent';

export default async function App() {
  const data = await getTestTableData();

  return (
    <div className="max-w-full mx-auto flex flex-col gap-4 px-4 py-8 flex-1 w-[1280px]">
      <section className="hero text-center relative block" style={{ backgroundImage: 'url(/imgs/banner.jpg)' }}>
        <div className="hero-overlay absolute bg-opacity-60"></div>
        <div className="hero-content relative py-16 text-neutral-content">
          <span className="text-7xl font-bold">GTomy</span>
        </div>
      </section>
      <section>
        <InsertComponent />
        {data.map((post, index) => (
          <DbElement element={post} key={index} />
        ))}
      </section>
    </div>
  );
}
