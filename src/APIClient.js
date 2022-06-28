let properties = {
    "Energy_System":{
        "property_a":15.6,
        "property_b":true,
        "property_c":"Electricity"
    },
    "Elemet_1":{
        "property_a":10.5,
        "property_b":"Electricity",
        "property_c":20.1
    },
    "Elemet_2":{
        "property_a":45.7,
        "property_b":"water",
        "property_c":false
    }
}

export const getProperties = () => {
    return properties
}

export const updateProperties = (newProps) => {
    properties = newProps
}