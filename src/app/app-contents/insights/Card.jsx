const Card = ({title, percentage, studentCount}) => {
    return (
        <>
            <div className="w-full h-[120px] rounded-[10px] bg-sidebar-accent">
                <div className="px-[20px] pt-[5px] text-[20px]"> {/*TITLE*/}
                    { title }
                </div>

                <div>
                    <div className="pl-[60px] text-[35px] font-bold text-[#1F3463]"> {/*PERCENTAGE*/}
                        { percentage }
                    </div>
                    <div className="pl-[60px] pt-[5px] text-gray-500"> {/*DESCRIPTIONS*/}
                        {`out of ${studentCount} students`}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card