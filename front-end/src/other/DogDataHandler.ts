import { HealthStatus, getDesc } from "./HealthStatus";

export function handleData( imageName: string | undefined, healthStatus: HealthStatus, description: string) {
    
    
    const defaultImage = "not_available.png";

    const imageUrl = imageName ? `http://localhost:8080/images/${imageName}` : `http://localhost:8080/images/${defaultImage}`;
    const imageClassName = imageUrl === `http://localhost:8080/images/${defaultImage}` ? "dog-image no-image" : "dog-image"; 

    const healthDescription = getDesc(healthStatus);
    const healthClassName = healthStatus === HealthStatus.NeedMedical ? "dog-healthstatus need-medical" :
                            healthStatus === HealthStatus.SpecialNeeds ? "dog-healthstatus special-needs" :
                            "dog-healthstatus";

    const maxWords = 9;
    const wordsArray = description.split(' ');
    var desc = "";
    if (wordsArray.length > maxWords) {
        desc = wordsArray.slice(0, maxWords).join(' ') + '...';
    } else {
        desc = description;
    }
    return { imageUrl, imageClassName, healthDescription, healthClassName, desc };
    };