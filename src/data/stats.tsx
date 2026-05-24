import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "1M+",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Hours of meetings transcribed by users worldwide with perfect accuracy."
    },
    {
        title: "4.8",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Star rating on Google Play, loved by professionals and students alike."
    },
    {
        title: "50+",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "Languages supported for transcription with real-time speaker detection."
    }
];