import React from 'react';
import Graph from "./reusables/Graph"
import Card from "./reusables/Card"

class Daily extends React.Component {
    render() {
        return (
            <>
                <div className="grid grid-cols-2 grid-rows-auto gap-[20px] font-roboto">
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
                    <div className="w-full h-[500px] col-span-2 bg-sidebar-accent rounded-m">
                        <Graph />
                    </div>
                </div>
            </>
        )
    }
}

export default Daily