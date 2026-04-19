import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { GeoContent, getGeoContent } from '@/config/geoContent';

interface GeoContextType {
  geo: GeoContent;
  loading: boolean;
  countryCode: string;
}

const GeoContext = createContext<GeoContextType>({
  geo: getGeoContent('BR'),
  loading: true,
  countryCode: 'BR',
});

async function fetchGeoFromAPI(code: string): Promise<GeoContent | null> {
  try {
    const res = await fetch(`/api/geo-content/${code}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data as GeoContent;
  } catch {
    return null;
  }
}

export function GeoProvider({ children }: { children: ReactNode }) {
  const [geo, setGeo] = useState<GeoContent>(getGeoContent('BR'));
  const [loading, setLoading] = useState(true);
  const [countryCode, setCountryCode] = useState('BR');

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);

    fetch('https://ipapi.co/json/', { signal: controller.signal })
      .then((r) => r.json())
      .then(async (data) => {
        const code: string = data.country_code || 'BR';
        setCountryCode(code);

        const apiContent = await fetchGeoFromAPI(code);
        if (apiContent) {
          setGeo({ ...apiContent, country: code as any });
        } else {
          setGeo(getGeoContent(code));
        }
      })
      .catch(() => {})
      .finally(() => {
        clearTimeout(timeout);
        setLoading(false);
      });
  }, []);

  return (
    <GeoContext.Provider value={{ geo, loading, countryCode }}>
      {children}
    </GeoContext.Provider>
  );
}

export function useGeo() {
  return useContext(GeoContext);
}
