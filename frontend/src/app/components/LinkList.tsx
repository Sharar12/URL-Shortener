'use client';

import { useEffect, useState, useCallback } from 'react';
import type { Link } from '../types';
import { getLinks, deleteLink } from '../lib/api';
import LinkCard from './LinkCard';

interface Props {
  refreshKey?: number;
}

export default function LinkList({ refreshKey = 0 }: Props) {
  const [links, setLinks] = useState<Link[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchLinks = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      const data = await getLinks();
      setLinks(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load links');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks, refreshKey]);

  async function handleDelete(id: number) {
    try {
      await deleteLink(id);
      setLinks((prev) => prev.filter((l) => l.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete link');
    }
  }

  if (loading) {
    return <p className="text-gray-400 text-center py-8">Loading links...</p>;
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-400">{error}</p>
        <button onClick={fetchLinks} className="mt-3 text-sm text-blue-400 hover:text-blue-300">
          Try again
        </button>
      </div>
    );
  }

  if (links.length === 0) {
    return <p className="text-gray-500 text-center py-8">No links yet. Shorten your first URL above!</p>;
  }

  return (
    <div className="space-y-3">
      {links.map((link) => (
        <LinkCard key={link.id} link={link} onDelete={handleDelete} />
      ))}
    </div>
  );
}
