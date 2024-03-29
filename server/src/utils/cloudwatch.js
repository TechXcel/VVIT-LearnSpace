import {
  PutLogEventsCommand,
  CloudWatchLogsClient,
} from "@aws-sdk/client-cloudwatch-logs";

const cloudwatchLogsClient = new CloudWatchLogsClient({
  region: process.env.AWS_REGION,
});

export const logUserActivity = async (req, res, next) => {
  try {
    if (!req.user) {
      throw new Error("User information not available");
    }

    const userName = req.user.name;

    const params = {
      logGroupName: "learnspace-app-logs",
      logStreamName: "user-activity-stream",
      logEvents: [
        {
          message: `User ${userName} accessed ${req.originalUrl}`,
          timestamp: new Date().getTime(),
        },
      ],
    };

    await cloudwatchLogsClient.send(new PutLogEventsCommand(params));
    console.log("User activity logged successfully");
  } catch (err) {
    console.error("Error logging user activity:", err);
  }
};
