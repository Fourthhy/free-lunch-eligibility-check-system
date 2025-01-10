import React from 'react';
import Graph from "./reusables/Graph"
import Card from "./reusables/Card"
import Ranking from "./reusables/Ranking"

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
                <div className="grid grid-cols-5 grid-rows-4 gap-[20px] font-roboto h-[490px]">
                    <div className="row-span-4 col-span-3 bg-sidebar-accent rounded-[10px] border-gray">
                        <Graph />
                    </div>
                    <div className="grid gap-[10px] col-span-1 row-span-2">
                        <Card
                            title="Total lunch claimed"
                            percentage="95%"
                            studentCount="100"
                        />
                    </div>
                    <div className="grid gap-[10px] col-span-1 row-span-2">
                        <Card
                            title="Total lunch claimed"
                            percentage="95%"
                            studentCount="100"
                        />
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