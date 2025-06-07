import { useQuery } from "@tanstack/react-query";

const transformSkips = (data: any[]) =>
    data.map((skip, index) => {
        const vatRate = skip.vat || 0;
        const priceWithVat = skip.price_before_vat
            ? skip.price_before_vat * (1 + vatRate / 100)
            : 200 + index * 50;

        return {
            id: skip.id?.toString() || index.toString(),
            image: `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`,
            name: `${skip.size} Yard Skip`,
            size: `${skip.size}`,
            price: Math.round(priceWithVat),
            hire_period: skip.hire_period_days || 14,
            popularity: Math.floor(Math.random() * 100) + 1,
            savings: index === 2 ? 75 : index === 1 ? 50 : undefined,
            isRecommended: index === 2,
            allowedOnRoad: skip.allowed_on_road,
            allowsHeavyWaste: skip.allows_heavy_waste,
            transportCost: skip.transport_cost ?? undefined,
            perTonneCost: skip.per_tonne_cost ?? undefined,
            features: [
                skip.allowed_on_road ? "Road placement allowed" : "Off-road only",
                skip.allows_heavy_waste ? "Heavy waste supported" : "No heavy waste",
                `${skip.hire_period_days || 14} day hire`,
                "No hidden fees",
            ],
        };
    });



export const useSkipsQuery = (
    postcode = "NR32",
    area = "Lowestoft"
) => {
    return useQuery({
        queryKey: ["skips", postcode, area],
        queryFn: async () => {
            try {
                const res = await fetch(
                    `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`
                );
                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                return transformSkips(data);
            } catch (error) {
                console.error("Error fetching skips:", error);
                return [];
            }
        },
        staleTime: 1000 * 60 * 5,
        retry: 1,
    });
};
