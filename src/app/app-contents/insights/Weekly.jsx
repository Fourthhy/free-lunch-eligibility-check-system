import React from 'react';
import Graph from "./reusables/Graph"
import Card from "./reusables/Card"
import Ranking from "./reusables/Ranking"
import AnotherCard from "./reusables/AnotherCard"
const list = [
    { name: "ikaw", value: "69" },
    { name: "adobo", value: "55" },
    { name: "calederata", value: "50" },
    { name: "monggo", value: "10" },
]


class Weekly extends React.Component {
    render() {
        return (
            <>
                <div className="grid grid-cols-5 grid-rows-4 gap-[20px] font-roboto h-[calc(100vh-200px)]">
                    <div className="row-span-4 col-span-3 bg-sidebar-accent rounded-[10px] border-gray">
                        <Graph />
                    </div>
                    <div className="grid gap-[10px] col-span-2 row-span-2">
                        <AnotherCard />
                    </div>
                    <div className="w-full col-span-2 row-span-2">
                        <Ranking list={list} />
                    </div>
                </div>
            </>
        )
    }
}

export default Weekly