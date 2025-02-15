import { Link } from '@tanstack/react-router';

export function Menu() {
  return (
    <div className="navbar bg-base-300 text-base-content">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          <img src="/favicon.ico" className="mr-2 size-8 shrink-0 rounded" alt="Application icon" />
          GTomy
        </Link>
      </div>
    </div>
  );
}
