import { Link } from '@tanstack/react-router';
import { Button } from 'gtomy-lib';

export function Menu() {
  return (
    <div className="navbar bg-base-300 text-base-content">
      <div className="flex-1">
        <Button as={Link} to="/" size="lg" color="ghost" className="text-xl">
          <img src="/favicon.ico" className="mr-2 size-8 shrink-0 rounded" alt="Application icon" />
          GTomy
        </Button>
      </div>
    </div>
  );
}
