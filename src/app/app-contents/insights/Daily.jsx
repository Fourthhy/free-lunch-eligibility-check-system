import React from 'react';
import Example from "./Recharts"
import Card from "./Card"

class Daily extends React.Component {
    render() {
        return (
            <>
                <div className="grid grid-cols-2 grid-rows-auto gap-[20px] font-roboto">
                    <Card 
                        title="Total lunch claimed"
                        percentage="95%"
                        studentCount="100"
                    />
                    <Card 
                        title="Total lunch unclaimed"
                        percentage="5%"
                        studentCount="100"
                    />
                    <div className="w-full h-[600px] col-span-2 bg-sidebar-accent rounded-m">
                        <Example />
                    </div>

                </div>

            </>
        )
    }
}

export default Daily