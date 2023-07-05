import * as React from "react"
import {ButtonLink} from "../../Button";

const Feedback = () => {
    return <div className="bg-Neutral-200 w-full flex justify-center items-center py-[90px] px-6">
        <div className="flex bg-Shades-0 items-center h-full border-solid border-2 max-w-container rounded-xl py-16 px-10 border-Neutral-700 justify-between space-x-28">
            <div className="flex flex-col justify-evenly">
                <h1 className="text-[35px] font-bold">Feedback Form for Pastors and Elders</h1>
                <div className="flex">
                    <ButtonLink to={"/about/feedback"} hasArrow={true}>Feedback Form</ButtonLink>
                </div>
            </div>
            <div className="flex flex-col">
                <p className="text-lg">This form is for people connected to Harvest Mission Community Church of Ann Arbor to be able to submit questions, concerns, issues, or suggestions to the pastors and elders.</p>
                <p className="text-lg">Please note: the name and email questions are optional, but if forms are submitted anonymously, it may be more difficult to follow up on some types of concerns.</p>
            </div>
        </div>
    </div>
}

export default Feedback;