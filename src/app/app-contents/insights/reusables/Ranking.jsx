import { Progress } from "@/components/ui/progress"


export default function Ranking({list}) {
    return (
        <>
            <div className="w-full h-full rounded-[10px] bg-sidebar-accent font-roboto border-gray border-[1px]">
                <div className="text-[20px] px-[20px] py-[6px]"> {/*TITLE*/}
                    Ranking
                </div>
                {/* <hr />
                <div className="text-center text-gray-500"> 
                    This analysis is based on 4,500 students who claimed free lunch of BSIS and ACT students from the higher education department
                </div> */}

                <div> {/*RANKING LIST*/}
                    {
                        list.map((item) => (
                        <div className="flex justify-center m-[10px]" key={item.name}>
                            <p className="w-[40%] text-center h-[30px]">{item.name}</p>
                            <div className="flex items-center justify-center w-full  w-full">
                                <Progress value={item.value} className="w-[80%]" />
                                <p className="w-[15%] pl-[5px]">{`${item.value}%`}</p>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}