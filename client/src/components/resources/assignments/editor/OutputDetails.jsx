/* eslint-disable react/prop-types */

import { Badge } from "@/components/ui/badge";

const OutputDetails = ({ outputDetails }) => {
  return (
    <div className="flex flex-col mt-4 space-y-3 metrics-container">
      <p className="text-sm">
        Status:{" "}
        <Badge variant="secondary">{outputDetails?.status?.description}</Badge>
      </p>
      <p className="text-sm">
        Memory: <Badge variant="secondary">{outputDetails?.memory}</Badge>
      </p>
      <p className="text-sm">
        Time: <Badge variant="secondary">{outputDetails?.time}</Badge>
      </p>
    </div>
  );
};

export default OutputDetails;
