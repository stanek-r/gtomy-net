'use client';

import { insertTestTableRow } from '@/lib/requests';
import { Button } from 'gtomy-lib';
import { useCallback } from 'react';
import { revalidatePath } from 'next/cache';

export function InsertComponent() {
  const onClick = useCallback(() => {
    insertTestTableRow('b' + Math.random())
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
      .finally(() => revalidatePath('/'));
  }, []);

  return <Button onClick={onClick}>Insert row</Button>;
}
