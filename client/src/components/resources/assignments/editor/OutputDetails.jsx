/* eslint-disable react/prop-types */

const OutputDetails = ({ outputDetails }) => {
  return (
    <div className="flex flex-col mt-4 space-y-3 metrics-container">
      <p className="text-sm">
        Status:{" "}
        <span className="px-2 py-1 font-semibold bg-gray-100 rounded-md">
          {outputDetails?.status?.description}
        </span>
      </p>
      <p className="text-sm">
        Memory:{" "}
        <span className="px-2 py-1 font-semibold bg-gray-100 rounded-md">
          {outputDetails?.memory}
        </span>
      </p>
      <p className="text-sm">
        Time:{" "}
        <span className="px-2 py-1 font-semibold bg-gray-100 rounded-md">
          {outputDetails?.time}
        </span>
      </p>
    </div>
  );
};

export default OutputDetails;
