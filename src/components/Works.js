import sihi from '../assets/SIHI.png'
import trimdown from '../assets/trimdown.png'
import ap from '../assets/afterParty.png'
import runbud from '../assets/run-buddy.png'
import { Work } from './sub-component/work';
export const Works = () => {
    return (
        <div className="py-14 flex flex-col items-center justify-center  bg-gradient-to-r from-orange-500 to-yellow-400">
            <h1 className="text-4xl logo text-black mb-6">Work</h1>
            <Work 
                project={"Trim-Down"}
                imageUrl={trimdown}
                desc={'My latest project collaborating with a team'}
                link={'https://strategic-home-inspection.herokuapp.com/'} />

           

            <Work 
                project={"Home Inspection"}
                imageUrl={sihi}
                desc={'Home inspection website for a potential inspection company'}
                link={'https://strategic-home-inspection.herokuapp.com/'} />
            <Work
                project={'After-Party'}
                imageUrl={ap}
                desc={'Need to plan a concert/event trip?'}
                link={'https://lrpineda.github.io/afterParty/'} />
            <Work
                project={'Run-Buddy'}
                imageUrl={runbud}
                desc= {'First project I created with HTML and CSS'}
                link= {'https://lrpineda.github.io/run-buddy/'} />
            </div>

    );
}