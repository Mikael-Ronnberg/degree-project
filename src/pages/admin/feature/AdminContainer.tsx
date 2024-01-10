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

export interface RenderData {
  label: string;
  data: number | RenderData[];
}

export const AdminContainer = () => {
  const [dataCounts, setDataCounts] = useState<RenderData[]>([]);

  const transformData = async () => {
    const usersCount = await getCount("users");
    const articlesCount = await getCount("articles");
    const eventsCount = await getCount("events");
    const ourLocationsCount = await getCount("ourLocations");
    const subLocationsCount = await getCount("locations");

    const renderData: RenderData[] = [
      { label: "Användare", data: usersCount },
      { label: "Artiklar", data: articlesCount },
      { label: "Händelser", data: eventsCount },
      { label: "Besökta Platser", data: ourLocationsCount },
      { label: "Tipsade Platser", data: subLocationsCount },
    ];

    return renderData;
  };

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
    transformData().then((renderData) => {
      const onDataReceived = (totals: Totals) => {
        const totalsData = convertTotalsToRenderData(totals);
        setDataCounts([...renderData, { label: "Totalt", data: totalsData }]);
      };

      const unsubscribe = fetchAndAggregateData(onDataReceived);
      return () => unsubscribe();
    });
  }, []);

  return (
    <Flex {...adminContainerFlexStyles}>
      <Grid {...adminBoardGridStyles}>
        {dataCounts.map((data, index) => (
          <AdminBoardCard
            key={index}
            heading={data.label}
            renderData={Array.isArray(data.data) ? data.data : [data]}
          />
        ))}
      </Grid>
    </Flex>
  );
};
