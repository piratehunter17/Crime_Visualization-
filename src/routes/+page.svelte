<script lang="ts">
    import { onMount } from 'svelte';
    import * as echarts from 'echarts';
    import { csv } from 'd3-fetch';

    let chartRef: HTMLDivElement;

    onMount(async () => {
        const data = await csv("src/lib/data/2016/Table_9B.3_2016.csv");
        const cityData = data.map(d => d["City (Col.2)"]);
        const totalData = data.map(d => +d["Total (Col.19) = (Col.1 to Col. 19)"]);

        const combinedData = cityData.map((city, index) => ({
            name: city,
            value: totalData[index]
        })).sort((a, b) => b.value - a.value); // Sort data in descending order

        const chart = echarts.init(chartRef);
        const option = {
            title: {
                text: '2016 State Wise Data',
                x: 'center'
            },
            series: [
                {
                    name: 'Cities',
                    type: 'pie',
                    radius: '50%',
                    data: combinedData
                }
            ]
        };

        chart.setOption(option);
    });
</script>

<div bind:this={chartRef} style="width: 600px; height: 400px;"></div>
