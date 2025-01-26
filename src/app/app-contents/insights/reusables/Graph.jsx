import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'BSIS 1', claimed: 25, unclaimed: 25, },
    { name: 'BSIS 2', claimed: 43, unclaimed: 27, },
    { name: 'BSIS 3', claimed: 20, unclaimed: 50, },
    { name: 'BSIS 4', claimed: 36, unclaimed: 14, },
    { name: 'ACT 1', claimed: 12, unclaimed: 18, },
    { name: 'ACT 2', claimed: 46, unclaimed: 14, },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/p/sandbox/stacked-bar-chart-7fwfgj';

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    width={200} 
                    height={200}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="4 4" />
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={['dataMin', 100]}/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="claimed" stackId="a" fill="#1F3463" />
                    <Bar dataKey="unclaimed" stackId="a" fill="#3B82F6" /> 
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
