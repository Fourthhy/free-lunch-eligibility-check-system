const Card = ({title, percentage, studentCount, height}) => {
    return (
        <>
            <div className={`w-full h-${height ? height : "full"} rounded-[10px] bg-sidebar-accent border-gray border-[1px]`}>
                <div className="text-center py-[5px] text-[20px]"> {/*TITLE*/}
                    { title }
                </div>

                <div>
                    <div className="pl-[60px] text-[35px] font-bold text-[#1F3463] mt-[-5px]"> {/*PERCENTAGE*/}
                        { percentage }
                    </div>
                    <div className="pl-[60px] mt-[-5px] text-gray-500"> {/*DESCRIPTIONS*/}
                        {`out of ${studentCount} students`}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card