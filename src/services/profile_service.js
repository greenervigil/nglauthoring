

export function loadProfiles(){
    return [
        {
            id: 5,
            name: "Sample Profile 1",
            description: "Sample Profile 1",
            isDefault: true
        },
        {
            id: 77,
            name: "Sample Profile 2",
            description: "Sample Profile 2",
            isDefault: false
        }
    ]
}

export function loadProfile(id){
    return {
            id: 5,
            name: "Sample Profile 1",
            description: "Sample Profile 1",
            isDefault: true
        }
}