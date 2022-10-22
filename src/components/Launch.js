const Launch = (singleLaunch, index = 0) => {
    // if(singleLaunch.links.mission_patch === null)
    //     return undefined

    const divSingleLaunch = document.createElement('div')
    divSingleLaunch.classList.add('launch')
    divSingleLaunch.classList.add('col-md-3')

    if(index % 3 !== 0) {
        divSingleLaunch.classList.add('offset-md-1')
    }

    const imgLaunchPatch = document.createElement('img')
    imgLaunchPatch.src = singleLaunch.links.mission_patch
    imgLaunchPatch.alt = 'launch patch'

    const pLaunchName = document.createElement('p')
    pLaunchName.textContent = singleLaunch.rocket.rocket_name
    pLaunchName.classList.add('launch_name')

    const pLaunchYear = document.createElement('p')
    pLaunchYear.textContent = singleLaunch.launch_year
    pLaunchYear.classList.add('launch_year')

    divSingleLaunch.append(imgLaunchPatch, pLaunchName, pLaunchYear)

    return divSingleLaunch
}

export default Launch

