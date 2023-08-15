import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5percent from "@amcharts/amcharts5/percent";
import { useEffect } from "react";

const TopSixPie = ({chartValues, cand}) => {
    useEffect(() => {
        let root = am5.Root.new("chartdiv");
    
        // ...
        root.setThemes([
            am5themes_Animated.new(root)
          ]);
          
          let chart = root.container.children.push(am5percent.PieChart.new(root, {
            layout: root.verticalLayout
          }));
          
          let series = chart.series.push(am5percent.PieSeries.new(root, {
            valueField: "value",
            categoryField: "category",
          }));
          
          series.data.setAll(
            // { value: 10, category: "One" },
            // { value: 9, category: "Two" },
            // { value: 6, category: "Three" },
            // { value: 5, category: "Four" },
            // { value: 4, category: "Five" },
            // { value: 3, category: "Six" },
            // { value: 1, category: "Seven" },
            chartValues
          );
          
          let legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.percent(50),
            x: am5.percent(50),
            marginTop: 15,
            marginBottom: 15
          }));
          
          legend.data.setAll(series.dataItems);
          
          series.appear(1000, 100);
    
        root.current = root;
    
        return () => {
          root.dispose();
        };
      }, [cand]);

  return (
    <div id="chartdiv" className="w-full h-[400px] p-3 text-[12px]"></div>
  )
}

export default TopSixPie;