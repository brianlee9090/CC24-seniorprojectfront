import { useRecoilValue } from "recoil";
import locationStates from "../states/locationStates"
import { Box } from "@chakra-ui/react";

const allData = locationStates;

export default function showAllRoutes() {
    const { routes } = useRecoilValue(allData);

    return (
        <div>
            {routes.map((route) => (                
                    <div key={JSON.stringify(route.stops)}>
                        ID: {route._id} Stops: {JSON.stringify(route.stops)}   
                    </div>                
            ))}
        </div>
    )
}