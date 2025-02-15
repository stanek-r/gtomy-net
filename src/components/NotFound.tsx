import { Link } from '@tanstack/react-router';

export function NotFound() {
  return (
    <div className="flex flex-col items-center">
      <p className=" text-3xl">Tato stránka neexistuje</p>
      <Link to="/" className="btn btn-link btn-lg">
        Zpátky na domovskou stránku
      </Link>
    </div>
  );
}
