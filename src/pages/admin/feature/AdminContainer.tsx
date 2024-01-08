import { Flex, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  fetchAndAggregateData,
  getCount,
} from "../../../services/AdminServices";
import { AdminBoardCard } from "./AdminBoardCard";
import { Totals } from "../../../model/GlobalInterfaces";
import {
  adminBoardGridStyles,
  adminContainerFlexStyles,
} from "../style/styleAdmin";
// import { useTotalLitterStore } from "../../../store/useTotalLitterStore";

export interface RenderData {
  label: string;
  data: number | RenderData[];
}

export const AdminContainer = () => {
  const [dataCounts, setDataCounts] = useState<RenderData[]>([]);
  // const { setTotals } = useTotalLitterStore();

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
    <Flex {...adminContainerFlexStyles}>
      <Grid {...adminBoardGridStyles}>
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
    </Flex>
  );
};
