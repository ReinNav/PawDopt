import { HealthStatus, getDesc } from "./HealthStatus";

export function handleData( id: string, image: String | undefined, healthStatus: HealthStatus, description: string | undefined) {
    
    const defaultImage = "not_available.png";

    const imageUrl = image ? `http://localhost:8080/images/${image}` : `/${defaultImage}`;
    const imageClassName = imageUrl === `/${defaultImage}` ? "dog-image no-image" : "dog-image"; 

    const healthDescription = getDesc(healthStatus);
    const healthClassName = healthStatus === HealthStatus.NeedMedical ? "dog-healthstatus need-medical" :
                            healthStatus === HealthStatus.SpecialNeeds ? "dog-healthstatus special-needs" :
                            "dog-healthstatus";

    const maxWords = 9;
    if (!description) description = "";
    const wordsArray = description.split(' ');
    var desc = "";
    if (wordsArray.length > maxWords) {
        desc = wordsArray.slice(0, maxWords).join(' ') + '...';
    } else {
        desc = description;
    }
    return { imageUrl, imageClassName, healthDescription, healthClassName, desc };
    };