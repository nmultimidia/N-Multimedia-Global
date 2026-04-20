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

function deepMerge<T extends object>(base: T, override: Partial<T>): T {
  const result = { ...base };
  for (const key in override) {
    const val = override[key];
    if (val !== null && val !== undefined) {
      if (
        typeof val === 'object' &&
        !Array.isArray(val) &&
        typeof base[key] === 'object' &&
        !Array.isArray(base[key])
      ) {
        result[key] = deepMerge(base[key] as object, val as object) as T[typeof key];
      } else {
        result[key] = val as T[typeof key];
      }
    }
  }
  return result;
}

async function fetchGeoFromAPI(code: string): Promise<Partial<GeoContent> | null> {
  try {
    const res = await fetch(`/api/geo-content/${code}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data as Partial<GeoContent>;
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

        const staticContent = getGeoContent(code);
        const apiContent = await fetchGeoFromAPI(code);

        if (apiContent) {
          const merged = deepMerge(staticContent, apiContent);
          setGeo({ ...merged, country: code as any });
        } else {
          setGeo(staticContent);
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
