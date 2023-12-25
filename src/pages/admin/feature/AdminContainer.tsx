import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  fetchAndAggregateData,
  getCount,
} from "../../../services/AdminServices";
import { AdminBoardCard } from "./AdminBoardCard";
interface Totals {
  totalPlastic: number;
  totalMetal: number;
  totalGlass: number;
  totalOther: number;
  totalAnimals: number;
}
export interface RenderData {
  label: string;
  data: number | RenderData[];
}

export const AdminContainer = () => {
  const [dataCounts, setDataCounts] = useState<RenderData[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totals, setTotals] = useState({
    totalPlastic: 0,
    totalMetal: 0,
    totalGlass: 0,
    totalOther: 0,
    totalAnimals: 0,
  });

  const convertTotalsToRenderData = (totals: Totals): RenderData[] => {
    return [
      { label: "Plast", data: totals.totalPlastic },
      { label: "Metall", data: totals.totalMetal },
      { label: "Glas", data: totals.totalGlass },
      { label: "Övrigt", data: totals.totalOther },
      { label: "Invasiva Arter", data: totals.totalAnimals },
    ];
  };

  useEffect(() => {
    const fetchData = async () => {
      const usersCount = await getCount("users");
      const articlesCount = await getCount("articles");
      const eventsCount = await getCount("events");
      const ourLocationsCount = await getCount("ourLocations");
      const subLocationsCount = await getCount("locations");
      const aggregatedTotals = await fetchAndAggregateData();
      setTotals(aggregatedTotals);

      const renderData: RenderData[] = [
        { label: "Användare", data: usersCount },
        { label: "Artiklar", data: articlesCount },
        { label: "Händelser", data: eventsCount },
        { label: "Besökta Platser", data: ourLocationsCount },
        { label: "Tipsade Platser", data: subLocationsCount },
      ];

      const totalsData = convertTotalsToRenderData(aggregatedTotals);
      setDataCounts([...renderData, { label: "Totalt", data: totalsData }]);
    };

    fetchData();
  }, []);

  return (
    <Grid
      mt="2rem"
      w="100vw"
      templateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 2fr)",
        lg: "repeat(3, 2fr)",
      }}
      gap={6}
      p={5}
      background="white"
      border="solid 2px black"
    >
      {dataCounts.map((data, index) => {
        if (data.label === "Totalt") {
          return (
            <AdminBoardCard
              key={index}
              heading={data.label}
              renderData={data.data as RenderData[]}
            />
          );
        } else {
          return (
            <AdminBoardCard
              key={index}
              heading={data.label}
              renderData={[data]}
            />
          );
        }
      })}
    </Grid>
  );
};
