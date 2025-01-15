"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { dish_name: "Caldereta", claimed: 150, mobile: 200 },
    { dish_name: "Abobo", claimed: 105, mobile: 80 },
    { dish_name: "Monggo", claimed: 100, mobile: 120 },
    { dish_name: "kiss nia", claimed: 75, mobile: 140 },
    { dish_name: "hatdog", claimed: 70, mobile: 130 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#1F3463",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
}

export default function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ranking</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 200,
              bottom: 65, //apply logic - adding 10 every new item added in the chartData
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="dish_name"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="claimed" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="claimed"
              layout="vertical"
              fill="var(--color-desktop)"
              radius={4}
            >
              <LabelList
                dataKey="claimed"
                position="insideLeft"
                offset={8}
                className="fill-[white]"
                fontSize={12}
              />
              <LabelList
                dataKey="dish_name"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={15}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
