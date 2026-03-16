import { useEffect } from 'react';

const BRAND = 'CAD Viewer Pro';

export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title 
      ? `${title} — ${BRAND}` 
      : BRAND;
    return () => {
      document.title = BRAND;
    };
  }, [title]);
}
