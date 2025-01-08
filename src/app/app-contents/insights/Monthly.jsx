import React from 'react';
import Graph from "./reusables/Graph"
import Card from "./reusables/Card"
import Ranking from "./reusables/Ranking"

const list = [
    { name: "tortang talong", value: "100" },
    { name: "ikaw", value: "69" },
    { name: "adobo", value: "55" },
    { name: "calederata", value: "50" },
    { name: "monggo", value: "10" },
]


class Daily extends React.Component {
    render() {
        return (
            <>
                <div className="grid grid-cols-5 grid-rows-auto gap-[20px] font-roboto">
                <div className="grid gap-[10px] col-span-3">
                    <div className="flex">
                        <Card
                            title="Total lunch claimed"
                            percentage="95%"
                            studentCount="100"
                            height="110px"
                        />
                        <Card 
                            title="Total lunch unclaimed"
                            percentage="5%"
                            studentCount="100"
                            height="110px"
                        />
                    </div>
                        
                    </div>
                    <div className="row-span-3 col-span-2">
                        <Ranking list={list}/>
                    </div>
                    <div className="w-full h-[500px] col-span-3 bg-sidebar-accent rounded-m">
                        <Graph />
                    </div>
                </div>
            </>
        )
    }
}

export default Daily