import React from 'react';
import Graph from "./reusables/Graph"
import DailyCard from "./reusables/CardDate"
import DailyChart from "./reusables/DailyChart"
import MealCardCount from './reusables/MealCardCount'
import MealInput from "./reusables/MealInput"

class Daily extends React.Component {
    render() {
        return (
            <>
                <div className="grid grid-cols-4 grid-rows-4 gap-[20px] font-roboto h-[calc(100vh-200px)]">
                    <div className="w-full col-span-1 row-span-1">
                        <DailyCard /> 
                    </div>
                    <div className="w-full col-span-1 row-span-1">
                        <MealCardCount />
                    </div>
                    <div className="grid gap-[10px] col-span-1 row-span-1 flex item">
                        <DailyChart /> 
                    </div>
                    <div className="grid gap-[10px] col-span-1 row-span-1 flex item">
                        <MealInput />
                    </div>
                    <div className="row-span-3 col-span-4 bg-sidebar-accent rounded-[10px] border-gray">
                        <Graph />
                    </div>
                </div>
            </>
        )
    }
}

export default Daily