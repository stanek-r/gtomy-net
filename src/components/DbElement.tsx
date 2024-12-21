'use client';

import { Button } from 'gtomy-lib';
import { useCallback } from 'react';
import { removeTestTableDataRow } from '@/lib/requests';

export interface DbElementProps {
  element: { data: string };
}

export function DbElement({ element }: DbElementProps) {
  const onClick = useCallback(() => {
    removeTestTableDataRow(element.data)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  }, [element]);

  return (
    <div>
      <p>{element.data}</p>
      <Button onClick={onClick}>Remove &quot;{element.data}&quot;</Button>
    </div>
  );
}
