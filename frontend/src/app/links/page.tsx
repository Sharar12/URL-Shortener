'use client';

import { useState, useCallback } from 'react';
import CreateLinkForm from '../components/CreateLinkForm';
import LinkList from '../components/LinkList';

export default function LinksPage() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleCreated = useCallback(() => {
    setRefreshKey((k) => k + 1);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-8 text-3xl font-bold text-white">My Links</h1>
        <CreateLinkForm onCreated={handleCreated} />
        <LinkList refreshKey={refreshKey} />
      </div>
    </div>
  );
}