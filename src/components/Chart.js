import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Chart({ values, data }) {  
  return (
    <div>
      <Pie data={data} />
    </div>
  );
}
