import * as echarts from "echarts/core";
import { LineChart, BarChart } from "echarts/charts";
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

// 注册必须的组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LineChart,
    CanvasRenderer,
    BarChart,
    LegendComponent,
]);

export default echarts;