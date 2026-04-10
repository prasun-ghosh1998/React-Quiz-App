import { LinearProgress } from "@mui/material";

const ProgressBar = ({ value }: { value: number }) => {
  return <LinearProgress variant="determinate" value={value} />;
};

export default ProgressBar;