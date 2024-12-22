'use server';

import { pool } from '@/lib/postgress';
import { revalidatePath } from 'next/cache';

export async function getTestTableData(): Promise<{ data: string }[]> {
  const client = await pool.connect();
  try {
    const { rows } = await client.query('SELECT * FROM test_table');
    return rows;
  } finally {
    client.release();
  }
}

export async function removeTestTableDataRow(data: string): Promise<void> {
  const client = await pool.connect();
  try {
    await client.query("DELETE FROM test_table WHERE data = '" + data + "'");
  } finally {
    client.release();
    revalidatePath('/');
  }
}

export async function insertTestTableRow(data: string): Promise<void> {
  const client = await pool.connect();
  try {
    await client.query("INSERT INTO test_table VALUES ('" + data + "')");
  } finally {
    client.release();
    revalidatePath('/');
  }
}
