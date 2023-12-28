import { useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import { SubLocation } from "../../../model/LocationsInterfaces";

interface IResetCenterViewProps {
  selectLocation: SubLocation;
}

export const ResetCenterView = ({ selectLocation }: IResetCenterViewProps) => {
  const map = useMap();
  const defaultPlace: number[] = [59.3497428, 17.855575321915243];

  useEffect(() => {
    if (selectLocation) {
      map.setView(
        L.latLng(
          selectLocation?.lat
            ? parseFloat(selectLocation.lat)
            : defaultPlace[0],
          selectLocation?.lon ? parseFloat(selectLocation.lon) : defaultPlace[1]
        ),
        map.getZoom(),
        {
          animate: true,
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectLocation]);

  return null;
};
