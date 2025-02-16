import { Link } from '@tanstack/react-router';
import { Button } from 'gtomy-lib';

export function NotFound() {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className=" text-3xl">Tato stránka neexistuje</p>
      <Button as={Link} to="/" size="lg" color="link">
        Zpátky na domovskou stránku
      </Button>
    </div>
  );
}
